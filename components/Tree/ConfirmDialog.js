export default function ConfirmDialog({ onConfirm, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white p-4">
                <p>Are you sure you want to delete this node and all children?</p>
                <button className="pr-3" onClick={onConfirm}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>
    );
}