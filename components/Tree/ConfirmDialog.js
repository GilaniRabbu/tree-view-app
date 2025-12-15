import ModalWrapper from "../Shared/ModalWrapper";

export default function ConfirmDialog({ onConfirm, onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <p className="mb-3">
        Are you sure you want to delete this node and all its children?
      </p>

      <div className="flex gap-2 justify-end">
        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Yes
        </button>

        <button onClick={onClose}>No</button>
      </div>
    </ModalWrapper>
  );
}
