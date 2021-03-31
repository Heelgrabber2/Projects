function palindrome() {
    var str=document.forms["myinput"]["input"].value;
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            var denied="it is not a palindrome";
    document.getElementById("results").style.backgroundColor = "red";
    document.getElementById('results').innerHTML = denied;
            return false;
        }
    }
    document.getElementById("results").style.backgroundColor = "green";
    var accepted="it is a palindrome";
    document.getElementById('results').innerHTML = accepted;
}