function addTrade(pair, type, entry, exit) {

    const trades = loadTrades();

    const trade = {
        pair: pair,
        type: type,
        entry: entry,
        exit: exit,
        profit: exit - entry
    };

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
