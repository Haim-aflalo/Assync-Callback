function getProductPrice(productId, callback) {
  setTimeout(() => {
    const price = 99.9;
    callback(productId, price);
  }, 1000);
}
console.log('Requesting product price...');
getProductPrice(123, function (productId, price) {
  console.log('price for product', productId, price);
});
console.log('Requesting product price');
