let Innovation = 0
let Shop1Cost = 10
let Shop2Cost = 100
let DayDreamerCost = 50
let DayDreamerCount = 0
let InnovationIncrease = 1
let InnovationIncreaseIncrease = 1
let IPS = 0 

setInterval(IdleGenerator , 1000);

function RandInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function IdleGenerator() {
    Innovation = Innovation + IPS
    document.getElementById("Write").innerHTML = Innovation
}

function DayDreamer() {
    if (Innovation > 0 && Innovation >= DayDreamerCost) {
        DayDreamerCount = DayDreamerCount + 1
        Innovation = Innovation - DayDreamerCost;
        IPS = IPS + 1
        DayDreamerCost = DayDreamerCost + (DayDreamerCount * 5)
        document.getElementById("NumOfDayDreamer").innerHTML = DayDreamerCount
        }
}

function pitta() {
    Innovation = Innovation + InnovationIncrease;
    document.getElementById("Write").innerHTML = Innovation;
}

function Shop1() {
    if (Innovation > 0 && Innovation >= Shop1Cost) {
        Innovation = Innovation - Shop1Cost;
        InnovationIncrease = InnovationIncrease + InnovationIncreaseIncrease;
            Shop1Cost = Shop1Cost +(InnovationIncrease * 2);
                document.getElementById("CostofShop1").innerHTML = Shop1Cost;
    } else {
        document.getElementById("Cost of Shop1").innerHTML = "You may not buy!";
    }
}

function Shop2() {
    if (Innovation > 0 && Innovation >= Shop2Cost) {
        Innovation = Innovation - Shop2Cost;
        InnovationIncreaseIncrease = InnovationIncreaseIncrease + 1;
        Shop2Cost = Shop2Cost + ((InnovationIncrease + InnovationIncreaseIncrease) * 2);
        document.getElementById("CostofShop2").innerHTML = Shop2Cost;
    } else {
        document.getElementById("CostofShop2").innerHTML = "You Cannot Afford";
    }
}

function PrestigeButton() {
    document.getElementById("Prestige").innerHTML = "Nothing";
}