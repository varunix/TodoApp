var categoryTag = document.getElementById("category-div");
var dropmenuTag = document.getElementById("dropdown-menu");
var dropdownHeadingTag = document.getElementById("dropdown-heading");
var checkArr = new Array();

//for showing dropdown list on clicking

function listFunction(listVar){
    dropdownHeadingTag.innerHTML = listVar;
    dropmenuTag.style.display = "none";
};

// var date = $('#datepicker').datepicker({"dateFormat": "dd/mm/yy"});
$("#datepicker").click(function(){
    var format = moment($("#datepicker").val()).format("DD/MM/YYYY");
    document.getElementById("#datepicker").innerHTML = format;
});

var checkBoxTag = document.getElementById("checkBoxId");
var taskListTag = document.getElementById("task-list");
var deleteTag = document.getElementById("delete-task");
var addTag = document.getElementById("add-task");
var categoryTextTag = document.getElementById("category-text");

function onCheck(id){
    checkArr.push(id.toString());
}

function deleteTask(){
    // var arrStr = (JSON.stringify(checkArr));
    if(checkArr.length == 0){
        alert('Please check atleast one item from list to delete!');
    }
    location.href = "http://localhost:"+deleteTag.value.toString()+"/delete-task?array="+checkArr;
}

