import { useEffect, useState } from "react";
import { ModalProps } from "../../classes/ModalProps";
import { useTree } from "../../hooks/UseTree";
import "./Modal.css";

export function Modal({ type, setModalType }: ModalProps) {
    const { selectedNode, addNode, updateNode, getSelectedNodeName } =
        useTree();

    const [nodeName, setNodeName] = useState("");
    const [addingType, setAddingType] = useState<"children" | "before">(
        "children"
    );

    useEffect(() => {
        if (type === "editing") setNodeName(getSelectedNodeName());
        else setNodeName("");
    }, [type, selectedNode]);

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

    const closeModal = () => {
        setModalType("closed");
        setNodeName("");
        setAddingType("children");
    };

    return (
        <div
            className={`modal-window ${type === "closed" ? "hidden" : ""}`}
            onMouseDown={() => closeModal()}
        >
            <div
                className="modal-window-body"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <div className="modal-window-body__head">
                    <button
                        className="close-button"
                        onClick={() => closeModal()}
                    >
                        X
                    </button>
                </div>

                <div className="modal-window-body__form">
                    <div className="input-container">
                        <label htmlFor="node-name-input">Node name</label>

                        <input
                            id="node-name-input"
                            placeholder="Node name"
                            autoComplete="off"
                            value={nodeName}
                            onChange={(val) => setNodeName(val.target.value)}
                        />
                    </div>

                    {type === "adding" ? (
                        <div className="input-container">
                            <label htmlFor="adding-type-select">
                                Adding type
                            </label>

                            <select
                                id="adding-type-select"
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
                        </div>
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
