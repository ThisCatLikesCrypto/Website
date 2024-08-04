function multiplyBy() { num1 = document.getElementById("firstNumber").value; num2 = document.getElementById("secondNumber").value; document.getElementById("result").innerHTML = num1 * num2; }
function divideBy() { num1 = document.getElementById("firstNumber").value; num2 = document.getElementById("secondNumber").value; document.getElementById("result").innerHTML = num1 / num2; }

function start_spec_str(str) {
  if (str.length < 4) {
    return false;
  }
  front = str.substring(0, 4);
  if (front == 'Java') {
    return true;
  }
  {
    return false;
  }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));

function print_current_page() { window.print(); }

function areaTriangle() {
  var side1 = 5; var side2 = 6; var side3 = 7; var s = (side1 + side2 + side3) / 2; console.log(Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))));
}  
