export function decToBinary(serialNumber) {
  let binaryString = '';
  //While serialNumber is more than zero
  let current = serialNumber;
  while (current > 0) {
    //add the remainder of serialNumber divided by 2 to the binary string
    binaryString += current % 2;
    //Num becomes the floor of serialNumber divided by 2 because we have removed the remainder
    current = Math.floor(current / 2);
  }
  //reverse the binary string
  // return
  return binaryString.split('').reverse().join('');
}

// //Alright smartypants! ->
//decToBinary

export function dBRecursive(serialNumber) {
  //get out of jail free
  if (serialNumber === 0) {
    return serialNumber;
  } else {
    //multiply by ten to avoid having to reverse the string
    // call the function on repeat until the number is zero then unwind the call stack adding the answers one by one (or well multiplying in this case)!
    return (
      (serialNumber % 2) +
      10 * dBRecursive(Math.floor(serialNumber / 2))
    );
  }
}

export const decToBinaryEasy = (serialNumber) => {
  return serialNumber.toString();
};

//Whack in as needed to make sure they're integers -> console.log(typeof ((serialNumber % 2) + 10 * decToBinary(Math.floor(serialNumber / 2))));

export const randIndex = () => {
  return Math.floor(Math.random() * failTexts.length);
};

export const failTexts = [
  'Muahahaha. The robot makes a hideous shriek as it lurches towards you. The ship \nis lost are your final thoughts',
  'Nooooo you scream as the robot prepares to cut you in half with its laser eyes!',
  '"Wait" you grovel, defeated, "you win, I beg you, let me serve the robot army however \nyou deem fit, don\'t kill me your eminence.',
  "The robot's eyes flash brighter, its mechanical voice chillingly calm. \"All escape \nroutes have been sealed.\" Your heart races as you realize you're trapped, and there's \nnowhere left to run. A deep sigh escapes you, resigning yourself to your fate.",
  'With a mechanical hum, the robot\'s head tilts, studying you like an insect in a jar. \nIt speaks in a monotone, "You will be assimilated into the collective." A chill runs \ndown your spine as you realize there is no room left for defiance.',
  'The robot\'s eyes narrow as a series of lights blink in rapid succession. "Your mission \nis a failure," it states with cold indifference. The air around you grows heavier, \nand the walls seem to close in, leaving you with nothing but the weight of your helplessness.',
  'A low, synthetic voice fills the room, "You will serve the collective." You feel the \npressure of a thousand unseen eyes upon you, and though you try to speak, your words \nare lost in the vast, cold silence that surrounds you.',
  'The robotic head whirs ominously, its red LED eyes locking onto yours. A voice \nreverberates in the air, "Your mission has failed." You feel an overwhelming sense \nof dread as the walls close in, and your hope fades into the cold silence.',
  'You try to back away, but the robot\'s metallic arms slowly extend, blocking every \npath. A creaky voice whispers, "There is no retreat." Your breath catches as you \nfeel an invisible force closing in on you, and the room grows unbearably still.',
];

export const winTexts = [
  '"In a flash of brilliance, you hack into the robot\'s core system, overriding its \nprogramming and rendering it completely harmless. With a satisfied grin, you power \ndown the once-feared machine. Excellent work!"',
  'You outsmart the robot with a dazzling display of quick thinking, triggering its \nself-destruct sequence with a well-placed keystroke. As it powers down, you breathe \na sigh of relief and marvel at your victory!',
  "Using your superior knowledge, you disable the robot's control panel, effectively \nneutralizing its threat. The once-menacing red lights flicker out, and the room \nis filled with a profound silence. Success!",
  "With a series of deft moves, you manage to disconnect the robot's central \nprocessor. It falls still, no longer able to carry out its hostile commands. \nYou stand tall, the mission a resounding success!",
  'Your sharp reflexes allow you to expertly reprogram the robot, converting it into \na helpful assistant. It now serves you willingly, its previous malice replaced by a calm, cooperative demeanor. Victory is yours!',
  "You cleverly confuse the robot's sensors, causing it to misinterpret its surroundings \nand lock itself into an inactive mode. With a sense of accomplishment, you step back \nand observe your handiwork—problem solved!",
  "By carefully rerouting the robot's energy supply, you drain its power entirely, \nrendering it harmless. It collapses in place, no longer a threat. With a satisfied nod, \nyou take a moment to enjoy your triumph!",
  'AMAZING work captain! Using your quick reflexes and astounding intellect you deactivate the hideous old robot!',
  'You finish the robot off, bludgeoning it with its own arm! Quickly you push it out into space. Great work!',
];
