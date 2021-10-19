module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
        this.principal = principal;
        this.interest = interest;
        this.term = term;
        this.period = period;
    }
    monthlyInterestRate() {
        return (this.interest / 100) / this.period;
    }

    numberOfPayments() {
        return this.term * this.period;
    }

    compoundedInterestRate(monthlyInterestRate, numberOfPayments) {
        return Math.pow((1 + monthlyInterestRate), numberOfPayments);
    }

    interestQuotient(monthlyInterestRate, compoundedInterestRate, numberOfPayments) {
        return (monthlyInterestRate * compoundedInterestRate) / ((Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1);
    }
 
    monthlyPayment() {
        const monthlyInterestRate = this.monthlyInterestRate();
        const numberOfPayments = this.numberOfPayments();
        const compoundedInterestRate = this.compoundedInterestRate(monthlyInterestRate, numberOfPayments);
        const interestQuotient = this.interestQuotient(monthlyInterestRate, compoundedInterestRate, numberOfPayments);
        //const monthlyInterestRate = (this.interest / 100) / this.period
        //const numberOfPayments = this.term * this.period
        //const compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)
        //const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / ( (Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1)
        const monthlyPayment = this.principal * interestQuotient
        return monthlyPayment.toFixed(2)
    }
};