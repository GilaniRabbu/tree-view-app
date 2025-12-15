import { useState } from "react";

export default function AddNodeModal({ parentId, treeData, setTreeData, onClose }) {
    const [label, setLabel] = useState("");

    const addChild = (nodes) =>
        nodes.map((node) => {
            if (node.id === parentId) {
                return {
                    ...node,
                    children: [...node.children, { id: Date.now(), label, children: [] }],
                };
            }
            return node.children
                ? { ...node, children: addChild(node.children) }
                : node;
        });


    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white p-4">
                <input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Node label"
                />
                <div className="mt-2">
                    <button
                        onClick={() => {
                            setTreeData(addChild(treeData));
                            onClose();
                        }}
                    >
                        Add
                    </button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}