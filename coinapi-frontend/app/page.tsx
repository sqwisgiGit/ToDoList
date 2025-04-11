import styles from "./page.module.css"
import LinkButton from "@/components/button/LinkButton";
import getCoin from "@/app/api/getCoin";

export default async function Home() {

    const coins = await getCoin()
    const bestCoins = [coins[0], coins[1], coins[2]]


    return (
   <section className={styles.rootContainer}>
       <div className={styles.mainContainer}>
           <section className={styles.greetingsContainer}>
               <h1>
                   Welcome to MyCoins
               </h1>
               <h3>
                   Here, you can find your favourite cryptocurrency and more!
               </h3>
           </section>
           <section className={styles.mostPopularContainer}>
               <h1>
                   The most popular cryptocurrencies
               </h1>
               <section className={styles.popularCrypto}>
                   {bestCoins.map( (item) => {
                       return(
                           <LinkButton buttonType={'cryptoMenu'} link={`/cryptocurrency/${item.symbol}`} key={item.name} svg={true}>
                               {item.name}
                           </LinkButton>
                       )
                   } )}
               </section>
           </section>
       </div>
   </section>
    );
}
