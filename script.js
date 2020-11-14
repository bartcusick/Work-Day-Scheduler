// var timeBlock = document.querySelector("#hour");
// // var block = document.querySelector("#status");
// // var timeBlock = $('#timeBlock');
// console.log(timeBlock);

$(document).ready(function () {
    var now = moment();
    // displays date in format: Thursday, October 8th
    $('#currentDay').text(now.format('dddd, MMMM Do'));

    //Array for business hours that for loop can use
    var blockArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    //Arr = which button was clicked
    var buttonArr = [
        { inputId: '9', btnId: 'saveBtn9' },
        { inputId: '10', btnId: 'saveBtn10' },
        { inputId: '11', btnId: 'saveBtn11' },
        { inputId: '12', btnId: 'saveBtn12' },
        { inputId: '1', btnId: 'saveBtn1' },
        { inputId: '2', btnId: 'saveBtn2' },
        { inputId: '3', btnId: 'saveBtn3' },
        { inputId: '4', btnId: 'saveBtn4' },
        { inputId: '5', btnId: 'saveBtn5' }
    ];
    //for loop that changes the color of blocks color based off of the time
    for (var i = 0; i < blockArr.length; i++) {
        //Keep items displayed on page
        var idStr = blockArr[i].toString();
        var idP = '#' + idStr;
        var hourText = JSON.parse(localStorage.getItem(idP));
        $(idP).val(hourText);

        if (blockArr[i] < moment().hour()) {
            //turn blocks in the past to grey  
            $(idP).addClass('past');
        }
        else if (blockArr[i] === moment().hour()) {
            //turn current block red
            $(idP).addClass('present')
        }
        else if (blockArr[i] > moment().hour()) {
            //turn blocks in the future green
            $(idP).addClass('future')
        }
    };
});
$(".saveBtn").on("click", function () {
    var btnID = (this.id).replace('saveBtn', '');
    var textBlock = document.getElementById(btnID);
    var textSave = textBlock.value;
    localStorage.setItem("#" + btnID, JSON.stringify(textSave));
});
$(".clearBtn").on("click", function () { 
    console.log("This is clicking");
    localStorage.clear();
    location.reload();
});

function displayItems() {
    let l, i;
    // Display items 
    document.getElementById("show").innerHTML = "";
    for (i = 0; i < localStorage.length; i++) {
        res = localStorage.key(i);
        document.getElementById("show").innerHTML += res;
    }
};
