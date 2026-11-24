// Requirement 1: Class 1
class BankAccount {
  // Requirement 2: Encapsulation (private field)
  #balance = 0;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  // Requirement 3: Method 1
  deposit(amount) {
    // Requirement 4: Conditional
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  // Requirement 3: Method 2
  getBalance() {
    return this.#balance;
  }
}

// Requirement 1: Class 2
class SavingsAccount extends BankAccount {
  addInterest() {
    this.deposit(this.getBalance() * 0.05);
  }
}

const acc = new SavingsAccount(1000);
acc.addInterest();
console.log(acc.getBalance());