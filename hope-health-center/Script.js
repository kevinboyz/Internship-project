document.getElementById('saveButton').addEventListener('click', function() {
    // 1. Fata amakuru yanditswe muri Form (Ushobora kongeraho n'andi)
    const patientData = {
        name: document.querySelector('input[type="text"]').value,
        age: document.querySelector('input[type="number"]').value,
        phone: document.querySelectorAll('input[type="text"]')[1].value, // Phone number
        id: document.querySelectorAll('input[type="text"]')[2].value     // National ID
    };

    // 2. Reba niba hari abandi barwayi basanzwe babitse (niba ari ubwa mbere, kora array nshya)
    let patients = JSON.parse(localStorage.getItem('patients')) || [];

    // 3. Ongeramo uyu murwayi mushya
    patients.push(patientData);

    // 4. Bibike muri LocalStorage
    localStorage.setItem('patients', JSON.stringify(patients));

    // 5. Ohereza umuntu kuri page ya Management kugira ngo arebe urutonde
    alert("Umurwayi abitse neza!");
    window.location.href = "management.html";
});


// Iyi code izakora gusa niba turi kuri page ya Management
if (window.location.pathname.includes('management.html')) {
    const tableBody = document.querySelector('.patients-table tbody');
    let patients = JSON.parse(localStorage.getItem('patients')) || [];

    // Kuraho amakuru ya "sample" yari arimo
    tableBody.innerHTML = '';

    // Shira abantu babitse muri Table
    patients.forEach((patient, index) => {
        const row = `
            <tr>
                <td>00${index + 1}</td>
                <td>${patient.name}</td>
                <td>Male</td> <td>${patient.phone}</td>
                <td><button class="view-link">View</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}