import { TreeNode } from "../../entities/Node/TreeNode";
import "./TreeContainer.css";

export function TreeContainer() {
    return (
        <div className="container">
            <TreeNode />
            <TreeNode />
            <TreeNode />
        </div>
    );
}
