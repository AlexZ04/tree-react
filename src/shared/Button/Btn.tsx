import { ButtonProps } from "../../classes/ButtonProps";
import "./button.css";

export function Btn({ name, onClick }: ButtonProps) {
    return <button onClick={onClick}>{name}</button>;
}
