//Hooray you made it through the portal! You hear a grating, malicous beeping coming from behind
// the control panel! BZZZZZGG BLEEEEERGRR! GLAP GLAP RARG!
// As the portal zaps shut behind you the beeping stops momentarily. A rusty robotic head with blazing
// red LED eyes whips into view and its glare settles on you..

//Find the robot's deactivation code. This looks like one of the older models.
//You learnt at space academy that the old style robots' deactivation codes are the binary version of their serial numbers.
//Their serial numbers never exceed 99999. (At this point in production the model was discovered, horribly and loudly, to be inately evil.)
//Translate the serial number you see stamped into the robot's forehead into binary code.
//Be sure to return it as a number...these old robots aren't great with words.

//Return the binary version of the integer to save the day...and your bacon.
// decToBinary(6) => 110
// 1 => 1
// 5 => 101
//45 => 101101
//9964 => 10011011101100

// export function decToBinary(num) {
//   let binaryString = '';
//   //While num is more than zero
//     let current = num;
//     if (current === 0) return 0;
//     while (current > 0) {
//     //add the remainder of num divided by 2 to the binary string
//     binaryString += current % 2;
//     //Num becomes the floor of num divided by 2 because we have removed the remainder
//     current = Math.floor(current / 2);
//   }
//   //reverse the binary string
//   // return
//   return parseInt(binaryString.split('').reverse().join(''));
// }

export const decToBinary = (serialNumber) => {
  if (serialNumber === 0) {
    return serialNumber;
  } else {
    return (
      (serialNumber % 2) +
      10 * decToBinary(Math.floor(serialNumber / 2))
    );
  }
};

// export const decToBinary = (serialNumber) => {
//     return +(serialNumber.toString());
// };








import { winTexts, failTexts, randIndex } from './.SPOILER.js';
//Check your outcome here!
// FAILS :((
console.log(`Fail: ${failTexts[randIndex()]}\n`);

// WINS :D

console.log(`Win: ${winTexts[randIndex()]}`);
