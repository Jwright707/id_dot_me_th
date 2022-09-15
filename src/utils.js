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
  const capitalize = tempText.value.charAt(0).toUpperCase() + tempText.value.slice(1);
  return capitalize
}

export const capitalizingText = (text) => {
  const capitalize = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  return capitalize
}

export const categoryColors = {
  'Food': '#edbb6e',
  'Technology': '#cdced9',
  "Footwear": '#98d4a9',
  "Travel": '#ed6ee0',
  "Entertainment": '#89a7e0',
  "Automotive": '#ed7b6e',
  "Apparel": '#6ee0ed',
}

export const categoryTextColors = {
  'Food': '#a5824d',
  'Technology': '#727279',
  "Footwear": '#6a9476',
  "Travel": '#a54d9c',
  "Entertainment": '#5f749c',
  "Automotive": '#a5564d',
  "Apparel": '#4d9ca5',
}