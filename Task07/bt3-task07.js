const students = [
  { name: "An", scores: [8, 7.5, 9] },
  { name: "Bình", scores: [6, 5.5, 7] },
  { name: "Chi", scores: [9, 9.5, 10] },
];

const student2 = students.map((student) => {
  let sum = 0;
  let count = 0;
  student.scores.forEach((scores) => {
    sum += scores;
    count++;
  });
  const average = count === 0 ? 0 : Math.round((sum / count) * 10) / 10;
  return { name: student.name, average: average };
});
console.log(student2);
