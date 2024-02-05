const today = new Date();
const date = new Date('2062-10-09')
console.log(date.getMonth());
console.log(date.getDay());
const specficDate = new Date(2091, 0, 26)
console.log(specficDate);
specficDate.setMonth(10);
console.log(specficDate.toLocaleDateString('en-GB'));