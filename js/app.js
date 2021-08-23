// MEMORY-PART

document.getElementById('eight-gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    totalPrice()
});
document.getElementById('sixteen-gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 180;
    totalPrice()
});

// STORAGE-PART

document.getElementById('twofiftysix-gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    totalPrice()
});
document.getElementById('fivehundredtwelve-gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    totalPrice()
});
document.getElementById('one-terabytegb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    totalPrice()
});

// DELIVERY-PART 

document.getElementById('slow-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    totalPrice()
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    totalPrice()
});


// TOTAL-PART 
function totalPrice() {
    const fixedTotalPrice = parseInt(document.getElementById("fixed-cost").innerText);
    const memoryTotalPrice = parseInt(document.getElementById("memory-cost").innerText);
    const storageTotalPrice = parseInt(document.getElementById("storage-cost").innerText);
    const deliveryTotalPrice = parseInt(document.getElementById("delivery-cost").innerText);
    const total = fixedTotalPrice + memoryTotalPrice + storageTotalPrice + deliveryTotalPrice;
    document.getElementById('total-cost').innerText = total;
    document.getElementById('footer-total').innerText = total;
}

// PROMO-CODE-PART
function promoCodeApply() {
    const promoCode = document.getElementById('promo-Code-Input').value;
    if (promoCode == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('total-cost').innerText);
        totalPrice = totalPrice - (totalPrice * 0.2);
        document.getElementById('footer-total').innerText = totalPrice;
    }
    document.getElementById('promo-Code-Input').value = '';
}