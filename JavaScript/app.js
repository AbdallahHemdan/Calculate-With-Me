function Insert(Num){
    document.form.textview.value += Num ; 
}

function Equal(){
    let Exp = document.form.textview.value ; 
    
    // Any Press Of Undefined Button Considered as Null ('C' ==> '=') 
    // So We Need To Check That The Expresion  Not Equal Null 
    if(Exp){
    document.form.textview.value = eval(Exp) ;  
    }
}

function Clear(){
document.form.textview.value = "";
}
function CE(){
    let Exp = document.form.textview.value ;
    let Length = Exp.length ; 
    document.form.textview.value = Exp.substring(0,Length-1);
}
