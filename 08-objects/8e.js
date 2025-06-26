
let product1 = {
  name: 'basketball',
  price: 2095,
};

let product2 = {
  name: 'football',
  price: 4249,
};

function isSameProduct(product1, product2){
  if(product1.name == product2.name && product1.price == product2.price) {
    return true;
  } else {
    return false;
  }
}

console.log(isSameProduct(product1, product2));