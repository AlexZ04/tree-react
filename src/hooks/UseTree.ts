import { createContext, useContext } from "react";
import { TreeContextInteface } from "../classes/TreeContextInteface";

export const TreeContext = createContext<TreeContextInteface | undefined>(
    undefined
);

export const useTree = () => {
    const context = useContext(TreeContext);

    if (!context) throw new Error();

    return context;
};
