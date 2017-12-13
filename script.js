function check(){
    var num = document.getElementById("field").value;
    prime(num,2);
}

function prime(n,m){
    if(m > n/2){
        document.getElementById("result").innerHTML = "Պարզ է";
        return ;
    }
    if(n%m == 0){
        document.getElementById("result").innerHTML = "Պարզ չէ";
        return ;
    }
    return prime(n,m+1);
}