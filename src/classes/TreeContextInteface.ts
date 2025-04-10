import { Dispatch, SetStateAction } from "react";
import { FirstLay } from "./NodeInfo";

export interface TreeContextInteface {
    tree: FirstLay;
    setTree: Dispatch<SetStateAction<FirstLay>>;

    addNode: (id: string | null, text: string, isChild: boolean) => void;
    updateNode: (id: string | null, updatedText: string) => void;
    deleteNode: (id: string | null) => void;
    reset: () => void;

    selectedNode: string | null;
    setSelectedNode: Dispatch<SetStateAction<string | null>>;

    getSelectedNodeName: () => string;
}
