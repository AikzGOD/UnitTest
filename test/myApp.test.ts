import {expect} from 'chai';
import {Calculator} from "../src/myApp"

describe('Calculator' , () => {

after(() => {
    describe('#calculate' , () =>{
        it('should do the operation I want and return the value' , () =>{
            expect(Calculator.calculate([2,4],'sum')).to.equal(6);
        });
        it('should return the value of the average in a array of numbers', () =>{
            expect(Calculator.calculate([2,4],'average')).to.equal(3);
        });
    });
});

    describe('#sum()', () => {
        it('should return the sum of an array of numbers' , () => {
            expect(Calculator.sum([2,4])).to.equal(6);
        });
    });

    describe('#average', () =>{
        it('shold return the average of an array of numbers' , () =>{
            expect(Calculator.average([2,4])).to.equal(3);
        });
    });

});