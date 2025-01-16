//STORYTIME
//Hooray you made it through the portal! You hear a grating, malicous beeping coming from behind the control panel!
// BZZZZZGG BLEEEEERGRR! GLAP GLAP RARG!
// As the portal zaps shut behind you the beeping stops momentarily. A rusty robotic head with blazing red LED eyes
// whips into view and its glare settles on you..

//    ----------------------------------------------------------------------------------
//STORY ROUTE
//Find the robot's deactivation code. This looks like one of the older models.
//You learnt at space academy that the old style robots' deactivation codes are the binary version of their serial numbers!
//Their serial numbers never exceed 65535. (At this point in production the model was discovered, horribly and loudly, to be inately evil.)
//Translate the serial number you see stamped into the robot's forehead into binary code.
//Be sure to return it as a number...these old robots aren't great with words.

//Return the binary version of the integer to save the day...and your bacon.

//   ------------------------------------------------------------------------------------

//PLAIN SPEAKING
//Return the binary code for the serial number as an integer.
//Max serialNumber will be 65535


// decToBinary(6) => 110
// 1 => 1
// 5 => 101
//45 => 101101
//9964 => 10011011101100

//   -------------------------------------------------------------------------------------


export const decToBinary = (serialNumber) => {

    // return serialNumber in binary form
    if (serialNumber === 0) {
    return serialNumber;
    } else {
    return (
        (serialNumber % 2) +
        10 * decToBinary(Math.floor(serialNumber / 2))
    );
    }
};



//   -------------------------------------------------------------------------------------
















//Nothing to add below this point.

import { winTexts, failTexts, randIndex } from './.SPOILER.js';
console.log(`Fail: ${failTexts[randIndex()]}\n`);
console.log(`Win: ${winTexts[randIndex()]}`);
