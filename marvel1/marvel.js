function character(){
let urlQueryParameters = new URLSearchParams(window.location.search), queryParameterName = urlQueryParameters.get("name"), name=document.getElementById("name").Value;

if(queryParameterName !==null && queryParameterName !==""){
    document.getElementById("name").value = queryParameterName;

    connection();
}

else if(name !== null && name !== ""){
    document.getElementById("connectionform").addEventListener("submit",connection);
}

else{
    document.getElementById("characterSection").innerHTML='<h2 id="characterMainTitle">Enter search term avove...</h2>;'
}
}

function connection(){
document.getElementById("characterspinnersection").innerHTML="";
document.getElementById("comicsspinnersection").innerHTML="";

xhr.open('GET', './connections/name-search.html',true)




xhr.send()
}