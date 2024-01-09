// Import stylesheets
// import './style.css';

// Write Javascript code!

const submitbutton=document.querySelector("#submit");
submitbutton.addEventListener("click",function(){
function calculatebmi(){
  const myweight=document.querySelector("#weight").value;
  const myheight=document.querySelector("#height").value;
  if(myweight && myheight){
    const result=myweight/(myheight*myheight)
    return result;
  }
  else{
    console.log("Please enter both height and weight");
    return null;
  }
}

const sub=document.querySelector(".subchild1");
const bmiactualresult=calculatebmi();
if(bmiactualresult!==null){
  sub.textContent=`Your bmi is ${bmiactualresult}`;
  sub.style.color="white";
}

})
