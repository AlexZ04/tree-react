import { TreeNode } from "../../entities/Node/TreeNode";
import { useTree } from "../../hooks/UseTree";
import "./TreeContainer.css";

export function TreeContainer() {
    const { tree } = useTree();

    return (
        <div className="container">
            {tree.nodes.map((element) => (
                <TreeNode
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    children={element.children}
                />
            ))}
        </div>
    );
}
