import { useState } from "react";
import { useTree } from "../../hooks/UseTree";
import { Btn } from "../../shared/Button/Btn";
import "./Footer.css";
import { Modal } from "../Modal/Modal";

export function Footer() {
    const { deleteNode, reset, selectedNode } = useTree();
    const [modalType, setModalType] = useState<"closed" | "adding" | "editing">(
        "closed"
    );

    return (
        <>
            <footer>
                <Btn
                    name="Add"
                    onClick={() => setModalType("adding")}
                    disabled={false}
                />
                <Btn
                    name="Remove"
                    onClick={() => deleteNode(selectedNode)}
                    disabled={!selectedNode ? true : false}
                />
                <Btn
                    name="Edit"
                    onClick={() => setModalType("editing")}
                    disabled={!selectedNode ? true : false}
                />
                <Btn name="Reset" onClick={() => reset()} disabled={false} />
            </footer>

            <Modal type={modalType} setModalType={setModalType} />
        </>
    );
}
