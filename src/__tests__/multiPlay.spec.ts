import { product } from "../utils/common"


const testCases = [
    { num1: 1, num2: 1, expected: 1 },
    { num1: 0, num2: 1, expected: 0 },
    { num1: 0, num2: 0, expected: 0 },
    { num1: 0, num2: -3, expected: -0} ,
    { num1: 11, num2: -1, expected: -11 },
    { num1: -1, num2: -1, expected: 1 }
  ];

testCases.forEach(({num1,num2,expected})=>{

    test(`should calculate product of  ${num1} and ${num2}`,()=>{
        const result=product(num1,num2);
        expect(result).toBe(expected);
    })
})