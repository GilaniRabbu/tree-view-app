"use client";

import { useState } from "react";
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
        className="mb-4 px-3 py-1 border"
      >
        + Add Root Node
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
