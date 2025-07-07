function padIt(str,n){
  // setup iterating variable
  let count = 0;
  // if count is even add * to the left side, and on the right when odd
  while (count < n) {
    if (count % 2 === 0) {
       str = '*' + str;
    } else {
      str = str + '*';
    }
   count++;
  }
  return str;
}