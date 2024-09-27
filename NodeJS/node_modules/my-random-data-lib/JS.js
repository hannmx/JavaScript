function getRandomName() {
  const names = ['John', 'Alice', 'Bob', 'Jane', 'Michael'];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {
  getRandomName,
  getRandomNumber,
  getRandomDate,
};
