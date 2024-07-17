/*
OOP - ATM assignment
********************************************
Due: Mon 3/6
Virtual ATM Machine (OOP Project)
- Build a console app that mimics an atm machine
- Persitent balance (CRUDable)
- Main Menu that routes to other menus 
  *********
  Welcome
  1) view balance
   ..... etc
  *********
- Redirect back to the main menu
- Error handling for withdrawals 
- Deposit
- Withdrawal
- View Balance
- Exit the program via selection
- Receipt 
- BONUS:
  - Include pin number for users
  - Easter Egg code for FBI Lockout


HAVE FUN
*/

class Users {
  constructor(balance = 0) {
    this.balance = balance;
  }
}

const user1 = new Users();

function depositMoney(amount) {
  user1.balance += amount;
  user1.deposit = amount;
  displayMessage(`Deposit successful! Your balance is now $${user1.balance}`);
}

function withdrawMoney(amount) {
  if (amount > user1.balance) {
    displayMessage("Insuffciant Funds. Please choose smaller amount");
  } else {
    user1.withdraw = amount;
    user1.balance -= amount;
    displayMessage(`Withdraw succesful! Your balance is now $${user1.balance}`);
  }
}

function viewBalance() {
  displayMessage(`Your balance is $${user1.balance}`);
}

function showDeposit() {
  const inputArea = document.getElementById("input-area");
  inputArea.innerHTML = `
    <input type="number" id="depositAmount" placeholder="Enter deposit amount" />
    <button onclick="handleDeposit()">Submit</button>
  `;
}

function handleDeposit() {
  const depositAmount = document.getElementById("depositAmount").value;
  if (depositAmount) {
    depositMoney(Number(depositAmount));
  } else {
    displayMessage("Please enter a valid amount.");
  }
}

function showWithdraw() {
  const inputArea = document.getElementById("input-area");
  inputArea.innerHTML = `
    <input type="number" id="withdrawAmount" placeholder="Enter withdrawal amount" />
    <button onclick="handleWithdraw()">Submit</button>
  `;
}

function handleWithdraw() {
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  if (withdrawAmount) {
    withdrawMoney(Number(withdrawAmount));
  } else {
    displayMessage("Please enter a valid amount.");
  }
}

function exit() {
  const inputArea = document.getElementById("input-area");
  inputArea.innerHTML = "";
  displayMessage("Have a Wonderful Day!Come Again");
}

function displayMessage(message) {
  const display = document.getElementById("display");
  display.innerText = message;
}
