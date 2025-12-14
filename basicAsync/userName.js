function getUserName(callback) {
  setTimeout(() => {
    callback('mosche');
  }, 1000);
}

getUserName(function (name) {
  console.log('hello ' + name);
});
