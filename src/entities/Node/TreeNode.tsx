import { NodeInfo } from "../../classes/NodeInfo";
import { useTree } from "../../hooks/UseTree";
import "./Node.css";

export function TreeNode({ id, name, children }: NodeInfo) {
    const { selectedNode, setSelectedNode } = useTree();

    return (
        <>
            <div className="node">
                <div
                    className={`node-body ${
                        selectedNode === id ? "selected" : ""
                    }`}
                    onClick={() => setSelectedNode(id)}
                >
                    <h3>{name}</h3>
                </div>

                <div className="node-children">
                    {children.map((element) => (
                        <TreeNode
                            key={element.id}
                            id={element.id}
                            name={element.name}
                            children={element.children}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
