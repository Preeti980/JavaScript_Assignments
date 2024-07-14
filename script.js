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

//javaScript decision making

//fing Grades
function findGrade(M){
    let grade;
    switch(true){
        case  M<=10:
            grade='E'
            break;
            case M>=11 && M<=20:
                grade='D'
            break;
            case M>=21 && M<=30:
                grade='C'
            break;
            case M>=31 && M<=40:
                grade='B'
            break;
            case M>=41 && M<=50:
                grade='A'
            break;
            default:
                grade='Invalid Marks'
    }
    console.log(grade);
}
findGrade(1);
//Get Value
function getValue(character){
    const Lowerchar = character.toLowerCase();
    let value;
    switch(Lowerchar){
        case 'p':
            value = "PrepBytes";
            break;
            case 'Z':
                value = 'Zenith';
                break;
                case 'e':
                    value ='Expert Coder';
                    break;
                    case 'd':
                        value = 'Dta Structure';
                        break;
                        default:
                            value = 'Invalid Character'
    }
    return value;
}
console.log(getValue('E'));
//find the maxim_um out of three numbers
function Max_out_of_three(A,B,C){ 
    if(A === B&& A == C){
        return -1;
    }
    if(A>B&& A>C){
        return A;
    }else if(B>A && B>C){
        return B;
    }else{
        return C;
    }
}
console.log(Max_out_of_three(2,5,4))

//second smallest number
function findSecondSmallest(X,Y,Z){
   if(X>Y && X>Z){
     if(Y>Z){
       return Y;
     } else{
       return Z;
     } 
   }else if(Y>X&&Y>Z){
     if(X>Z){
       return X;
     } else{
       return Z;
     }
   }else{
     if(X>Y){
       return X;
     } else{
       return Y;
     }  }
   }

console.log(findSecondSmallest(2,9,23))
