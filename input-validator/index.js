
let  array= [
    password_length,
    special_char,
    conatain_2_uppercase,
    check_consectutive
]

let message = [ 
    "Length must me greater that 10",
    "Must contain atleast 2 special chartacters !@#$%^&",
    "Must contain atleast 2 Uppercase letters",
    "No two consecutive characters must be same"
]


function validate () {
    let  user_input = document.getElementById("fname").value;
    let output = '';

    let user_rules = document.getElementsByClassName("rules");

    for (let index = 0; index < array.length; index++) {
        let element = user_rules[index];
        // console.log(element);
        if(element.checked) {
            let fun = array[index];
            
            let retval = fun(user_input);

            if(!retval) {
                output += `<div class="output-row"> ${message[index]} + </div>`
            }

        }
        
    }
    document.getElementById("output").innerHTML = output;
}

function password_length(x) {
    return (x.length > 10 ? 1 : 0);
}
function special_char (x) {
    let special_str = "!@#$%^&";
    let count  = 0;
    for(var i = 0; i < x.length ; i++) {
        if(special_str.includes(x[i])) {
            count ++ ;
        }
        if(count > 1) {
            return true;
        }
    }
    return false;
}

function conatain_2_uppercase (x) {
    let count  = 0;
    for(var i = 0; i < x.length ; i++) {
        if( x[i] <= "Z" && x[i] >= "A") {
            count ++ ;
        }
        if(count > 1) {
            return true;
        }
    }
    return false;

}
function check_consectutive (x) {

    for(var i = 0 ; i < x.length-1 ; i ++ ) {
        
        if (x[i] == x[i+1]) {
            return false;
        }
    }
    true;
}