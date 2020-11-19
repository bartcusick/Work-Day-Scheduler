$(document).ready(function () {
    var now = moment();
    // displays date in format: Thursday, October 8th
    $('#currentDay').text(now.format('dddd, MMMM Do'));

    //Array for business hours that for loop can use
    var blockArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];

    //Arr = which button was clicked
    var buttonArr = [
        { inputId: '9', btnId: 'btn9' },
        { inputId: '10', btnId: 'btn10' },
        { inputId: '11', btnId: 'btn11' },
        { inputId: '12', btnId: 'btn12' },
        { inputId: '1', btnId: 'btn1' },
        { inputId: '2', btnId: 'btn2' },
        { inputId: '3', btnId: 'btn3' },
        { inputId: '4', btnId: 'btn4' },
        { inputId: '5', btnId: 'btn5' }
    ];
    //for loop that changes the color of blocks color based off of the time
    for (var i = 0; i < blockArr.length; i++) {
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
$(".btn").on("click", function () {
    var btnID = (this.id).replace('btn', '');
    var textBlock = document.getElementById(btnID);
    var textSave = textBlock.value;
    localStorage.setItem("#" + btnID, JSON.stringify(textSave));
});
$(".clear").on("click", function () { 
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
