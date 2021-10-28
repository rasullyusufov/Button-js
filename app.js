
const btn1_ctn = document.querySelector(".btn1_container");
const one = document.querySelector(".one");
btn1_ctn.addEventListener("click", () => {
  one.classList.toggle("inactive2");
  two.classList.remove("inactive2")
  five.classList.add("inactive2")
  three.classList.remove("inactive2");
});


const btn2_ctn = document.querySelector(".btn2_container");
const two = document.querySelector(".two");
btn2_ctn.addEventListener("click", () => {
    two.classList.toggle("inactive2");
    three.classList.remove("inactive2");
    one.classList.remove("inactive2");
    five.classList.add("inactive")
    four.classList.add("inactive2")
  
});

//btn 3
const btn3_ctn = document.querySelector(".btn3_container");
const three = document.querySelector(".three");
btn3_ctn.addEventListener("click", () => {
    three.classList.toggle("inactive2")
    one.classList.add("inactive2");
    two.classList.remove("inactive2");
    four.classList.remove('inacrive2')
});

//btn 4
const btn4_ctn = document.querySelector(".btn4_container");
const four = document.querySelector(".four");
btn4_ctn.addEventListener("click", () => {
   four.classList.toggle("inactive2")
    one.classList.add("inactive2");
    two.classList.toggle("inactive2");
  three.classList.remove("inactive2");
  five.classList.remove("inactive2")
});
//btn 5
const btn5_ctn = document.querySelector(".btn5_container");
const five = document.querySelector(".five");
btn5_ctn.addEventListener("click", () => {
    five.classList.toggle("inactive2")
    one.classList.remove("inactive2");
    two.classList.remove("inactive2");
  three.classList.toggle("inactive2");
});