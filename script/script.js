console.log(112);
let bill;
let people;
const billInput = document.getElementById("bill");

const amount = document.querySelector("#amount h3");
const total = document.querySelector("#total h3");

console.log(amount, total);

billInput.addEventListener("keypress", (e) => {
  // console.log(e.target.value);
  bill = e.target.value * 1;
});
const numOfPeople = document.getElementById("people");

numOfPeople.addEventListener("keypress", (e) => {
  // console.log(e.target.value);
  people = e.target.value * 1;
});

// const addition = () => showAmount(bill, people);

// const showAmount = (bill = 0, people = 0) => {
//   amount.innerHTML = tresc;
// };

console.log(bill, amount);
