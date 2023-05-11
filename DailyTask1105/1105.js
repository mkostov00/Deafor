function zeroesToEnd(array) {

  array.sort(function(a) {return a !== 0});
  array.reverse();

  alert(array);
}

zeroesToEnd([1, 2, 0, 0, 4, 0, 5]);
zeroesToEnd([0, 0, 2, 0, 5]);
zeroesToEnd([4, 4, 5]);
zeroesToEnd([0, 0]);
zeroesToEnd([6, 0, 2]);