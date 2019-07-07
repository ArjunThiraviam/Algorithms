function harmlessRansom(text1, text2) {

var x = text1.split(" ");
var y = text2.split(" ");
var count = 0;
  for(let i = 0; i< x.length; i++) {
    for(let j = 0; j< y.length; j++){
      if(x[i] == y[j]) {
        count++;
      }
    }
  }
  console.log(count);
  if(count != (text1.length -1)) return false;
  else return true;

}

harmlessRansom("Hello Arjun", "Hello my name is Arjun");
