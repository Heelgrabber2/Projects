function additions(){
    var theNewWord = document.forms["form"]["newWord"].value;
    var theNewNumber = document.forms["form"]["newNumber"].value;
    alert(theNewNumber);
    alert(theNewWord);
    if(theNewWord==""){
        alert("please enter a word to check");
        return false;
    }

    else if((theNewNumber !=1)&&(theNewNumber !=2)){
        alert("please enter a 1 or 2 for the list.");
        document.forms["form"]["newNumber"].value ="";
        return false;
    }

    else{
        if(theNewNumber==1){
            var tableRef = document.getElementById("List1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
            
        }
        else{
            var tableRef = document.getElementById("List2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
        }
        document.forms["form"]["newWord"].value ="" ;
        document.forms["form"]["newNumber"].value ="" ; 
        return true; 
     }
}

function clearList1(){
    var tableRef = document.getElementById("List1")
    tableRef.innerHTML = "";
}

function clearList2(){
    var tableRef = document.getElementById("List2")
    tableRef.innerHTML = "";
}