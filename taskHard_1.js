"user strict";

//lesson 1* unit_3 module_4

// Необходимо написать программу для вычисления налога по прогрессивной шкале в зависимости от полученного заработка:
// 13% на доход до 15 000 ₽
// 20% на доход от 15 000 ₽ до 50 000 ₽
// 30% на доход выше 50 000 ₽
// Запросить у пользователя доход и вывести в консоль сумму налога

let userTaxSumm; 
const userIncome = prompt('Введите сумму Вашего дохода в месяц', '');

if (Number(userIncome) < 15000) {
    userTaxSumm =  Number(userIncome) * 0.13;  
} else if ((Number(userIncome) >= 15000) && (Number(userIncome) <= 50000)) {
  userTaxSumm =  Number(userIncome) * 0.2; 
} else {
  userTaxSumm =  Number(userIncome) * 0.3;
}

console.log(userTaxSumm);


//lesson 2* unit_3 module_4
// Во многих странах иная прогрессивная шкала налогообложения и вычисляется она более сложным способом: 
// Налоговая ставка 13% на доход до 15 000 ₽
// Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽
// Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.
// Напишите программу, которая корректно сможет посчитать налог и вывести сумму налога в консоль.

let userTaxSumm; 
const userIncome = prompt('Введите сумму Вашего дохода в месяц', '');

if (Number(userIncome) < 15000) {
    userTaxSumm =  Number(userIncome) * 0.13;  
} else if ((Number(userIncome) >= 15000) && (Number(userIncome) <= 50000)) {
  userTaxSumm =  Number(userIncome) * 0.13 + (Number(userIncome) - 15000) * (0.2 - 0.13); 
} else {
  userTaxSumm =  (Number(userIncome) - 50000) * (0.3 - 0.13 - (0.2 - 0.13)) + (Number(userIncome) * 0.13 + (Number(userIncome) - 15000) * (0.2 - 0.13));
}

console.log(userTaxSumm);