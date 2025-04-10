import { ButtonProps } from "../../classes/ButtonProps";
import "./button.css";

export function Btn({ name, onClick, disabled }: ButtonProps) {
    return (
        <button className="manager-btns" onClick={onClick} disabled={disabled}>
            {name}
        </button>
    );
}
