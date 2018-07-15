var myArray=[];
var people=["Salim", "Mohammed","Mustafa","Bader","Hitham","Saoud","Hammed","jakey","Ahmed"];
var key;

function start(){
    myArray=people.slice();
    myArray.sort(function(a,b){
    return 0.5 - Math.random()
    });
    console.log(myArray);
Build ();
findPerson();
}
function findPerson (){
    key=myArray[Math.floor(Math.random()*myArray.length)];
    message1("Find this name"+key);
}
function Build(){
   var html="<h1> Name Game </h1>";
   for(var x = 0;x<myArray.lengthp;x++){
      var str=myArray[x];
      var shuffeld = str.split("").sort(function(){
          return 0.5-Math.random()
      }).join("");
      html += '<div class="box"
      onmouseover="uText(this,\"+shuffeld+'\')"
      onmouseout= "uText(this,\'Hidden'+(x+1)+'\')"
      onclick="eEle(this,'\'"+str+'\')">Hidden'
      +(x=1)+'</div>';                         
 }    
   document.getElementById('output').innerHTML=html;
}
function uText(t,mes){
    t.innerHTML=mes;
}
function eEle(t,s){
    if(s==k){
        //correct
    }else{
        //wrong
    }
}
function message1(message){
    document.getElementById('message1').innerHTML=message;
}
function message2(message){
    document.getElementById(message2).innerHTML=message;
}







