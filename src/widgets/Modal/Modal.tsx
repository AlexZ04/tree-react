import { useState } from "react";
import { ModalProps } from "../../classes/ModalProps";
import { useTree } from "../../hooks/UseTree";
import "./Modal.css";

export function Modal({ type, setModalType }: ModalProps) {
    const { selectedNode, addNode, updateNode } = useTree();
    const [nodeName, setNodeName] = useState("");
    const [addingType, setAddingType] = useState<"children" | "before">(
        "children"
    );

    const applyChanges = () => {
        if (nodeName.length < 1) return;

        if (type === "adding") {
            addNode(
                selectedNode,
                nodeName,
                addingType === "children" ? true : false
            );

            setAddingType("children");
        } else updateNode(selectedNode, nodeName);

        setModalType("closed");
        setNodeName("");
    };

    const disableApply = () => {
        if (nodeName.length < 1) return true;
        return false;
    };

    return (
        <div
            className={`modal-window ${type === "closed" ? "hidden" : ""}`}
            onMouseDown={() => setModalType("closed")}
        >
            <div
                className="modal-window-body"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="modal-window-body__head">
                    <button
                        className="close-button"
                        onClick={() => setModalType("closed")}
                    >
                        X
                    </button>
                </div>

                <div className="modal-window-body__form">
                    <input
                        placeholder="Node name"
                        autoComplete="off"
                        value={nodeName}
                        onChange={(val) => setNodeName(val.target.value)}
                    />

                    {type === "adding" ? (
                        <select
                            value={addingType}
                            onChange={(val) =>
                                setAddingType(
                                    val.target.value == "children"
                                        ? "children"
                                        : "before"
                                )
                            }
                        >
                            <option value="children">
                                Children of element
                            </option>
                            <option value="before">Before element</option>
                        </select>
                    ) : (
                        ""
                    )}
                </div>

                <div className="modal-window-body__bottom">
                    <button
                        className="apply-button"
                        onClick={() => applyChanges()}
                        disabled={disableApply()}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
