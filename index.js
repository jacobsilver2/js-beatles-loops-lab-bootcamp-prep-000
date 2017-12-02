function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i=0; i<4; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

