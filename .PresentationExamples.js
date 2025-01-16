//TRUE RESULTS - Happy outcome

//get out of jail free
if (serialNumber === 0) {
  return serialNumber;
} else {
  return (
    (serialNumber % 2) +
    10 * decToBinary(Math.floor(serialNumber / 2))
  );
}
//}
