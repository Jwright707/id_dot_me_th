import { months } from "./assets/constants/purchasesConstants"

export const dateConvertion = (date) => {
    const dateConverter = new Date(`${date}`)
    return `${months[dateConverter.getMonth() + 1]} ${dateConverter.getDate()}, ${dateConverter.getFullYear()}`
}

export const priceConvertion = (price) => {
  const priceSplit = `${price}`.split('');
  const changeLocation = priceSplit.length-2
  let priceFormated = "$";
  for(let i = 0; i < priceSplit.length; i++) {
    if(i === changeLocation) {
      priceFormated += '.'
    }
    priceFormated += priceSplit[i];
  }
  return priceFormated;
}

export const decodingHtml = (html) => {
  const tempText = document.createElement('textarea');
  tempText.innerHTML = html
  return tempText.value
}