var categoryTag = document.getElementById("category-div");
var dropmenuTag = document.getElementById("dropdown-menu");
var dropdownHeadingTag = document.getElementById("dropdown-heading");

function dropdownVal(strList){
    dropdownHeadingTag.innerHTML = strList;
    dropmenuTag.style.display = "none";
}

categoryTag.addEventListener('click', function(){
    dropmenuTag.style.display = "block";
});