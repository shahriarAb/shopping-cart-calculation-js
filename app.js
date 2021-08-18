function updateNumber(product, isIncreasing, pricing) {
    const input = document.getElementById(product + '-number');
    let number = input.value; //get the product number
    if (isIncreasing) {
        number = parseInt(number) + 1;
    }
    else if (number > 0) {
        number = parseInt(number) - 1;
    }
    input.value = number; //set product number
    const updatePrice = document.getElementById(product + '-price');
    updatePrice.innerText = number * pricing; //update pricing respect to product
    calculateTotal();
}
function calculateTotal(){
    const phonePrice = parseInt(document.getElementById('phone-price').innerText);
    const casePrice = parseInt(document.getElementById('case-price').innerText);
    const subTotal = phonePrice + casePrice;
    const taxAmt = subTotal / 10;
    const totalAmt = subTotal + taxAmt;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amt').innerText = taxAmt;
    document.getElementById('total-amt').innerText = totalAmt;

}
//phone count and set price
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', false, 1219);
});
//case count and set price
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', false, 59);
});
// remove items
document.getElementById('remove-item-1').addEventListener('click', function(){
    document.getElementById('cart-item-1').style.display = 'none';
})
document.getElementById('remove-item-2').addEventListener('click', function(){
    document.getElementById('cart-item-2').style.display = 'none';
})