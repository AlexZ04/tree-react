import { useTree } from "../../hooks/UseTree";
import "./Header.css";

export function Header() {
    const { selectedNode, setSelectedNode } = useTree();

    return (
        <header
            className={!selectedNode ? "selected" : ""}
            onClick={() => setSelectedNode(null)}
        >
            <h1>Tree</h1>
        </header>
    );
}
