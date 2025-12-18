"use client";

import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import TreeNode from "./TreeNode";
import AddRootModal from "./AddRootModal";
import { initialTreeData } from "../Data/Data";

export const TREE_STORAGE_KEY = "multi_level_tree_data";

export default function Tree() {
  const [treeData, setTreeData] = useState(() => {
    if (typeof window === "undefined") return initialTreeData;

    const storedData = localStorage.getItem(TREE_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : initialTreeData;
  });

  const [showRootModal, setShowRootModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      TREE_STORAGE_KEY,
      JSON.stringify(treeData)
    );
  }, [treeData]);

  return (
    <div className="p-4">
      {/* Add Root Node */}
      <button
        onClick={() => setShowRootModal(true)}
        className="flex items-center gap-1 mb-4 px-3 py-1 border border-gray-300 rounded cursor-pointer"
      >
        <FiPlus className="text-gray-700" /> Add Root Node
      </button>

      {treeData.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          treeData={treeData}
          setTreeData={setTreeData}
        />
      ))}

      {showRootModal && (
        <AddRootModal
          setTreeData={setTreeData}
          onClose={() => setShowRootModal(false)}
        />
      )}
    </div>
  );
}
