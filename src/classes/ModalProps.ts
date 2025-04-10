import { Dispatch, SetStateAction } from "react";

export interface ModalProps {
    type: "closed" | "adding" | "editing";
    setModalType: Dispatch<SetStateAction<"closed" | "adding" | "editing">>;
}
