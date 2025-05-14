let convertBtn = document.getElementById("convert-btn");

function checkInput() {
  let numberInput = document.getElementById("number").value;
  let number = Number(numberInput);
  if (numberInput.trim() === ""){
    document.getElementById("output").textContent = "Please enter a valid number";
  } else if (number <= -1){
    document.getElementById("output").textContent = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000){
    document.getElementById("output").textContent = "Please enter a number less than or equal to 3999";
  } else {
    const roman = convertToRoman(number);
    document.getElementById("output").textContent = `${roman}`;
  }
}

function convertToRoman(number){
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];
  let result = "";

  for (let i = 0; i < romanMap.length; i++) {
    while (number >= romanMap[i].value) {
      result += romanMap[i].numeral;
      number -= romanMap[i].value;
    }
  }
  return result;
}

convertBtn.addEventListener("click", checkInput);
