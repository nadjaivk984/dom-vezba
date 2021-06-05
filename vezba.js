// document.addEventListener("DOMContentLoaded", function () {
//     console.log(document.querySelectorAll("body ul li"));
//     var new1 = document.querySelectorAll("body ul")[1].classList.add("color");
//     var boja = document.querySelectorAll("body ul li");
//     change(boja);
//     var new2 = document.querySelectorAll("body ul")[2];
//     changeLi(new2);
//   });
  
//   function change(ul) {
//     for (var i = 0; i < ul.length; i++) {
//       var element = ul[i];
//       element.className = "drugaBoja";
//     }
//   }
  
//   function changeLi(ul) {
//     var a = ul.childNodes.length;
//     for (var i = 0; i < a; i++) {
//       var element = ul.childNodes[i];
//       element.className = "trecaBoja";
//       var text = element.innerHTML;
//       if (text) {
//         element.innerHTML = text.toUpperCase();
//       }
//     }
//   }
  

document.addEventListener("DOMContentLoaded",function(){
      
  //console.log(document.querySelectorAll("body ul")[1]);
  var first=(document.querySelectorAll("body ul")[1]).className="color1";
  console.log(first);
   var second=(document.querySelectorAll("ul li"));
 //console.log(second);
var third=(document.querySelectorAll("body ul"))[2];
  selectAll(second);
  thirdList(third);



});

function selectAll(second){
  var second=(document.querySelectorAll("ul li"));
   for(var i=0;i<second.length;i++){
     var el=second[i];
      el.className="color2";
     
   

}
}

function thirdList(third){
  var third=(document.querySelectorAll("body ul"))[2];
 // console.log(third);
 for (var i=0;i<third.childNodes.length;i++){
      var el2=third.childNodes[i];
      el2.className="color3";
    
     
   
    
}
};