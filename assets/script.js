var categoryTag = document.getElementById("category-div");
var dropmenuTag = document.getElementById("dropdown-menu");
var dropdownHeadingTag = document.getElementById("dropdown-heading");

dropdownHeadingTag.addEventListener('click', function(){
    dropmenuTag.style.display = "block";
});

function listFunction(listVar){
    dropdownHeadingTag.innerHTML = listVar;
    dropmenuTag.style.display = "none";
};