function displayvalue(num){
    let inputbox=document.getElementById("result")
    inputbox.value+=num
}
function evaluateExpression(){
    let cur_value=result.value;
    let res=eval(cur_value)
    result.value=res;
}
function clearBox(){
    result.value="";
}
function removeElement(){
    input.value=result.slice(0,-1)
}