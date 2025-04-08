import { Btn } from "../../shared/Button/Btn";
import "./Footer.css";

export function Footer() {
    return (
        <footer>
            <Btn name="Add" />
            <Btn name="Remove" />
            <Btn name="Edit" />
            <Btn name="Reset" />
        </footer>
    );
}
