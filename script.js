var database = [{
    username : "prashant sikarwar",
    password : "coolcool" 
},
{
    username : "sally",
    password : "123" 
},
{
    username : "hero",
    password : "777" 
}];

var newsFeed = [
    {
        username : "bobby",
        timeline : "so tired of all the learning"
    },
    { 
        username : "sally",
        timeline : "javascript is soooo cool!"
    },
    { 
        username : "despo",
        timeline : "javascript is preeeeettyy cool!"
    } 

];

function isUserValid(username, password){
    for(var i =0;i < database.length;i++){
        if (database[i].username === username &&
            database[i].password === password){
                return true
                } 
    }
    return false

}

 function signIn(username, password){
        if (isUserValid(username, password)){
                console.log(newsFeed);
            } else {
                alert("Sorry, wrong username and password!");
            }
    }



var userNamePrompt = prompt("what's your name?");
var passwordPrompt = prompt("what's your password?")

signIn(userNamePrompt,passwordPrompt);