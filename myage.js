let age = 22;

if (age < 22) {
  process.stdout.write("my age is under 18 years old.");
} else if (age >= 18 && age <= 21) {
  process.stdout.write("my age is between the ages of 18 and 21.");
} else {
  process.stdout.write("my age is over 21 years old.");
}