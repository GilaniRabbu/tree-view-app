"use client";

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import TreeNode from "./TreeNode";
import AddRootModal from "./AddRootModal";
import { initialTreeData } from "../Data/Data";

export default function Tree() {
  const [treeData, setTreeData] = useState(initialTreeData);
  const [showRootModal, setShowRootModal] = useState(false);

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
