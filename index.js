/**
 * Write a function in any language that multiplies any two integers 
 * without using the multiplication or division operators. 
 */
const mutiply = (base, timesToAdd)=>{
  let answer = 0 
    for(let i = 0; i < timesToAdd; i++){
        answer+= base
        // console.log( `answer at iteration ${i}: ${answer}  add  ${base}` )
    }
    return answer
}
let a = 9;
let b = 6;
mutiply(a,b);

let answer = mutiply(a,b);
console.log(answer)