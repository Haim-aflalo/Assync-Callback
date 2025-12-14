function isEvenAsync(number, callback) {
  setTimeout(() => {
    callback(number % 2 === 0);
  }, 800);
}

isEvenAsync(12, function (even) {
  console.log(even);
});
