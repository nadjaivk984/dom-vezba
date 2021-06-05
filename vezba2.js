document.addEventListener("DOMContentLoaded",function(){
    var first=(document.querySelectorAll("div ul")[1]).firstElementChild.className="active";
    console.log(first);
    selectActive();

});
  function selectActive(){
    var el=(document.querySelectorAll("div ul")[1]).firstElementChild.classList.remove("active");
   // console.log(el);
    var el2=(document.querySelectorAll("div ul")[0]).firstElementChild;
    //console.log(el2);
    var el3=(document.querySelectorAll("div ul")[0]).firstElementChild.className="active2";
    console.log(el3);
  }