async function fQuote() {

    var api = "https://api.quotable.io/random";
    var Quotesize = document.getElementById("Length").value;

    var min = 0;   
    var max = 0;
    if (Quotesize==1){  
        max = 50
    }
    else if (Quotesize==2){  
         min = 50;
         max = 250;
        }
    else 
        min = 250;

    api = api + "?minLength=" + min + "&maxLength=" + max;
  
    
    var response = await fetch(api);
  
    document.getElementById("Q").innerHTML = "";   
    document.getElementById("A").innerHTML = "";   
  
    var JData = await response.json();  
    
    var FinalQuote = JSON.stringify(JData.content);
    FinalQuote = FinalQuote.substring(0,FinalQuote.length);
    document.getElementById("Q").innerHTML = FinalQuote;


    var FinalAuthor = JSON.stringify(JData.author);
    FinalAuthor = FinalAuthor.substring(0,FinalAuthor.length);
    document.getElementById("A").innerHTML = FinalAuthor;
  
    return true;
  }