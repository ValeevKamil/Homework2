console.log('worked')

const regularPurchases = 100;
const increasedCashback = 0;
const specialOffers = 7300;

// указать проценты кэшбэка
const percentOne = 0.01;
const percentSecond = 0.05;
const percentThri = 0.3;

const maxbonus = 3000;

let bonus = regularPurchases * percentOne + increasedCashback * percentSecond + specialOffers * percentThri;
if (bonus >= maxbonus) {
    bonus = maxbonus;
}

console.log(bonus);