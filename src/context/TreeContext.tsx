import { ReactNode, useState } from "react";
import { FirstLay, NodeInfo } from "../classes/NodeInfo";
import { v4 as uuid } from "uuid";
import { TreeContext } from "../hooks/UseTree";

const secondChild: NodeInfo = { id: uuid(), name: "third", children: [] };
const firstChild: NodeInfo = {
    id: uuid(),
    name: "second",
    children: [secondChild],
};

const thirdChild: NodeInfo = {
    id: uuid(),
    name: "fourth",
    children: [],
};

const node: NodeInfo = {
    id: uuid(),
    name: "First",
    children: [firstChild, thirdChild],
};

let nodes: NodeInfo[] = [node];

export function TreeProvider({ children }: { children: ReactNode }) {
    const [tree, setTree] = useState<FirstLay>({ nodes: nodes });
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const addNode = () => {
        const newId = uuid();
        alert(newId);
    };

    const updateNode = () => {
        alert();
    };

    const deleteNode = (id: string | null) => {
        const pathToNode = findNodeById(id, tree.nodes);
        console.log(pathToNode);
    };

    const reset = () => {
        setTree({ nodes: [] });
    };

    const findNodeById = (
        id: string | null,
        nodes: NodeInfo[],
        currentPath: string = ""
    ) => {
        if (id === null) return "";

        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id === id) return currentPath + i.toString();

            const pathToCurrentNode: string = findNodeById(
                id,
                nodes[i].children,
                currentPath + i.toString()
            );
            if (pathToCurrentNode !== "") return pathToCurrentNode;
        }

        return "";
    };

    return (
        <TreeContext.Provider
            value={{
                tree,
                setTree,
                addNode,
                updateNode,
                deleteNode,
                reset,
                selectedNode,
                setSelectedNode,
            }}
        >
            {children}
        </TreeContext.Provider>
    );
}
