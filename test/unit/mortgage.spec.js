const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let calculator = null; 

    beforeEach(() => { 
        calculator = new Mortgage(2000, 3, 15, 30); 
    });

    it('should have an monthlyPayment function', () => {
		expect(calculator.monthlyPayment).to.exist;
	});

    // principal, interest, term, period
    it('should calculate monthly interest rate correctly - (3 / 100) / 30', () => {
        const monthlyInterestRate = .001; 
		expect(calculator.monthlyInterestRate()).to.equal(monthlyInterestRate);
	});

    it('should calculate number of payments correctly - 15 * 30', () => {
        const numberOfPayments = 450; 
		expect(calculator.numberOfPayments()).to.equal(numberOfPayments);
	});

    it('should calculate compound interest rate correctly - (1 + .001)^450)', () => {
        const compoundedInterestRate = 1.001 ** 450;
        const monthlyInterestRate = .001; 
        const numberOfPayments = 450;
		expect(calculator.compoundedInterestRate(monthlyInterestRate, numberOfPayments)).to.equal(compoundedInterestRate);
	});

    it('should calculate interest quotient correctly - (.001 * (1.001 ** 450)) / ((((1 + .001) ** 450)) - 1)', () => {
        const compoundedInterestRate = 1.001 ** 450;
        const numberOfPayments = 450;
        const monthlyInterestRate = .001; 
        const interestQuotient =  (monthlyInterestRate * compoundedInterestRate) / ((((1 + monthlyInterestRate) ** numberOfPayments)) - 1);
		expect(calculator.interestQuotient(monthlyInterestRate, compoundedInterestRate, numberOfPayments)).to.equal(interestQuotient);
        
	});

    it('should calculate interest quotient correctly - (.001 * (1.001 ** 450)) / ((((1 + .001) ** 450)) - 1)', () => {
        const compoundedInterestRate = 1.001 ** 450;
        const numberOfPayments = 450;
        const monthlyInterestRate = .001; 
        const interestQuotient =  (monthlyInterestRate * compoundedInterestRate) / ((((1 + monthlyInterestRate) ** numberOfPayments)) - 1);
        const monthlyPayment = (2000 * interestQuotient).toFixed(2);
		expect(calculator.monthlyPayment()).to.equal(monthlyPayment);
        
	});
    



});