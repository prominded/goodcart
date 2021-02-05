const productList = [
  ["grapes", 0],
  ["apples", 0],
  ["peaches", 0],
];

const productPrice = [5.0, 3.0, 7.0];
let totalPrice = 0.0;

const increment = (qtyElementsId, index) => {
  let qty = document.getElementById(qtyElementsId);
  qty.value++;
  /*
  product = productList[index];
  product[1] = qty.value;
  console.log(product[1]);
  */
};

const decrement = (qtyElementsId, index) => {
  let qty = document.getElementById(qtyElementsId);

  if (qty.value == 0) return;
  qty.value--;
  /*
  product = productList[index];
  product[1] = qty.value;
  console.log(product[1]);
  */
};

const buyItem = (qtyElementsId, index) => {
  console.log(index);
  let qty = document.getElementById(qtyElementsId);

  // product = productList[index];
  // product[1] = qty.value;

  setQuantity(index, qty.value);

  document.getElementById("price-total").textContent = calTotal();

  console.log(calTotal());

  setButtonDisabled(index, true);
};

const calTotal = () => {
  //outputText = "[";
  totalPrice = 0.0;
  //console.log("Calculating total");
  console.log(productList);

  for (i = 0; i < productList.length; i++) {
    product = productList[i];
    qty = product[1];
    /*
    if (i == productList.length - 1) {
      outputText = outputText + `['${product[0]}' , ${qty}]`;
    } else {
      outputText = outputText + `['${product[0]}' , ${qty}],`;
    }
    */

    price = productPrice[i];

    switch (i) {
      case 0:
        if (qty % 2 == 0) {
          totalPrice = totalPrice + (qty / 2) * price;
          console.log("1tem 1");
          console.log(totalPrice);
        } else if (qty % 2 > 0) {
          totalPrice = totalPrice + Math.trunc(qty / 2) * price + price;
        } else {
          totalPrice = totalPrice + qty * price;
          console.log("1tem 1");
          console.log(totalPrice);
        }

        break;

      case 1:
        if (qty > 2 || qty == 2) {
          totalPrice = totalPrice + qty * price * (1 - 0.2);
          console.log("1tem 2");
          console.log(totalPrice);
        } else {
          totalPrice = totalPrice + qty * price;
          console.log("1tem 2");
          console.log(totalPrice);
        }
        break;

      case 2:
        totalPrice = totalPrice + qty * price;
        console.log("1tem 3");
        console.log(totalPrice);
        break;

      default:
        return;
    }
  }

  //outputText = outputText + "]";
  //console.log(outputText);
  return totalPrice;
};

const createCartItem = (elem, elemWrapper, item, index) => {
  parent = document.getElementById(elemWrapper);
  child = document.createElement(elem);
  textNode = document.createTextNode(item);
  child.appendChild(textNode);

  del = document.createElement("button");
  del.textContent = "X";
  child.appendChild(del);
  parent.appendChild(child);

  del.addEventListener("click", (e) => {
    parent.removeChild(e.target.parentNode);
    removeQuantity(index);
    document.getElementById("price-total").textContent = calTotal();
    setButtonDisabled(index, false);
  });
};

const setButtonDisabled = (index, status) => {
  switch (index) {
    case 0:
      document.getElementById("btn-grapes").disabled = status;
      break;

    case 1:
      document.getElementById("btn-apples").disabled = status;
      break;
    case 2:
      document.getElementById("btn-peaches").disabled = status;
      break;

    default:
      return;
  }
};

const setQuantity = (index, qty) => {
  product = productList[index];
  product[1] = qty;
  console.log(product[1]);

  // product = productList[index];
  item = `Product: ${product[0]} Quantity: ${product[1]}`;

  console.log(productList);

  createCartItem("li", "product-list", item, index);
};

const removeQuantity = (index) => {
  product = productList[index];
  product[1] = 0;
};
