module.exports = function(n) {
  // do work here
  let arr = [];

  for (i = 1; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    } else if (i % 2 !== 0) {
      arr.unshift(i);
    }
  }

  arr.unshift(0);
  let remove = arr.splice(arr[Math.floor(Math.random() * arr.length)], 1);
  arr.push(remove);

  return arr;
};
