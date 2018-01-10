module.exports = function check(str, bracketsConfig) {
  var arr = [];
  var i = 0;
  var isRight = true;
  var char = str.charAt(0);
  var lastElem = null;
  while (isRight && char != '') {
    if (arr.length == 0) {
      for (var j = 0; j < bracketsConfig.length; j++) {
        if (bracketsConfig[j][0] == char){
          arr.push(bracketsConfig[j]);
          break;
        }
        else if (bracketsConfig[j][1] == char) {
          isRight = false;
          break;
        }
      }
    }
    else {
      lastElem = arr[arr.length-1];
      if (lastElem[1] == char) {
        arr.pop();
      }
      else {
        for (var j = 0; j < bracketsConfig.length; j++) {
          if (bracketsConfig[j][0] == char){
            arr.push(bracketsConfig[j]);
            break;
          }
          else if (bracketsConfig[j][1] == char) {
            isRight = false;
            break;
          }
        }
      }
    }
    i++;
    char = str.charAt(i);
  }
  if (arr.length != 0) isRight = false;
  return isRight;
}