import { useTree } from "../../hooks/UseTree";
import { Btn } from "../../shared/Button/Btn";
import "./Footer.css";

export function Footer() {
    const { addNode, updateNode, deleteNode, reset, selectedNode } = useTree();

    return (
        <footer>
            <Btn
                name="Add"
                onClick={() => addNode(selectedNode, "node", true)}
            />
            <Btn name="Remove" onClick={() => deleteNode(selectedNode)} />
            <Btn
                name="Edit"
                onClick={() => updateNode(selectedNode, "edited")}
            />
            <Btn name="Reset" onClick={() => reset()} />
        </footer>
    );
}
