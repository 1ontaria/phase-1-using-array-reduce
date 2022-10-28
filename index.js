const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = 31;

const reducer = () => {
  let total = batteryBatches.reduce(function (accumulator, element) {
    return totalBatteries + element, 0;
  });
  return total;
};
