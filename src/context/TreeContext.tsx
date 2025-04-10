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
    name: "first",
    children: [firstChild, thirdChild],
};

let nodes: NodeInfo[] = [node];

export function TreeProvider({ children }: { children: ReactNode }) {
    const [tree, setTree] = useState<FirstLay>({ nodes: nodes });
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const addNode = (id: string | null, text: string, isChild: boolean) => {
        const newId = uuid();

        setTree((previousTree) => {
            const newTree = structuredClone(previousTree);

            const newNode = {
                id: newId,
                name: text,
                children: [],
            };

            const path = findNodeById(id, newTree.nodes);

            if (!id) {
                if (isChild) newTree.nodes.push(newNode);
                else newTree.nodes.splice(-1, 0, newNode);

                setSelectedNode(newId);
            }

            if (path !== "") {
                if (isChild) {
                    let currentNode = newTree.nodes[Number(path[0])];

                    for (let i = 1; i < path.length; i++)
                        currentNode = currentNode.children[Number(path[i])];

                    currentNode.children.push(newNode);
                } else {
                    if (path.length === 1) {
                        newTree.nodes.splice(Number(path[0]), 0, newNode);
                    } else {
                        let nodeParent = newTree.nodes[Number(path[0])];
                        for (let i = 1; i < path.length - 1; i++)
                            nodeParent = nodeParent.children[Number(path[i])];

                        nodeParent.children.splice(
                            Number(path[path.length - 1]),
                            0,
                            newNode
                        );
                    }
                }

                setSelectedNode(newId);
            }

            return newTree;
        });
    };

    const updateNode = (id: string | null, updatedText: string) => {
        setTree((previousTree) => {
            const newTree = structuredClone(previousTree);

            const path = findNodeById(id, newTree.nodes);
            if (path === "" || !id) return previousTree;

            let currentNode = newTree.nodes[Number(path[0])];
            for (let i = 1; i < path.length; i++)
                currentNode = currentNode.children[Number(path[i])];

            currentNode.name = updatedText;

            return newTree;
        });
    };

    const deleteNode = (id: string | null) => {
        setTree((previousTree) => {
            const newTree = structuredClone(previousTree);

            const path = findNodeById(id, newTree.nodes);
            if (path === "" || !id) return previousTree;

            if (path.length === 1) {
                newTree.nodes.splice(Number(path[0]), 1);
            } else {
                let nodeParent = newTree.nodes[Number(path[0])];
                for (let i = 1; i < path.length - 1; i++)
                    nodeParent = nodeParent.children[Number(path[i])];

                nodeParent.children.splice(Number(path[path.length - 1]), 1);
            }

            setSelectedNode(null);

            return newTree;
        });
    };

    const reset = () => {
        setTree({ nodes: [] });
        setSelectedNode(null);
    };

    const findNodeById = (
        id: string | null,
        nodes: NodeInfo[],
        currentPath: string = ""
    ) => {
        if (!id) return "";

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

    const getSelectedNodeName = () => {
        const path = findNodeById(selectedNode, tree.nodes);

        if (path === "") return "";

        let currentNode = tree.nodes[Number(path[0])];
        for (let i = 1; i < path.length; i++)
            currentNode = currentNode.children[Number(path[i])];

        return currentNode.name;
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
                getSelectedNodeName,
            }}
        >
            {children}
        </TreeContext.Provider>
    );
}
