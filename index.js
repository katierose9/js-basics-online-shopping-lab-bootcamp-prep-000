var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(myItem) {
 var itemName = myItem
 var itemPrice = math.random(math.floor * 100)
 getCart().push(itemName)
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  var cartDescription = 'In your cart, you have '

  for (var x=1; x<getCart.length -1; x++)

  if ( getCart().length >= 1 ) {
    return `cartDescription + ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    return `cartDescription + ${getCart()[x].itemName} at $${getCart()[x].itemPrice}`
  }

  if ( getCart().length == 0 ) {
  return "Your shopping cart is empty."
  }// write your code here
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
