import { useState } from "react";
import ModalWrapper from "../Shared/ModalWrapper";

export default function AddRootModal({ setTreeData, onClose }) {
  const [label, setLabel] = useState("");

  return (
    <ModalWrapper onClose={onClose}>
      <h3>Add Root Node</h3>

      <input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      <div className="mt-2">
        <button
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

        <button onClick={onClose}>Cancel</button>
      </div>
    </ModalWrapper>
  );
}
