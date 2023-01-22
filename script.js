let output = document.getElementById('calc')

function display(num){
    output.value += num
}
function cl(){
    output.value = '';
}
function Delete(){
    output.value = output.value.slice(0,-1)//لما تعمل ديليت هيمسح اخر رقم
}
function calc(){
    try{
        output.value = eval(output.value)
    }
    catch(err){
        output.value = 'error';
    }
}























