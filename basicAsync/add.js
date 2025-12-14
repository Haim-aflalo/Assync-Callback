function loadScore(a, b, callback) {
  setTimeout(() => {
    let result = a + b;
    callback(result);
  }, 1000);
}

loadScore(10, 10, function (result) {
  console.log('your score is: ', result);
});
