import { Dispatch, SetStateAction } from "react";
import { FirstLay } from "./NodeInfo";

export interface TreeContextInteface {
    tree: FirstLay;
    setTree: Dispatch<SetStateAction<FirstLay>>;
    addNode: () => void;
    updateNode: () => void;
    deleteNode: (id: string | null) => void;
    reset: () => void;
    selectedNode: string | null;
    setSelectedNode: Dispatch<SetStateAction<string | null>>;
}
