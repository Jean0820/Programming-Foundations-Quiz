class Account {
  constructor(accname, accno, balance) {
    this.name = accname;
    this.accno = accno;
    this.balance = balance;
    this.transactions = [];
  }

  //Your code here
  deposit(amount) {
    if (amount < 0) {
      return "Invalid amount.";
    }
    this.transactions.push({ type: "deposit", amount: amount });
    return this.balance += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      return "Invalid amount.";
    }
    this.transactions.push({ type: "withdrawal", amount: amount });
    return this.balance -= amount;
  }

  showBalance(){
    return this.balance;
  }

  accountDetails(){
    return this.transactions;
  }

  
}



module.exports = { Account };
