// js increment counter
// variables declear
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement")
let number = document.getElementById("number")
let restart = document.getElementById("restart")

// counter increment arrow  function
let counter = 0;
let update = (value)=>{
     counter += value;
    number.innerText = counter;
    if(counter === 10){
        increment.setAttribute("disabled", true);
       
    }
    else if( counter <=0){
        decrement.setAttribute("disabled", true);
    }
    else{
        increment.removeAttribute("disabled", false);
        decrement.removeAttribute("disabled", false);
       
    }

}

// restart arrow function

let restarts = (restart)=>{
    counter *= restart;
    number.innerText = counter;
    decrement.setAttribute("disabled", true);
    increment.removeAttribute("disabled", false);
    
}

// click event handelar
increment.addEventListener("click", function (){
    update(1)

})

decrement.addEventListener("click", function (){
    update(-1);

})

restart.addEventListener("click", function (){
    restarts(0);


})
// js increement counter end

// js css start

let body = document.getElementsByTagName("body");
let counterWarpper = document.getElementsByClassName("counter_warpper")
let rest = document.getElementsByClassName("rest")
let btn = document.querySelectorAll(".btn");
let text = document.getElementsByTagName("p");
let value = document.getElementById("number");






body[0].style.backgroundColor="#28ee15";
value.style= `
padding: 0 30px;
`
counterWarpper[0].style = `
width: fit-content; 
margin: 0 auto;

`;
rest[0].style = `
width:fit-content;
margin: 0 auto;
`;
let btnArr = Array.from(btn);
let btnStyle = btnArr.map((btnItem) =>{
    btnItem.style = `
            background-color: blanchedalmond;
            border: transparent;
            border-radius: 20px;
            width: 80px;
            height: 49px;
            margin-top:15px;
            cursor:pointer;

            `;
}
)



let textArr = Array.from(text);

let textItem = textArr.map((item)=>{
    item.style = `
    font-size: 16px;
    font-weight: 700;
    color: red;
    `;
}

);

