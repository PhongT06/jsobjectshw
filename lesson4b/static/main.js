// objects and math in js

// Task 1.

function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

console.log(Account)

// Task 2. & Task 3.

Account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}`);
}

Account.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`);
    } else {
        console.log(`Insufficient funds in account ${this.accountNumber}.`);
    }
}

let myAccount = new Account("3212674", 1000, "Harry Potter");
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2200);








