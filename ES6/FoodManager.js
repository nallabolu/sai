exports.displayItems = function (...foodList) {
    for (let i = 0; i < foodList.length; i++) {
        console.log(foodList[i].toString());
        console.log('value of i :' + i);
    }
    
}
exports.discount = function (item, discount = 0.10) {
    console.log(item.name);
    console.log(item.ratePerUnit);
    console.log(item.ratePerUnit * discount);

}