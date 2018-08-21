var Food = require('./Food');
var display=require('./FoodManager').displayItems;
var Finddiscount=require('./FoodManager').discount;


let iceCream = new Food(101, 'Vannila', 45.00, 'images/van.jpg');
let pastry = new Food(102, 'Butter', 55.00, 'images/vBW.jpg');

console.log(iceCream.toString());
console.log(iceCream.name);

let discount=(item)=>item.ratePerUnit*.10;
console.log(discount);
console.log(discount(iceCream));

display(iceCream,pastry);

Finddiscount(iceCream,.20);
Finddiscount(pastry);