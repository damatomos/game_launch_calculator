const nameEl = document.querySelector('input#name');
const wishlistEl = document.querySelector('input#wishlist');
const priceEl = document.querySelector('input#price');
const factorEl = document.querySelector('input#factor');

function handleSubmit(event)
{
  event.preventDefault();

  const data = {
    name: nameEl.value,
    wishlist: removeMask(wishlistEl.value),
    price: removeMask(priceEl.value, 'currency'),
    factor: removeMask(factorEl.value)
  }

  let params = `name=${data.name}&wishlist=${data.wishlist}&price=${data.price}&factor=${data.factor}`;

  document.location.href = `./result/index.html?${btoa(params)}`;
}


// ----- Main -----
class Main {
  constructor() {
    this.dollarValue = 0;
    this.init();
  }

  async init() {
    this.dollarValue = await this.getDollarValue();
  }

  async getDollarValue() {
    const response = await fetch(
      "https://economia.awesomeapi.com.br/last/USD-BRL"
    );
    const data = await response.json();
    return data.USDBRL.high;
  }
}

const main = new Main();
