IQ=0;
function agething() {
  age123 = document.getElementById("age12").value;
  if (age123 >= 120){
    alert("wow you are a genius. Your IQ is "+age123);
  } else if (age123<=100){
    alert("you are dumb. Your IQ is "+age123);
  } else {
    alert("you're so average. Your IQ is "+age123);
  } 
}

function Q1() {
  if (document.getElementById("Q1_A").value === 'paris') {
    IQ = IQ + 10;
    alert("your score is " + IQ);
  } else if (document.getElementById("Q1_A").value === 'Paris') {
    IQ = IQ + 10;
    alert("your score is " + IQ);
  }
}


function Q2() {
  if (document.getElementById("Q2_A").value === '540') {
    IQ = IQ + 10;
    alert("your score is "+IQ)
  } else {
    IQ = IQ + 2;
    alert("your score is "+IQ)
  }
}


function Q3() {
  if (document.getElementById("Q3_A").value === '108') {
    IQ = IQ + 10;
    alert("your score is "+IQ)
  } else {
    IQ = IQ - 10;
    alert("your score is "+IQ)
  }
}
