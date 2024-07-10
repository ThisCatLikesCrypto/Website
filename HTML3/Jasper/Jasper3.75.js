var Cloklie = 0
var CloklieAdd = 1
var CloklieAddAdd = 1
var CloklieUpUpUpgradeCount2 = 0
var CloklieCost = 20
var Cloklie_UpCost = 200
var CloklieUpUp_UpUpgradeCount = 0


function CloklieUp() {
    Cloklie = Cloklie + CloklieAdd
    document.getElementById("CloklieCount").innerHTML = Cloklie
}

function CloklieUpUp() {
    if (Cloklie >= CloklieCost) {
        Cloklie = Cloklie - CloklieCost;
        CloklieAdd = CloklieAdd + CloklieAddAdd;
        CloklieUpUpUpgradeCount2 = CloklieUpUpUpgradeCount2 + 1;
        document.getElementById("CloklieUpUpUpgradeCount").innerHTML = CloklieUpUpUpgradeCount2;

        CloklieCost = CloklieCost + (CloklieCost * 1.5);
        document.getElementById("CloklieUpUpCost").innerHTML = CloklieCost;
        document.getElementById("Cloklie").innerHTML = Cloklie;
    } else {

    }
}

function CloklieUpUp_Up() {
    if (Cloklie >= Cloklie_UpCost) {
        Cloklie = Cloklie - Cloklie_UpCost;
        CloklieAddAdd = CloklieAddAdd + 1;
        CloklieUpUp_UpUpgradeCount = CloklieUpUp_UpUpgradeCount + 1;
        document.getElementById("CloklieUpUp_UpUpgradeCount").innerHTML = CloklieUpUp_UpUpgradeCount;

        Cloklie_UpCost = Cloklie_UpCost + (Cloklie_UpCost * 1.5);
        document.getElementById("CloklieUpUp_UpCost").innerHTML = Cloklie_UpCost;
        document.getElementById("Cloklie").innerHTML = Cloklie;
    }
}