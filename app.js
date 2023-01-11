console.log("Hello World!\n==========\n");

// Exercise 1 Section

function printOdds(count) {
  for (let i = 1; i < count; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
  }
}
printOdds(100);


// Exercise 2 Section

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen =` Sorry ${userName}, but you need to wait until you're 16.`;
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Kinjal", 21);
checkAge("Bill", 15);


// Exercise 3
 


function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    }  else if (x < 0  && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    }  else if (x == 0 && y != 0) {
        return "x Axis";  
    } else if (x != 0 && y == 0) {
        return "y Axis"; 
    } else{
        return "Origin"
    }
}            

console.log(checkQuadrant(1, 2));
console.log(checkQuadrant(-6, 18));
console.log(checkQuadrant(0, 2));


// Exercise 4

function validTri(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
         console.log(`invalid triangle`)
    } else if (a == b && a == c && b == c) {
         console.log(`equilateral triangle`);
    } else if ((a != b && a != c && b != c)) {
        console.log(`scalene triangle`);
    } else {
         console.log(`isoceles triangle`);
    }
}
    
    validTri(1,1,2);
    validTri(2,2,2);
    validTri(6,5,4);
    validTri(1,2,2);


// Exercise 5

function dailyUsage(planLimit, day, usage) {
    const dayPeriod = 30;
    const expectedAvgUse = (planLimit / dayPeriod).toFixed(2);
    const averageUsageSoFar = (usage / day).toFixed(2);
    const projectedTotalUsage = averageUsageSoFar * dayPeriod;
    const totalUsageDifference = projectedTotalUsage - planLimit;
    const remainingData = planLimit - usage;
    const daysRemaining = dayPeriod - day;
    const gbPerDayCorrection = (remainingData / daysRemaining).toFixed(2);
  
    if (remainingData <= 0) {
      console.log(`You are completely out of data :(`);
    }
  
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Expected average daily use: ${expectedAvgUse} GB/day`);
  
    //Exceeding Text
    if (projectedTotalUsage > planLimit) {
      console.log(
        `You are Exceeding your daily average use ${averageUsageSoFar} GB/day. Continuing this high usage, you'll exceed your data plan by ${totalUsageDifference} GB/day. To stay below your data plan, use no more than ${gbPerDayCorrection}.`
      );
    } else if (projectedTotalUsage < planLimit) {
      console.log(
        `You are below your daily average use ${averageUsageSoFar} GB/day. To get the most out of your data plan, start using ${gbPerDayCorrection} per day.`
      );
    }
  }
  
  dailyUsage(100, 15, 30);
  