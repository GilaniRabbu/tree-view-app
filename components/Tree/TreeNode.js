import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import TreeActions from "./TreeActions";

export default function TreeNode({ node, treeData, setTreeData }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border-l border-gray-300 pl-2">
      <div className="ml-4 mt-2">
        <div className="flex items-center gap-3">
          {node.children?.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer flex items-center justify-center w-6 h-6"
              aria-label={expanded ? "Collapse" : "Expand"}
            >
              {expanded ? (
                <FiChevronDown className="text-gray-600" />
              ) : (
                <FiChevronRight className="text-gray-600" />
              )}
            </button>
          )}

          <span>{node.label}</span>

          <TreeActions
            node={node}
            treeData={treeData}
            setTreeData={setTreeData}
          />
        </div>

        {expanded && node.children?.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            treeData={treeData}
            setTreeData={setTreeData}
          />
        ))}
      </div>
    </div>
  );
}