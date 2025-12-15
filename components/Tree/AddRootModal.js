import { useState } from "react";
import ModalWrapper from "../Shared/ModalWrapper";

export default function AddRootModal({ setTreeData, onClose }) {
  const [label, setLabel] = useState("");

  return (
    <ModalWrapper onClose={onClose}>
      <h3 className="mb-2 font-semibold">Add Root Node</h3>

      <input
        className="border border-gray-300 rounded p-2 w-full"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Node label"
      />

      <div className="mt-3 flex gap-2 justify-end">
        <button
          className="cursor-pointer rounded bg-blue-500 text-white px-3 py-1"
          onClick={() => {
            setTreeData((prev) => [
              ...prev,
              { id: Date.now(), label, children: [] },
            ]);
            onClose();
          }}
        >
          Add
        </button>
        <button
          className="cursor-pointer rounded bg-gray-300 px-3 py-1"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </ModalWrapper>
  );
}
