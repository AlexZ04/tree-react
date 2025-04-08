import { ButtonProps } from "../../classes/ButtonProps";
import "./button.css";

export function Btn({ name }: ButtonProps) {
    return <button>{name}</button>;
}
