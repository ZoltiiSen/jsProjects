'use strict'

/*
//Функция возведения в степень
function pow(x, n) {
  var result = x;

  for( var i = 1; i < n ; i++ ){
    result *= x;
  }

  return result;
}

var
  x = prompt('Число...', ''),
  n = prompt('Степень...', ''); 

alert( pow( x, n ) );
*/



/*
//Math.random создает рандомное число в диапазоне [0... 1)
//Умножаем на max - min
//Добавляем min(Т.к. сейчас у нас число не большее)
// +1 т.к. м делаем Math.floor дабы было целое число
//Math.floor
function MinMaxInt(min, max){
  return Math.floor( Math.random() * (max - min) + min
                     + 1 );
}
alert( MinMaxInt(1, 10) );
*/



/*
//Сложный вариант написания первой буквы с большой, который первым пришел ко мне в глову
function ucFirst(str){
  var firstChar = str.charAt(0).toUpperCase(),
      result 	  = firstChar;
  for(var i = 1; i < str.length; i++){
 	result = result + str[i];
  }
  return result;
}

//На много более простой метод с использованием метода slice
function ucFirstEasy(str){
  return str[0].toUpperCase() + str.slice(1);
}

var str = prompt('Введите слово с маленькой буквы...', '');
alert ( 'Сложный вариант: ' + ucFirst(str) + '\nПростой вариант: ' + ucFirstEasy(str) );
*/


/*
//Типо пример регестрации
var savedLogins = {};
savedLogins.Roma = 'Mamochka1201';
savedLogins.Yura = 'RomaLi090703';
var massVisitor = {};
massVisitor.name = prompt('Your name... ', '');
  if(massVisitor.name == 'Yura' ||
    massVisitor.name == 'Roma'){
   if( confirm('This name was registered. Do you wont to log-in?') ){
     if( prompt('Your log-in...', '') == savedLogins.Roma ||
       	prompt('Your log-in...', '') == savedLogins.Yura ){
        alert('Hello, ' + massVisitor.name + '!')
      }
    } 
  }
massVisitor.age = prompt('Your age...', '');
massVisitor.password = prompt('Your password...', '');

alert('You are registered!');

while(true){
  var pas = prompt('ENTER YOUR PASSWORD:', '')
  if(pas == massVisitor.password){
    alert('Hello, ' + massVisitor.name + '!');
	  break;
  }
  alert('Valid password!');
}

if( confirm('Do you wont to reenter your age?') ){
  massVisitor.age = prompt('Your age...', '')
} else{
  alert('Ok');
}
*/

/*
//Подсчет значений объекта
function counting(mass){
  var count = 0;
  for(var key in mass){
    count = count + mass[key];
  }
  return count;
}

var salary = {
  'Vasya': 1000,
  'Pimpa': 1100,
  'Danya': 900,
  'Kolya': 1500
}

alert( counting(salary) );
*/

/*
//Возвращает последнее значение массива
function Last(pop){
  return pop[pop.length - 1];
}

var arr = [5, 4, 3, 2, 1];

alert( Last(arr) )
*/

/*
//Возвращает случайное значение массива
function randInArr(mass){
  var rand = Math.floor(Math.random() * mass.length);
  alert(mass[rand]);
}

var arr = ['Apple', 'Pinapple', 'Pear', 'Banana'];
randInArr(arr)
*/

/*
//Типо калькулятор
var massiv = [];
while(true){
  var num = prompt('Введите слогаемое...', '');
  if (num === '' || num === null ){break;}
  massiv.push(+num);
}
var sum = 0;
for(var i = 0; i < massiv.length; i++){
  sum += massiv[i];
}
alert('Сумма: ' + sum); 
*/

/*
//Поиск в массиве
function find(array, str){
  for(var i = 0; i < array.length; i++){
    if(array[i] === str){
      return true;
    }
  }
  return false;
}

var arr       = ['Ирина', 'Юрий', 'Роман', 'Юрий', 'Мария'],
    namess    = prompt('Введите полное имя члена семьи', ''),
    truefalse = find(arr, namess);

if( truefalse ){
  alert('Человек найден!')
} else{
  alert('Человек не найден!');
}
*/

/*
//Добавление и удаление классов из свойства className;
function addClass(obj, cls){
  var arr = obj.className.split(' ');

  for(var i = 0; i < arr.length; i++){
    if(arr[i] == cls){
      alert('Класс уже есть!');
      return;
    }
  }

  arr.push(cls);
  obj.className = arr.join(' ');
}

function removeClass(obj, cls){
  var arr = obj.className.split(' ');

  for(var i = 0; i < arr.length; i++){
    if(arr[i] == cls){
      arr.splice(i, 1);
      i--;
    }
  }

  obj.className = arr.join(' ');
}

var arr = {className: "home button ul li"}
addClass(arr, 'lol');
alert(arr.className);

addClass(arr, 'home');
alert(arr.className);

addClass(arr, 'klipka');
alert(arr.className);

removeClass(arr, 'klipka');
alert(arr.className);
*/

/*
//Изменение типа написания значения
function Namechik(str){
  var arr = str.split('-');

  for(var i = 1; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  str = arr.join('');
  return str;
}

alert( Namechik('border-width-left') );
alert( Namechik('padding-left') );
alert( Namechik('justify-content-center') );
*/

/*
//Создание массива из длинн строк стартового массива
var arr = ['Лол', 'Кек', 'Чебурек'];
var arrLength = arr.map(function(item){
  return item.length;
})

alert(arrLength);
*/

/*
//Калькулятор на сумму и произведение 2-х чисел
var calc = {
  read: function(){
    this.a = +prompt('Ввиде первое число...' , '');
    this.b = +prompt('Ввиде первое число...' , '');
  },

  sum: function(){
    return this.a + this.b;
  },

  mul: function(){
    return this.a * this.b;
  }

};

calc.read();
alert( calc.sum() );
alert( calc.mul() );
*/

/*
//Калькулятор который можно научить
// Принимает значения только вв виде"NUM operator NUM"
function Calculator(){

  //Функция калькулятора
  var oper = {
    "+": function(a, b){
      return a + b;
    },
    "-": function(a, b){
      return a - b;
    }
  };

  this.Calc = function(str){
    var
      split = str.split(' '),
      a     = +split[0],
      op    =  split[1],
      b     = +split[2];

    if( (!!a && a == 0) || (!!b && b == 0) || search(op, this.oper)){return 'Error'};

    return oper[op](a, b);
  }

  //Добавление оператоов
  this.addOper = function(name, func){
    oper[name] = func;
  }
}

//Вспомогательная функция поиска значени в объекте
function search(str, obj){
  for( var key in obj ){ obj[key] === str ? true : false; }
}

//Создаем объект(функцию)
var calcu = new Calculator();

//Добавдение операторы
calcu.addOper("/", function(a, b){
  return a / b;
});
calcu.addOper("*", function(a, b){
  return a * b;
});
calcu.addOper("**", function(a, b){
  return  a ** b;
});
calcu.addOper("%", function(a, b){
  return  a % b;
});

//Вызываем функции
alert( calcu.Calc('3 + 3') + ' +' );
alert( calcu.Calc('3 - 3') + ' -' );
alert( calcu.Calc('3 * 3') + ' *' );
alert( calcu.Calc('3 / 3') + ' /' );
alert( calcu.Calc('3 ** 3') + ' **  ');
*/

document.write('lol');