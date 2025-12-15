import ModalWrapper from "../Shared/ModalWrapper";

export default function ConfirmDialog({ onConfirm, onClose }) {
  return (
    <ModalWrapper onClose={onClose}>
      <p className="mb-3">
        Are you sure you want to delete this node and all its children?
      </p>

      <div className="flex gap-2 justify-end">
        <button
          className="cursor-pointer rounded bg-red-500 text-white px-3 py-1"
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Yes
        </button>
        <button
          className="cursor-pointer rounded bg-gray-300 px-3 py-1"
          onClick={onClose}
        >
          No
        </button>
      </div>
    </ModalWrapper>
  );
}
