// function cardClick() {
//   const price = getProductPrice("1st-card");

//   console.log(price, typeof price);
// }

// // Utility Function
// function getProductPrice(id) {
//   const productPriceString = document.getElementById(id).innerText;
//   const productPrice = parseFloat(productPriceString);
//   return productPrice.toFixed(2);
// }
function cardClick(target) {
  //   console.log("hello");
  //   console.log(target.childNodes[5].childNodes[1].innerText);
  const productName = target.childNodes[5].childNodes[1].innerText;
  const priceContainer = document.getElementById("price-container");
  const li = document.createElement("li");
  li.innerText = productName;
  priceContainer.appendChild(li);
}
