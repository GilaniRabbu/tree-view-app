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
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      <button onClick={() => setOpen((prev) => !prev)}>⋮</button>


      {open && (
        <div className="absolute right-0 mt-1 bg-white border shadow p-2 z-10">
          <button
            className="block px-2 py-1 w-full text-left"
            onClick={() => {
              setShowAdd(true);
              setOpen(false);
            }}
          >
            Add Child
          </button>

          <button
            className="block px-2 py-1 w-full text-left"
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