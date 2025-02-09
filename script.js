let selectedCurrency = '';

function showInputScreen(currency) {
    selectedCurrency = currency;
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('inputScreen').style.display = 'block';
}

function showConfirmScreen() {
    const playerId = document.getElementById('playerId').value;
    if (playerId) {
        document.getElementById('inputScreen').style.display = 'none';
        document.getElementById('confirmScreen').style.display = 'block';
        document.getElementById('displayId').innerText = `Player ID: ${playerId}`;
    } else {
        alert("Please enter a Player ID.");
    }
}

function startLoading() {
    document.getElementById('confirmScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';
    setTimeout(showSuccessScreen, 5000);
}

function showSuccessScreen() {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('successScreen').style.display = 'block';
}
