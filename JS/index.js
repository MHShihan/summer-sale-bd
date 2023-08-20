let totalPrice = 0.0;
function cardClick(target) {
  const productName = target.childNodes[5].childNodes[1].innerText;
  const priceContainer = document.getElementById("price-container");
  const count = priceContainer.childElementCount;
  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${productName}`;
  priceContainer.appendChild(p);

  const productPriceString =
    target.childNodes[5].childNodes[3].innerText.split(" ")[0];
  const productPrice = parseFloat(productPriceString);
  const previousTotalPriceString = document.getElementById("total-price");
  previousTotalPriceString;
  totalPrice += productPrice;
  const floatingTotal = parseFloat(totalPrice).toFixed(2);

  previousTotalPriceString.innerText = floatingTotal;
  const btnPurchase = document.getElementById("btn-purchase");
  if (floatingTotal > 0) {
    btnPurchase.disabled = false;
  }

  const applyBtn = document.getElementById("btn-apply");
  if (floatingTotal >= 200) {
    applyBtn.disabled = false;
  }
}

document.getElementById("btn-apply").addEventListener("click", function () {
  const couponFieldValue = document.getElementById("coupon-field").value;
  const newTotalPriceString = document.getElementById("total-price").innerText;
  const newTotalPrice = parseFloat(newTotalPriceString);
  if (couponFieldValue == "SELL20") {
    const percentage = 0.2;
    const result = newTotalPrice * percentage;
    document.getElementById("discount-price").innerText = result.toFixed(2);
    const total = newTotalPrice - result;
    document.getElementById("total").innerText = total.toFixed(2);
  } else {
    alert("Invalid Promo Code");
  }
});

// const discountPriceSting = parseFloat(discountPriceString.innerText).toFixed;
// const discountPrice = parseFloat(discountPriceSting);
// console.log(typeof floatingTotal);
