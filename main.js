let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false; 
let runnersAge = 18;

if(registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
} 

if(registeredEarly && runnersAge > 18) {
  console.log(`The race will begin at 9:30am, and your race number is: ${raceNumber}`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`The race will begin at 11:00am, and your race number is: ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`The race will begin at 12:30pm, and your race number is: ${raceNumber}`);
}  else {
  console.log(`Please see the registration desk`);
}