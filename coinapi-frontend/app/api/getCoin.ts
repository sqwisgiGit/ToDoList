import redis from "@/app/lib/redis";

interface quoteTemplate {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    last_updated: string;
}


interface quoteInterface {
    [currency: string]: quoteTemplate;
}


export interface coinInterface {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    cmc_rank: number;
    num_market_pairs: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    infinite_supply: boolean;
    last_updated: string;
    date_added: string;
    tags: string[];
    platform: null;
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    quote: quoteInterface;
}

async function getCoin (): Promise<coinInterface[]>
async function getCoin (symbol: string): Promise<coinInterface>

async function getCoin (symbol?: string): Promise<coinInterface | coinInterface[] | undefined> {
    if( symbol ) {
        const coin: coinInterface = await fetch(`http://localhost:3000/api/${symbol}`)
            .then(res => res.json())
            .catch(e => {
                throw new Error (e)
            })
        return coin
    }
    const coins: coinInterface[] = await fetch('http://localhost:3000/api')
        .then(res => res.json())
        .catch(e => {
            throw new Error (e)
        })
    return coins
}

export default getCoin