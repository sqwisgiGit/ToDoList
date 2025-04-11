import Link from "next/link";
import {HTMLProps} from "react";
import styles from "./Button.module.css"
import Arrow from "@/public/circle-top-down.svg";

interface buttonLinkProps extends HTMLProps<HTMLProps<HTMLButtonElement>>{
    link: string,
    buttonType?: "menu" | "cryptoMenu",
    svg?: boolean
}

const LinkButton = ({ link, buttonType, children, svg = false }: buttonLinkProps) => {
    return(
        <Link className={
            buttonType === 'menu' ? styles.menuButton :
            buttonType === 'cryptoMenu' ? styles.cryptoMenuButton :
            ''

        } href={link}>
            { children }
            { buttonType === 'cryptoMenu' && svg === true ? <Arrow width={30} height={30}/> : '' }
        </Link>
    )
};

export default LinkButton