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
  constructor(balance = 0, deposit = 0, withdraw = 0) {
    this.balance = balance;
    this.deposit = deposit;
    this.withdraw = withdraw;
  }
}
const user1 = new Users();
function depositMoney() {
  const depositAmount = parseInt(prompt("How much Would you like to deposit?"));
  user1.balance += depositAmount;
  user1.deposit = depositAmount;
  alert(`Deposit successful! Your balance is now $${user1.balance}`);
}

function withdrawMoney() {
  const withdrawAmount = parseInt(prompt("Enter withdrawel amount"));
  if (withdrawAmount > user1.balance) {
    alert("Insuffciant Funds. Please choose smaller amount");
  } else {
    user1.withdraw = withdrawAmount;
    user1.balance -= withdrawAmount;
    alert(`Withdraw succesful! Your balance is now $${user1.balance}`);
  }
}

function viewBalance() {
  alert(`Your balance is $${user1.balance}`);
}

function receiptMoney() {
  alert(`Your new balance is: $${user1.balance}
  Amount withdrawn this session: $${user1.withdraw}
  Amount depsosited this session: $${user1.deposit}`);
}

function menu() {
  alert("Welcome to our Bank ATM!!!");
  while (true) {
    const choose = prompt(
      "Please select an option:\n1) Deposit\n2) Withdraw\n3) View balance\n4) Exit"
    );
    switch (choose) {
      case "1":
        depositMoney();
        break;
      case "2":
        withdrawMoney();
        break;
      case "3":
        viewBalance();
        break;
      case "4":
        receiptMoney();
        alert("Have a wonderful day!");
        return false;
    }
  }
}

menu();
