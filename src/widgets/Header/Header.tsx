import { useTree } from "../../hooks/UseTree";
import "./Header.css";

export function Header() {
    const { setSelectedNode } = useTree();

    return (
        <header onClick={() => setSelectedNode(null)}>
            <h1>Tree</h1>
        </header>
    );
}
