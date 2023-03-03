var readLineSync = require('readline-sync');

var userBdayYear = readLineSync.question("Please enter your birthday year in YYYY format: ");
console.log(userBdayYear);

function bdayYear(year){
  if ( year % 400 === 0 ){
    console.log("Your b'day year is a leap year");
  }else if( year % 100 === 0 ){
    console.log("Your b'day year is not a leap year");
  }else if ( year % 4 === 0 ){
    console.log("Your b'day year is a leap year");
  }else{
    console.log("Your b'day year is not a leap year");
  }
}

bdayYear(userBdayYear);

console.log("-------------- Thank You ------------------")