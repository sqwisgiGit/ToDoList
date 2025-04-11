import getCoin from "@/app/api/getCoin";
import LinkButton from "@/components/button/LinkButton";
import styles from "./page.module.css"

const Coins = async () => {

    const coins = await getCoin()

    return(
        <section className={styles.rootContainer}>
            <section className={styles.mainContainer}>
                {coins.map( e => {
                    return(
                        <LinkButton buttonType={'cryptoMenu'} link={`/cryptocurrency/${e.symbol}`} key={e.name}>
                            {e.name}
                        </LinkButton>
                    )
                } )}
            </section>
        </section>
    )

}

export default Coins