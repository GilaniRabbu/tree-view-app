import { useState } from "react";

export default function AddRootModal({ setTreeData, onClose }) {
  const [label, setLabel] = useState("");

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-4">
        <h3>Add Root Node</h3>

        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Root label"
        />

        <div className="mt-2">
          <button
            onClick={() => {
              setTreeData((prev) => [
                ...prev,
                {
                  id: Date.now(),
                  label,
                  children: [],
                },
              ]);
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
