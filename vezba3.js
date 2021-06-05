document.addEventListener("DOMContentLoaded",function(){
  
taketext();
textArg("Passed Text");

});

function taketext(){
    var text=document.querySelector("ul").firstElementChild;
    console.log(text);
   alert(text.textContent);
   
}

function textArg(a){
    var text1=document.querySelector("ul").lastElementChild;
    text1.textContent=a;


}