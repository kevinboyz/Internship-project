// Function yo kubika muri LocalStorage
function convertAndSave() {
    console.log("Button yakanze!"); // Reba muri Console niba ibi biza

    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from-currency').value;
    const to = document.getElementById('to-currency').value;

    if (amount === "" || amount <= 0) {
        alert("Andika umubare!");
        return;
    }

    // Rate yoroheje
    let result = (from === "USD" && to === "RWF") ? amount * 1300 : amount;

    const data = {
        date: new Date().toLocaleString(),
        from: amount + " " + from,
        to: to,
        result: result.toLocaleString() + " " + to
    };

    // Kubika muri LocalStorage
    let history = JSON.parse(localStorage.getItem('myData')) || [];
    history.unshift(data);
    localStorage.setItem('myData', JSON.stringify(history));

    alert("Byabitswe! Jya kuri History paji.");
}

// Function yo kwerekana muri History Page
function loadHistory() {
    const list = document.getElementById('history-list');
    if (!list) return;

    let history = JSON.parse(localStorage.getItem('myData')) || [];
    
    if (history.length === 0) {
        list.innerHTML = "<tr><td colspan='4'>Nta mateka ahari.</td></tr>";
    } else {
        list.innerHTML = history.map(h => `
            <tr>
                <td>${h.date}</td>
                <td>${h.from}</td>
                <td>${h.to}</td>
                <td>${h.result}</td>
            </tr>
        `).join('');
    }
}

// Huza ibintu byose paji igifunguka
window.onload = function() {
    const btn = document.getElementById('convert-btn');
    if (btn) {
        btn.addEventListener('click', convertAndSave);
    }
    loadHistory();
};