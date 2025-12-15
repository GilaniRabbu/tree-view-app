import { useState } from "react";
import TreeActions from "./TreeActions";

export default function TreeNode({ node, treeData, setTreeData }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="ml-4 mt-2">
            <div className="flex items-center gap-2">
                {node.children?.length > 0 && (
                    <button onClick={() => setExpanded(!expanded)}>
                        {expanded ? "−" : "+"}
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
    );
}