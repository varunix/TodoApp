var categoryTag = document.getElementById("category-div");
var dropmenuTag = document.getElementById("dropdown-menu");
var dropdownHeadingTag = document.getElementById("dropdown-heading");
var flag = false;
var checkArr = new Array();

dropdownHeadingTag.addEventListener('click', function(){
    dropmenuTag.style.display = "block";
});

function listFunction(listVar){
    dropdownHeadingTag.innerHTML = listVar;
    dropmenuTag.style.display = "none";
};

$('#datepicker').datepicker({
    dateFormat: 'dd/mm/yy',
});

var checkBoxTag = document.getElementById("checkBoxId");
var taskListTag = document.getElementById("task-list");
var deleteTag = document.getElementById("delete-task");

function onCheck(id){
    checkArr.push(id.toString());
}

function deleteTask(){
    // var arrStr = (JSON.stringify(checkArr));
    location.href = "http://localhost:"+deleteTag.value.toString()+"/delete-task?array="+checkArr;
}