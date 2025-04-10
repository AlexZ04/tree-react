import { ModalProps } from "../../classes/ModalProps";
import { useTree } from "../../hooks/UseTree";
import "./Modal.css";

export function Modal({ type, setModalType }: ModalProps) {
    const { selectedNode, addNode, updateNode } = useTree();

    console.log(selectedNode);

    return (
        <div
            className={`modal-window ${type === "closed" ? "hidden" : ""}`}
            onClick={() => setModalType("closed")}
        >
            <div
                className="modal-window-body"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-window-body__head">
                    <button
                        className="close-button"
                        onClick={() => setModalType("closed")}
                    >
                        X
                    </button>
                </div>
                <div className="modal-window-body__form"></div>
                <div className="modal-window-body__bottom">
                    <button className="apply-button">Apply</button>
                </div>
            </div>
        </div>
    );
}
