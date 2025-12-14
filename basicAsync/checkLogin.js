function checkLogin(callback) {
  let status = true;
  setTimeout(() => {
    callback(status);
  }, 1000);
}

checkLogin(function (logged) {
  console.log(logged ? 'youre logged' : 'youre not logged');
});
