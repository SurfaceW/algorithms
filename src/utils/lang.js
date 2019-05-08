function switchIndex(data, i, j) {
  let temp = data[j];
  data[j] = data[i];
  data[i] = temp;
}

module.exports = {
  switchIndex
};
