function palindrome() {
    var str=document.forms["form"]["input"].value;
    var numbers=document.forms["form"]["Number"].value;
    var test=0;
    if(numbers==1){
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            var results=str+":false";
            var tableRef = document.getElementById("List1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = results;
            return false;
        }
        else{
            test=1;
        }
    }
    if(test=1){
    var accepted=str+":true";
    var tableRef = document.getElementById("List1");
    (tableRef.insertRow(tableRef.rows.length)).innerHTML = accepted;
    return true;
    }

}

if(numbers==2){
var strReverse = str.split("").reverse().join("");

if (str === strReverse) {
    var results=str+":true";
    var tableRef = document.getElementById("List2");
    (tableRef.insertRow(tableRef.rows.length)).innerHTML = results;
} else {
    var results=str+":false";
    var tableRef = document.getElementById("List2");
    (tableRef.insertRow(tableRef.rows.length)).innerHTML = results;
}
}
        document.forms["form"]["input"].value ="" ;
        document.forms["form"]["Number"].value ="" ;
}

function clearList1(){
    var tableRef = document.getElementById("List1")
    tableRef.innerHTML = "";
}

function clearList2(){
    var tableRef = document.getElementById("List2")
    tableRef.innerHTML = "";
}