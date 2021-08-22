const editableinput=document.getElementById("typing");
const counter=document.getElementsByClassName("counter")[0];
const button =document.getElementsByClassName("tweet_btn")[0];
editableinput.onkeypress=(e)=>{
    let element = e.target.value;
    console.log(element);
    checkInput(element);
}
function checkInput(element){
    let maxlength=250;
    let cuurentlength = element.length;
    let textTag = element.innerHTML;

    if(cuurentlength <= 0){

        counter.style.display="none";
        button.classList.remove("active")

    }else{
        counter.style.display="block";
        button.classList.add("active");


    }
    counter.innerText= maxlength - cuurentlength

}