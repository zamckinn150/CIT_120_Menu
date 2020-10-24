var contentEle = document.body.querySelector(".content");
var epic = 0;
makehome();

function makehome() {
  contentEle.innerHTML = "";
  var headEle = document.createElement("h1");
  headEle.innerHTML = "Home Page";
  contentEle.appendChild(headEle);
}

function makeabout() {
  contentEle.innerHTML = "";
  var headEle = document.createElement("h1");
  headEle.innerHTML = "About Page";
  contentEle.appendChild(headEle);
}

function ineract(push) {
  contentEle.innerHTML = "";
  if (push) {
    epic = epic + 1;
    document.body.querySelector(".epic").innerHTML = epic;
  }
function radical(){
  contentEle.innerHTML = "";
  document.body.querySelector(".epic").innerHTML = epic;
}
}

document.body.querySelector(".homebutt").addEventListener("click", function () {
  makehome();
});
document.body.querySelector(".aboutbutt").addEventListener("click", function () {
    makeabout();
  });
document.body.querySelector(".interactbutt").addEventListener("click", function () {
 ineract("push");
  });