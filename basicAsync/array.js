function getFirstAsync(array, callback) {
  setTimeout(() => {
    callback(array[0]);
  }, 700);
}

getFirstAsync([10, 2, 3], function (index) {
  console.log(index);
});
