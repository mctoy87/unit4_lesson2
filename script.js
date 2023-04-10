'use strict';

// const nameProduct = 'Велосипед';
// const sumProduct = 10;
// const categoryProduct = 'Спорт';
// const priceProduct = 500;

// console.log(nameProduct);

// console.log(sumProduct*priceProduct);

// //Запросите у пользователя 
// let userProduct = prompt('Запиши наименование товара', 'Мяч');
// let userCount = prompt('Запиши количество товара', 1);
// let userCategory = prompt('Запиши категорию товара', 'Спорт');
// let userPrice = prompt('Запиши цену товара в долларах', '');
// //Выведите в консоль тип данных
// console.log(typeof userProduct);
// console.log(typeof userCount);
// console.log(typeof userCategory);
// console.log(typeof userPrice);
// //убедитесь что количество и цена тип данных numbers, если это не так-то поправьте
// userCount = Number(userCount);
// console.log(typeof userCount);
// userPrice = +userPrice;
// console.log(typeof userPrice);
// //В консоль выведите строку со значением количество товара, наименование и общую сумму 
// console.log(`На складе ${userCount} единиц(а,ы) товара ${userProduct} на сумму ${userPrice} доллар(ов,а)`);

//lesson_1 unit_3 module_4 
//Запросите у пользователя 
const userProduct = prompt('Запиши наименование товара', 'Мяч');
const userCount = prompt('Запиши количество товара', 1);
const userCategory = prompt('Запиши категорию товара', 'Спорт');
const userPrice = prompt('Запиши цену товара в долларах', '');
//С помощью конструкции if (else) убедитесь, что пользователь ввёл число
// ✔ Если число, то всё должно работать как и в прошлом задании
// ✔ Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"
// ✔ Других сообщений в консоли быть не должно.
if (Number(userCount) && Number(userPrice)) {
    console.log(`На складе ${userCount} единиц(а,ы) товара ${userProduct} на сумму ${userPrice} доллар(ов,а)`);
} else {console.log('Вы ввели некорректные данные')}
