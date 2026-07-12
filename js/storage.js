// Simpan ke Local Storage
function saveTrades(trades) {
    localStorage.setItem("trades", JSON.stringify(trades));
}

// Ambil dari Local Storage
function loadTrades() {
    return JSON.parse(localStorage.getItem("trades")) || [];
}

// Tambah trade
function addTrade(trade) {
    const trades = loadTrades();
    trades.push(trade);
    saveTrades(trades);
}

function showForm(){
document.getElementById("tradeForm").style.display="block";
}

function closeForm(){
document.getElementById("tradeForm").style.display="none";
}

function saveTrade(){

const pair=document.getElementById("pair").value;

const type=document.getElementById("type").value;

const entry=Number(document.getElementById("entry").value);

const exit=Number(document.getElementById("exit").value);

addTrade(pair,type,entry,exit);

closeForm();

location.reload();

}
