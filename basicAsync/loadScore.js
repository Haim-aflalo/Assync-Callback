function loadScore(callback) {
  setTimeout(() => {
    const score = 56;
    callback(score);
  }, 1500);
}
loadScore(function (score) {
  console.log('your score is: ', score);
});
