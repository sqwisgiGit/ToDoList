import styles from "@/app/cryptocurrency/[id]/page.module.css";
import getCoin from "@/app/api/getCoin";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {

    const paramsRes = await params
    const id = paramsRes.id
    const coin = await getCoin(id)
    console.log(id)


    if (!coin) {
        return (
            <h1>Coin not found</h1>
        )
    }
    return(
            <section className={styles.rootContainer}>
                <section className={styles.mainContainer}>
                    <h1 className={styles.coinName}>
                        {coin.name} ({coin.symbol})
                    </h1>
                    <article className={styles.coinInfo}>
                        <h2>
                            Coin symbol: {coin.symbol}
                        </h2>
                        <h2>
                            Coin current price: {coin.quote.USD.price.toFixed(2)}$
                        </h2>
                        <h2>
                            Coin volume: {coin.quote.USD.volume_24h.toFixed(2)}
                        </h2>
                    </article>
                </section>
            </section>
    )

}

export default Page