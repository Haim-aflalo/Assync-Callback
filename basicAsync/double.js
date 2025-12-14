function doubleAsync(val, callback) {
  setTimeout(() => {
    let result = val * 2;
    callback(result);
  }, 400);
}

doubleAsync(56, function (double) {
  console.log(double);
});
