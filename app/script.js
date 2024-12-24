// میڈیسن ڈیٹا
const medicines = [
    { name: "Paracetamol", stock: 10 },
    { name: "Aspirin", stock: 5 },
    { name: "Amoxicillin", stock: 15 },
];

// ٹیبل کو اپ ڈیٹ کرنے کے لئے فنکشن
function updateTable() {
    const tableBody = document.getElementById('inventory');
    tableBody.innerHTML = '';
    medicines.forEach((medicine, index) => {
        const remaining = medicine.stock;
        const row = `<tr>
                        <td>${medicine.name}</td>
                        <td>${medicine.stock}</td>
                        <td><input type="number" min="0" max="${medicine.stock}" value="0" onchange="sellMedicine(${index}, this.value)"></td>
                        <td id="remaining-${index}">${remaining}</td>
                    </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
    checkLowStock();
}

// سیلز کی جانے والی میڈیسن کے سٹاک کو کم کرنے کے لئے فنکشن
function sellMedicine(index, quantity) {
    quantity = parseInt(quantity);
    if (quantity >= 0 && quantity <= medicines[index].stock) {
        medicines[index].stock -= quantity;
        document.getElementById(remaining-${index}).innerText = medicines[index].stock;
        checkLowStock();
    }
}

// کم سٹاک چیک کرنے کے لئے الرٹ کا فنکشن
function checkLowStock() {
    const lowStock = medicines.some(medicine => medicine.stock <= 2);
    const alertMessage = document.getElementById('alert-message');
    alertMessage.style.display = lowStock ? 'block' : 'none';
}

// ایپ کو شروع کرتے وقت ٹیبل اپ ڈیٹ کریں
updateTable();