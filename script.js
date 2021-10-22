function LoveFunction(){
    var FName= document.getElementById("first-name").value;
    var SName= document.getElementById("second-name").value;
    var corrcet= /^[A-Za-z]+$/;

    if(FName=="" && SName==""){
        document.getElementById("error-message").innerHTML="***Please Enter Name First***";
        return false
    }if(FName==""){
        document.getElementById("error-message").innerHTML="***Please Enter Name First***";
        return false
    }if(SName==""){
        document.getElementById("error-message").innerHTML="***Please Enter Name First***";
        return false
    }
    else{
        var LoveValue = Math.random() * 100;
        LoveValue = Math.floor(LoveValue);
        document.getElementById("result").innerHTML = `Percentage of love between ${FName} & ${SName} is ${LoveValue}%`;
        return false
    }
    
}