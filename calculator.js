function calculator(inputData) {
  flagRim = 0;

  i = 0;

  myData = "";
  for (i = 0; i < inputData.length; i++) {
    if (inputData[i] != " ") {
      myData = myData + inputData[i];
    }
  }
  inputData = myData;

  i = 0;

  //console.log(inputData[i]);
  switch (inputData[i]) {
    case "1":
      currentNum = 1;
      if (inputData[i + 1] == "0") {
        currentNum = 10;
        i++;
      }
      break;
    case "2":
      currentNum = 2;
      break;
    case "3":
      currentNum = 3;
      break;
    case "4":
      currentNum = 4;
      break;
    case "5":
      currentNum = 5;
      break;
    case "6":
      currentNum = 6;
      break;
    case "7":
      currentNum = 7;
      break;
    case "8":
      currentNum = 8;
      break;
    case "9":
      currentNum = 9;
      break;
    case "0":
      throw new Error(" ошибка ");
      break;

    default:
      flagRim = 1;
      ////////////////////////////
      steps = 0;
      switch (inputData[i]) {
        case "I":
          steps = 0;
          currentNum = 1;

          if (inputData[i + 1] == "I") {
            currentNum = 2;
            steps = 1;

            if (inputData[i + 2] == "I") {
              currentNum = 3;
              steps = 2;
            }
          }
          if (inputData[i + 1] == "V") {
            currentNum = 4;
            steps = 1;
          }
          if (inputData[i + 1] == "X") {
            currentNum = 9;
            steps = 1;
          }

          break;
        case "V":
          if (inputData[i] == "V") {
            currentNum = 5;
            steps = 0;
            if (inputData[i + 1] == "I") {
              currentNum = 6;
              steps = 1;
              if (inputData[i + 2] == "I") {
                currentNum = 7;
                steps = 2;
                if (inputData[i + 3] == "I") {
                  currentNum = 8;
                  steps = 3;
                }
              }
            }
          }

          break;
        case "X":
          steps = 0;
          currentNum = 10;
          if (inputData[i + 1] == "I") {
            currentNum = 11;
            steps = 1;
          }
          break;

        default:
          throw new Error(" ошибка ");
      }
      //console.log('steps '+steps+ ' i '+i + ' currentNum '+currentNum)
      i = i + steps;

    //////////////////////////////
    //
  }

  firstNum = currentNum;

  i++;
  znak = inputData[i];
  //console.log(i)
  i++;

  switch (inputData[i]) {
    case "1":
      currentNum = 1;
      if (inputData[i + 1] == "0") {
        currentNum = 10;
        i++;
      }
      if (flagRim == 1) throw new Error(" ошибка ");
      break;

    case "2":
      currentNum = 2;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "3":
      currentNum = 3;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "4":
      currentNum = 4;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "5":
      currentNum = 5;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "6":
      currentNum = 6;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "7":
      currentNum = 7;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "8":
      currentNum = 8;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "9":
      currentNum = 9;
      if (flagRim == 1) throw new Error(" ошибка ");
      break;
    case "0":
      throw new Error(" ошибка ");
      break;

    default:
      steps = 0;
      switch (inputData[i]) {
        case "I":
          currentNum = 1;
          steps = 0;
          if (inputData[i + 1] == "I") {
            currentNum = 2;
            steps = 1;
            if (inputData[i + 2] == "I") {
              currentNum = 3;
              steps = 2;
            }
          }
          if (inputData[i + 1] == "V") currentNum = 4;
          steps = 1;
          if (inputData[i + 1] == "X") currentNum = 9;
          steps = 1;
          break;
        case "V":
          if (inputData[i] == "V") {
            currentNum = 5;
            steps = 0;
            if (inputData[i + 1] == "I") {
              currentNum = 6;
              steps = 1;
              if (inputData[i + 2] == "I") {
                currentNum = 7;
                steps = 2;
                if (inputData[i + 3] == "I") {
                  currentNum = 8;
                  steps = 3;
                }
              }
            }
          }
          if (flagRim == 0) throw new Error(" ошибка ");
          flagRim = 1;
          break;
        case "X":
          steps = 0;
          currentNum = 10;
          if (inputData[i + 1] == "I") {
            currentNum = 11;
            steps = 1;
          }
          break;
          throw new Error(" ошибка ");
        default:
      }
      i = i + steps;
  }

  SecondNum = currentNum;

  if (firstNum > 10 || SecondNum > 10) throw new Error(" ошибка ");

  //console.log(znak)
  //console.log(firstNum +' '+SecondNum)
  switch (znak) {
    case "+":
      rez = firstNum + SecondNum;
      break;
    case "-":
      rez = firstNum - SecondNum;
      break;
    case "*":
      rez = firstNum * SecondNum;
      break;
    case "/":
      rez = Math.trunc(firstNum / SecondNum);
      break;

    default:
      throw new Error(" ошибка ");
  }

  index = 0;

  if (rez <= 0 && flagRim == 1) return "";

  rez = "" + rez;
  newRez = "";
  if (flagRim == 1) {
    if (rez.length == 3) {
      index++;
      switch (rez[0]) {
        case "1":
          currentNum = "C";
          break;
        case "2":
          currentNum = "CC";
          break;
        case "3":
          currentNum = "CCC";
          break;
        case "4":
          currentNum = "CD";
          break;
        case "5":
          currentNum = "D";
          break;
        case "6":
          currentNum = "DC";
          break;
        case "7":
          currentNum = "DCC";
          break;
        case "8":
          currentNum = "DCC";
          break;
        case "9":
          currentNum = "DCCC";
          break;
          currentNum = "";

        default:
      }
      newRez = newRez + currentNum;
    }

    if (rez.length >= 2) {
      switch (rez[index++]) {
        case "1":
          currentNum = "X";
          break;
        case "2":
          currentNum = "XX";
          break;
        case "3":
          currentNum = "XXX";
          break;
        case "4":
          currentNum = "XL";
          break;
        case "5":
          currentNum = "L";
          break;
        case "6":
          currentNum = "LX";
          break;
        case "7":
          currentNum = "LXX";
          break;
        case "8":
          currentNum = "LXXX";
          break;
        case "9":
          currentNum = "XC";
          break;

        default:
          currentNum = "";
      }
      newRez = newRez + currentNum;
    }
    ///
    if (rez.length >= 1) {
      switch (rez[index]) {
        case "1":
          currentNum = "I";
          break;
        case "2":
          currentNum = "II";
          break;
        case "3":
          currentNum = "III";
          break;
        case "4":
          currentNum = "IV";
          break;
        case "5":
          currentNum = "V";
          break;
        case "6":
          currentNum = "VI";
          break;
        case "7":
          currentNum = "VII";
          break;
        case "8":
          currentNum = "VIII";
          break;
        case "9":
          currentNum = "IX";
          break;

        default:
          currentNum = "";
      }
      newRez = newRez + currentNum;
    } ///

    return newRez;
  } //ifRim

  if (inputData.length != i + 1) throw new Error(" ошибка ");

  return rez;
}

console.log(calculator("I + I"));

module.exports = calculator;
