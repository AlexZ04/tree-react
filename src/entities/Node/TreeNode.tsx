import { NodeInfo } from "../../classes/NodeInfo";
import "./Node.css";

export function TreeNode({ name, children }: NodeInfo) {
    return (
        <>
            <div className="node">
                <div className="node-body">
                    <h3>{name}</h3>
                </div>

                <div className="node-children">
                    {children.map((element) => (
                        <TreeNode
                            name={element.name}
                            children={element.children}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
