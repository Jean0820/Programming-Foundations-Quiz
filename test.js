const { Account } = require("./app.js");

describe("should check if account is an object", () => {
  it("returns an object", () => {
    const account = new Account("myAccount", 123456, 0);
    expect(account).toBeInstanceOf(Object);
  });
});
describe("User should be able to deposit funds into their account", () => {
  it("should deposit funds into the account", () => {
    const account = new Account("myAccount", 123456, 0);
    account.deposit(5);
    account.deposit(10);
    expect(account.balance).toBe(15);
  });
});

describe("User should be able to withdraw funds from their account", () => {
  it("should withdraw funds from the account", () => {
    const account = new Account("myAccount", 123456, 0);
    account.deposit(50);
    account.withdraw(10);
    expect(account.balance).toBe(40);
  });
});

describe("User should not be able to deposit negative amaount into their account", () => {
  it("should not deposit less than 0", () => {
    const account = new Account("myAccount", 123456, 0);
    account.deposit(-5);
    account.deposit(-10);
    expect(account.balance).toBeFalsy();
  });
});
describe("User should not be able to withdraw negative amaount from their account", () => {
  it("should not withdraw less than 0", () => {
    const account = new Account("myAccount", 123456, 0);
    account.withdraw(-5);
    account.withdraw(-10);
    expect(account.balance).toBeFalsy();
  });
});
describe("User should be able to check their balance", () => {
  it("should show the balance", () => {
    const account = new Account("myAccount", 123456, 50);
    account.showBalance();
    expect(account.showBalance()).toBe(50);
  });
});
describe("User should be able to see their transaction history", () => {
  it("should show the transaction history", () => {
    const account = new Account("myAccount", 123456, 50);
    account.accountDetails();
    expect(account.accountDetails()).toEqual(account.transactions);
  });
});
