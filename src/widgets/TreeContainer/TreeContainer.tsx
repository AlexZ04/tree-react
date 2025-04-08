import { FirstLay } from "../../classes/NodeInfo";
import { TreeNode } from "../../entities/Node/TreeNode";
import "./TreeContainer.css";

export function TreeContainer({ nodes }: FirstLay) {
    return (
        <div className="container">
            {nodes.map((element) => (
                <TreeNode name={element.name} children={element.children} />
            ))}
        </div>
    );
}
