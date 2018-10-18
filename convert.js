const length = { m: 1, cm: 0.01, mm: 0.001 };
const weight = { kg: 1, g: 0.001 };
const solution =
  (length[process.argv[3]] * process.argv[2]) / length[process.argv[5]] ||
  (weight[process.argv[3]] * process.argv[2]) / weight[process.argv[5]];
console.log(
  isNaN(solution) || "to" != process.argv[4] || 6 != process.argv.length
    ? "Invalid parameters"
    : `${process.argv[2]} ${process.argv[3]} are ${solution} ${process.argv[5]}`
);
