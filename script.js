'use strict';

const nameProduct = 'Велосипед';
const sumProduct = 10;
const categoryProduct = 'Спорт';
const priceProduct = 500;

console.log(nameProduct);

console.log(sumProduct*priceProduct);

//Запросите у пользователя 
let userProduct = prompt('Запиши наименование товара', 'Мяч');
let userCount = prompt('Запиши количество товара', 1);
let userCategory = prompt('Запиши категорию товара', 'Спорт');
let userPrice = prompt('Запиши цену товара в долларах', '');
//Выведите в консоль тип данных
console.log(typeof userProduct);
console.log(typeof userCount);
console.log(typeof userCategory);
console.log(typeof userPrice);
//убедитесь что количество и цена тип данных numbers, если это не так-то поправьте
userCount = Number(userCount);
console.log(typeof userCount);
userPrice = +userPrice;
console.log(typeof userPrice);
//В консоль выведите строку со значением количество товара, наименование и общую сумму 
console.log(`На складе ${userCount} единиц(а,ы) товара ${userProduct} на сумму ${userPrice} доллар(ов,а)`);

