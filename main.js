// 1 задание
var age = +prompt("Enter your age: ")

if(age > 0 && age <= 18){
    alert("You are young, you have to study");
} else if(age > 18 && age <= 50){
    alert("You have to work");
} else if(age > 50 && age <= 59){
    alert("You will retire soon");
} else if(age > 59 && age <= 100){
    alert("You are a pensioner");
} else{
    alert("Something went wrong");
}

// 2 задание
var time = +prompt("Enter time: ")

switch(time){
    case 1:
        alert("1 час ночи")
        break;
         case 2:
        alert("2 часа ночи")
        break;
         case 3:
        alert("3 часа ночи")
        break;
         case 4:
        alert("4 часа ночи")
        break;
 case 5:
        alert("5 часов нчои")
        break;
         case 6:
        alert("6 часов ночи")
        break;
         case 7:
        alert("7 часов утра")
        break;
         case 8:
        alert("8 часов утра")
        break;
         case 9:
        alert("9 часов утра")
        break;
         case 10:
        alert("10 часов утра")
        break;
         case 11:
        alert("11 часов дня")
        break;
         case 12:
        alert("12 часов дня")
        break;
         case 13:
        alert("13 часов дня")
        break;
         case 14:
        alert("14 часов дня")
        break;
         case 15:
        alert("15 часов дня")
        break;
         case 16:
        alert("16 часов дня")
        break;
         case 17:
        alert("17 часов дня")
        break;
         case 18:
        alert("18 часов вечера")
        break;
         case 19:
        alert("19 часов вечера")
        break;
         case 20:
        alert("20 часов вечера")
        break;
         case 21:
        alert("21 часов вечера")
        break;
         case 22:
        alert("22 часов вечера")
        break;
         case 23:
        alert("23 часов вечера")
        break;
        default:
            alert("mistake!")
}

// или

var time = +prompt("Enter time: ");

switch (time) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    alert(time + " часа ночи");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    alert(time + " часов утра");
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    alert((time - 12) + " часов дня");
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    alert((time - 12) + " часов вечера");
    break;
  default:
    alert("mistake");
}

// 3 задание
var one = +prompt("Enter first number: ");
var two = +prompt("Enter second number: ");
var three = +prompt("Enter second number: ");

if(one > two || two < three ) {
     alert(two);
     } else if(two > one || one < three  ) {
     alert(one);
 } else if (one > three || three < two) {
     alert(three);
 } else {
     alert("Error!");
}