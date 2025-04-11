import React from "react";
import styles from "./Menu.module.css"
import LinkButton from "@/components/button/LinkButton";
import Link from "next/link";

const Menu: React.FC = () => {


    return (
        <header className={styles.menuContainer}>
            <Link href={"/"}>
                <h1 className={styles.logo}>
                    MyCoins
                </h1>
            </Link>
            <nav className={styles.linksContainer}>
                <LinkButton buttonType={"menu"} link={'/coins'}>Coins</LinkButton>
                <LinkButton buttonType={"menu"} link={'/cryptocurrency/BTC'}>Bitcoin</LinkButton>
                <LinkButton buttonType={"menu"} link={'/'}>Graphics</LinkButton>
            </nav>
        </header>
    );
}

export default Menu