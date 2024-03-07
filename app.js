let input = document.getElementById("inputBar");

let buttons = document.querySelectorAll("button");
let Result = "";
let btnArr = Array.from(buttons);
btnArr.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            Result = eval(Result);
            input.value = Result;
        }

        else if(e.target.innerHTML == 'AC'){
            Result = "";
            input.value = Result;
        }

        else if(e.target.innerHTML == 'DEL'){
            Result = Result.slice(0, Result.length-1);
            input.value = Result;
        }
        else{
            Result += e.target.innerHTML;
            input.value = Result;
        }
    })
})