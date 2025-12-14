function downloadFile(url, callback) {
  setTimeout(() => {
    console.log('Downloading from: ', url);

    callback('Download finished');
  }, 300);
}

downloadFile('http://example.com/file', function (download) {
  console.log(download);
});
