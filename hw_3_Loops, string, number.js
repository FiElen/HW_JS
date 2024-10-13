"use strict";
/* ----------------------------------------------------Task 1.1-------------------------------------------------------
1. Создайте цикл, который выведет в консоль только четные цифры от 10 до 0 (10-8-6-4-2-0)
*/
for (let i=10;i>=0;i--){
    if (i%2!==0) continue;
    console.log(i);
}

/* ----------------------------------------------------Task 1.2-------------------------------------------------------
2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
  Пример в консоли:
  :)
  :):)
  :):):)
  :):):):)
  :):):):):) 
*/

let a=':)';
for (let i=0; i<5;i++){
  console.log(a);
  a=a+':)';
}

/* ----------------------------------------------------Task 1.3-------------------------------------------------------  

3. Создайте скрипт, который удалит все пробелы из строчки:
  - Создайте переменную text со значением: Hello! I am a JS student!
  - Вывелите в консоль text, заменив в ней все пробелы на 1 (единица)
  - Реализуйте с помощью метода replaceAll
  - Пример в консоли: Hello!1I1am1a1JS1student!
*/

let text = 'Hello! I am a JS student!';
console.log(text.replaceAll(' ','1'));

/* ----------------------------------------------------Task 2-------------------------------------------------------
Вам нужно вывести в консоль числа от 1 до 100.
    Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
    Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
    Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
    Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.
*/

for(i=1;i<101;i++){
  if (i%3 && i%5) {
    console.log(`Число ${i} - делится без остатка на 3 и на 5`);
  } else if (i%3){
    console.log(`Число ${i} - делится на 3`);
  } else if (i%5){
  console.log(`Число ${i} - делится на 5`);
} else {
  console.log (`Число ${i}`);
}
}
  

/* ----------------------------------------------------Task 3*-------------------------------------------------------
Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/

const word='Пример!!!е';
const wordFinish= word.toUpperCase();
const vowels = 'АОИУЯЮЕЁЫЭ';
const consonants = 'БВГДЖЗЙКЛМНПРСТФХЦЧШЩ';
let vowelsCount = 0;
let consonantsCount = 0;
for(let char of wordFinish){
    if (vowels.includes(char)){
      vowelsCount++;
  }
    if (consonants.includes(char)){
      consonantsCount++;
  }
  console.log (`word contains ${vowelsCount}-vowels and ${consonantsCount}-consonants`);
}

