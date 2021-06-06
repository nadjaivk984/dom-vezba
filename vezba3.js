document.addEventListener("DOMContentLoaded",function(){
  
taketext();
textArg("Passed Text");
buildingDrop(["Jan","Feb","March","April","May","Jun","July","Avgust"],document.getElementById("month"));
var d=document.querySelector("div");
//console.log(d);
buildingDrop1(["Jan","Feb","March","April","May","Jun","July","Avgust"],d);
var lastDiv=document.getElementsByTagName("div")[1];
//console.log(lastDiv);
buildingDrop1(["Jan","Feb","March","April","May","Jun","July","Avgust"],lastDiv);
validaion();
var el=document.querySelectorAll("input");
console.log(el);

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


function buildingDrop(a,b){
   
    
  for(var i=0;i<a.length;i++){
      
      var option=document.createElement("option");
      var text=document.createTextNode(a[i]);
      option.appendChild(text);
     
     b.appendChild(option);
  }

 
 
}  

function buildingDrop1(a,b){
    
   
        var select=document.createElement("select");
        for(var i=0;i<a.length;i++){
        var option=document.createElement("option");
        var text=document.createTextNode(a[i]);
       
       
        option.appendChild(text);

    
     select.appendChild(option);
       b.appendChild(select);

       

    }   
   
  }  
  function validaion(){
      var el=document.querySelectorAll("input");
     for(var i=0;i<el.length;i++){
       var el2=el[i];
      if(el2.hasAttribute("required"))  {
       el2.style.border="red 1px solid";

      }
      }
  }