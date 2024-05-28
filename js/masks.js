/**
 * @description Função para formatar o valor de moeda para o padrão BRL
 *
 * @param { string } value
 * @returns 1000.00 -> R$ 1.000,00
 */
function maskCurrencyBRL(value) {
  return `R$ ${(value.replace(/\D/g, "") / 100).toFixed(2) + ""}`
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function maskCurrencyUSD(value) {
  return `US$ ${(value.replace(/\D/g, "") / 100).toFixed(2) + ""}`
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function maskPercent(value) {
  return `${value.replace(/\D/g, "")}%`;
}

function removeMask(value, type = "") {
  if (type == "currency") {
    return value.replace(",", ".").replace(/\D/g, "");
  }
  return value.replace(/\D/g, "");
}

function maskWishList(value) {
  let emoji = "";
  value = value.replace(/\D/g, "").replace(" ", "").trim();

  if (value > 2000) {
    emoji = "😍";
  } else if (value > 1000) {
    emoji = "🥰";
  } else if (value > 500) {
    emoji = "😊";
  } else if (value > 200) {
    emoji = "🐧";
  } else if (value > 0) {
    emoji = "🤡";
  }

  return `${emoji} ${value}`;
}
