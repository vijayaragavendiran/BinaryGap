// Code goes here

 function getBinaryGap() {
    var s = parseInt(document.getElementById('userInput').value);
    if (!isNaN(s)) {
      var binaryNumber = s.toString(2);
      var currentGap = 0;
      var previousGap = 0;
      for (i = 0; i <= binaryNumber.length; i++) {
        if (binaryNumber[i] == 0) {
          currentGap += 1;
        } else {
          if (currentGap > previousGap)
            previousGap = currentGap;
          currentGap = 0;
        }
      }
    } else {
      console.log('Not a Number');
    }
    if (currentGap > previousGap)
      previousGap = currentGap;
    console.log('previousGap :' + previousGap);
    document.getElementById('result').innerHTML = 'Binary Gap is '+previousGap;
 }