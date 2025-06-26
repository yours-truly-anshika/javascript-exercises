
let product1 = {
  name: 'basketball',
  price: 2095,
};

let product2 = {
  name: 'football',
  price: 4249,
};

function comparePrice(product1, product2){
  if(product1.price > product2.price) {
    return product2;
  } else if(product1.price < product2.price) {
    return product1;
  } else {
    return 'same price';
  }
}

console.log(comparePrice(product1, product2));