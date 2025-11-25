let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

 let string = "";
 let arr = Array.from(buttons);
 arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        let value = e.target.innerHTML;
        let prev = string[string.length-1];
        if(value == "="){
            string = eval(string);
            input.value =string;
        }
        else if( value == "AC"){
            string = ""
            input.value = string;
        }
        else if(value == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            if(isConsecutiveOperator(prev , value)){
                return;
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    })
 })
 function isConsecutiveOperator(curr, next){
    const operator = ['+','-','*','/','.','%'];
    return operator.includes(curr) && operator.includes(next);
 }