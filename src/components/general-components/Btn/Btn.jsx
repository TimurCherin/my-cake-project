import css from "./Btn.module.css";
import clsx from "clsx";

let checkStatus = false;

export default function Btn({text}) {
    return <button className={clsx(css.baseBtn, checkStatus && css.successBtn, !checkStatus && css.errorBtn)}>{text}</button>
}

