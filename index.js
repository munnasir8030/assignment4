// Problem- 01
// Write a function that will check & console argument data types. The argument will accept 3 different types of values. The function name will be, checkDataTypes().

function checkDataTypes(data, data2, data3) {
  if (typeof data == "string" || typeof data == "number" || typeof data == "boolean") {
      console.log(`${data} is a ${typeof (data)} data type`);

  } if (typeof data2 == "string" || typeof data2 == "number" || typeof data2 == "boolean") {
      console.log(`${data2} is a ${typeof (data2)} data type`);

  } if (typeof data3 == "string" || typeof data3 == "number" || typeof data3 == "boolean") {
      console.log(`${data3} is a ${typeof (data3)} data type`);
 
  }
  else {
      console.log("invalid oparation");
  }
}

checkDataTypes( "text", true,785776);


// problem (2)
// Write a function that will check if a year is a leap year or not. If the year is a leap year, The result will be, "2022 is a Leap Year". Either The result will be, "2022 is not a Leap Year". The Function name will be, checkLeapYear().

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`$ {year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

checkLeapYear(2019);

// problem (3)
// Perform arithmetic operations on two numbers in a function. The argument will accept 3 values (number, number, operations). The operations will be (add, subtract, multiply, divide, modulus). Except for these 5 operations, The Result is "invalid Operations". The Function name will be, evalNumbers();

function evalNumbers(a, b, oparation) {
  if (oparation == "add") {
    console.log(a + b);
  } else if (oparation == "subtract") {
    console.log(a - b);
  } else if (oparation == "modulas") {
    console.log(a % b);
  } else if (oparation == "multiply") {
    console.log(a * b);
  } else if (oparation == "divide") {
    console.log(a / b);
  } else {
    console.log("invalid Operations");
  }
}

evalNumbers(10, 2, "multiply");

// problem (4)
// Write a function that will check the largest of three numbers. The argument will accept 3 values. The Function name will be, findLargest().

function findLargest(a, b, c) {
  if (a > b && a > c) {
    console.log(`${a}`);
  } else if (b > a && b > c) {
    console.log(`${b}`);
  } else {
    console.log(`${c}`);
  }
}

findLargest(999899, 7, 9999);
