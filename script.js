//Add two numbers
function add(a,b){
    return a+b;
}
console.log(add(2,5));
//find conditions are obeyed or not
function is_valid(A,B){
    if(A<10 && B<10 && A>B ){
        return true;
    }else{
        return false;
    }
}
console.log(is_valid(5,3))

//check the conditions
function Check(A,B){
if(A %10 ==0 && B % 10 == 0 ||A%10==0 || B%10==0){
    return true;
}else{
    return false;
}
}
console.log(Check(12,20));
//find First digit of a 4 digit number
function First_Digit(N){
    return Math.floor(N/1000);
}
console.log(First_Digit(4567))
//find the last digit of a 4 digit number
function Last_Digit(N){
    return N%10;
}
console.log(Last_Digit(4567))
//find the remainder
function Find_the_remainder(A,B){
    return B%A
}
console.log(Find_the_remainder(2,9))
//multiply two numbers
function Multiply_two_number(A,B){
    return A*B
}
console.log(Multiply_two_number(2,5))
//marks calculator - sum and average of marks

function Sum(A,B,C){
    return A+B+C;
}
function Average(A,B,C){
    return (A+B+C)/3;
}
console.log(Sum(50, 20,100) + " "+Average(50,20,100) )
