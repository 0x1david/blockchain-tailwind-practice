class Cryptocurrency {
    constructor(name, tag, price, priceYDay, icon, link) {
        this.name = name;
        this.tag = tag;
        this.price = price;
        this.priceYDay = priceYDay;
        this.icon = icon;
        this.link = link;
    }
}

let bitcoin = new Cryptocurrency(
    "Bitcoin",
    "BTC",
    34548.06,
    34591.06,
    "static/Bitcoin.svg",
    "https://en.wikipedia.org/wiki/bitcoin"
);

let atom = new Cryptocurrency(
    "Atom",
    "ATOM",
    12.34,
    11.98,
    "static/Atom.svg",
    "https://cosmos.network"
);

let ethereum = new Cryptocurrency(
    "Ethereum",
    "ETH",
    2345.67,
    2300.45,
    "static/Ethereum.svg",
    "https://en.wikipedia.org/wiki/ethereum"
);

let tezos = new Cryptocurrency(
    "Tezos",
    "XTZ",
    4.56,
    4.51,
    "static/Tezos.svg",
    "https://en.wikipedia.org/wiki/tezos"
);


const getPriceChange = currency => {
    const percentageChange = ((currency.price - currency.priceYDay) / currency.priceYDay) * 100;
    const isPositiveChange = percentageChange > 0;
    const sign = isPositiveChange ? '+' : '';
    const textColorClass = isPositiveChange ? 'text-green-500' : 'text-red-500';
    return `<span class="${textColorClass}">${sign}${percentageChange.toFixed(2)}%</span>`;
}

function returnCard(currency) {
    return `
        <a href=${currency.link}>
            <div class="p-5 flex bg bg-cover transition-btn flex-col hover:bg-slate-100 bg-white h-full w-60 shadow-2xl rounded-lg ">
                <div class="flex flex-row justify-between mb-3">
                    <img class="w-10 h-10" src=${currency.icon}>
                    <div class="gap-3 flex">
                        <button class="text-purple-600 bg-purple-100 hover:bg-purple-200 transition-btn rounded-[4px] h-6 w-12">Buy</button>
                        <button class="text-green-600 bg-green-100 hover:bg-green-200 transition-btn rounded-[4px] h-6 w-12">Trade</button>
                   </div>
                </div>
                <span class="text-[1.1rem] flex flex-row gap-3 font-semibold">
                    <h3>${currency.name}</h3>
                    <h3 class="text-slate-500">${currency.tag}</h3>
                </span>
                <span class="pt-2 flex flex-row gap-4 font-semibold">
                    <h3 class="font-semibold">$${currency.price.toFixed(2)}</h3>
                    <h3>${getPriceChange(currency)}</h3>
                </span>
            </div>
        </a>
    `;
}


function renderCards(cryptos, elementId) { 
    const listElement = document.getElementById(elementId);
    cryptos.forEach(crypto => {
        listElement.insertAdjacentHTML('beforeend', returnCard(crypto));
    });
}

function cardSwitch() {
    
}