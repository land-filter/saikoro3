function rollDice() {
    // サイコロを振る結果をランダムに生成（1から6の整数）
    var result = Math.floor(Math.random() * 6) + 1;

    // 結果を表示
    document.getElementById("diceResult").innerText = result;
}
