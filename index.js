var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(myItemName) {
  var myItemPrice = Math.floor(Math.random() * 100);
  var item = {itemName: myItemName, itemPrice: myItemPrice};
  getCart().push(item);

  return `${myItemName} has been added to your cart.`;

 }

function viewCart() {
  var cart_text = "In your cart, you have";
  for (var x=0; x<getCart().length; x++) {
    if ((getCart().length > 1) && (x == getCart().length - 1)) {
      cart_text = cart_text + " and";
    }
    cart_text = cart_text + ` ${getCart()[x].itemName} at $${getCart()[x].itemPrice}`
    if (x == getCart().length - 1) {
      cart_text = cart_text + ".";
    } else {
      cart_text = cart_text + ",";
    }
  }
  if (getCart().length == 0) {
    return "Your shopping cart is empty.";
  } else {
    return cart_text;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
