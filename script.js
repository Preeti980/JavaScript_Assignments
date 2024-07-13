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