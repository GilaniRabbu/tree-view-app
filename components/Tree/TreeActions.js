import { useEffect, useRef, useState } from "react";
import AddNodeModal from "./AddNodeModal";
import ConfirmDialog from "./ConfirmDialog";

function deleteNode(nodes, id) {
  return nodes
    .filter((node) => node.id !== id)
    .map((node) => ({
      ...node,
      children: node.children ? deleteNode(node.children, id) : [],
    }));
}

export default function TreeActions({ node, treeData, setTreeData }) {
  const [open, setOpen] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        aria-label="Node actions"
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer flex items-center justify-center w-7 h-7 rounded hover:bg-gray-100 focus:outline-none"
      >
        <span className="text-lg leading-none">⋮</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-1 w-36 rounded border border-gray-300 bg-white shadow-md z-10 overflow-hidden">
          <button
            className="w-full px-3 py-2 text-left text-sm cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setShowAdd(true);
              setOpen(false);
            }}
          >
            Add Child
          </button>
          <div className="h-px bg-gray-200" />
          <button
            className="w-full px-3 py-2 text-left text-sm cursor-pointer text-red-600 hover:bg-red-50"
            onClick={() => {
              setShowDelete(true);
              setOpen(false);
            }}
          >
            Delete
          </button>
        </div>
      )}

      {showAdd && (
        <AddNodeModal
          parentId={node.id}
          treeData={treeData}
          setTreeData={setTreeData}
          onClose={() => setShowAdd(false)}
        />
      )}

      {showDelete && (
        <ConfirmDialog
          onConfirm={() => {
            setTreeData(deleteNode(treeData, node.id));
            setShowDelete(false);
          }}
          onClose={() => setShowDelete(false)}
        />
      )}
    </div>
  );
}