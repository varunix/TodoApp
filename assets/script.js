var categoryTag = document.getElementById("category-div");
var dropmenuTag = document.getElementById("dropdown-menu");
var dropdownHeadingTag = document.getElementById("dropdown-heading");
var flag = false;

dropdownHeadingTag.addEventListener('click', function(){
    dropmenuTag.style.display = "block";
});

function listFunction(listVar){
    dropdownHeadingTag.innerHTML = listVar;
    dropmenuTag.style.display = "none";
};

$(function(){
    $("datepicker").datepicker();
    dateFormat: "dd-mm-yyyy";
});