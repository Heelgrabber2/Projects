async function getBaconipsum() {
   
    var apiString = "https://baconipsum.com/api/";
    var mid = document.getElementById("choice").value;
    var theNewParagraphs = document.getElementById("Paragraphs").value;
    apiString = apiString + "?type=" + mid + "&paras=" + theNewParagraphs;
    var response = await fetch(apiString);
  
   
    document.getElementById("rawdata").innerHTML = "";   
    document.getElementById("formatteddata").innerHTML = "";   
    document.getElementById("encrypteddata").innerHTML = "";   
  
    var jsonData = await response.json();  
    
    document.getElementById("rawdata").innerHTML = JSON.stringify(jsonData);
   
    for (var para in jsonData) {   
        document.getElementById("formatteddata").innerHTML += "<p>" + jsonData[para] + "</p>";
      }
  
   
    var newJsonData;
    
    newJsonData = cipher(jsonData);   

  
    for (var para in newJsonData) {   
      document.getElementById("encrypteddata").innerHTML += "<p>" + newJsonData[para] + "</p>";
    }
  
    return true;
  }
  
  function cipher (tempJSON) {
         var Char;      
         var CharCode;  
         var arrayJSON=[];   
  
      
      for (var para in tempJSON) {     
        var cipherstring = "";              
        for (var chara in tempJSON[para]){          
          Char = tempJSON[para][chara];         
          CharCode = Char.charCodeAt(0);      
          if ((CharCode >= 65)&&(CharCode <= 77))           
            Char = String.fromCharCode(CharCode+7)             
          else if ((CharCode >= 78)&&(CharCode <= 90))      
            Char = String.fromCharCode(CharCode-7)           
          else if ((CharCode >= 97)&&(CharCode <= 109))    
            Char = String.fromCharCode(CharCode+7)         
          else if ((CharCode >= 110)&&(CharCode <= 122))    
            Char = String.fromCharCode(CharCode-7);            
          cipherstring += Char;          
        }  
  
      arrayJSON.push(cipherstring);   
  
      }  
  
    return arrayJSON;   
  }