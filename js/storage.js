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
