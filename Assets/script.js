//Create Default Varaibles//
var nowDate = dayjs().format('dddd, DD MMMM YYYY');
var nowHour = dayjs().format('h');
var testHour = dayjs().hour();
var nowMinute = dayjs().format('mm');
var now12 = dayjs().format('A');
var nowEvents = [];

$("#nowDate").text(nowHour + ":" + nowMinute + now12 + " " + nowDate);

//Make an array for each hour//

var timeblock = [
    {
        time: 8,
        showTime: "8AM",

    },
    {
        time: 9,
        showTime: "9AM",

    },
    {
        time: 10,
        showTime: "10AM",

    },
    {
        time: 11,
        showTime: "11AM",

    },
    {
        time: 12,
        showTime: "12PM",

    },
    {
        time: 13,
        showTime: "1PM",

    },
    {
        time: 14,
        showTime: "2PM",

    },
    {
        time: 15,
        showTime: "3PM",

    },
    {
        time: 16,
        showTime: "4PM",

    },
    {
        time: 17,
        showTime: "5PM",

    },
    {
        time: 18,
        showTime: "6PM",

    },
];

//Create timeblock rows//
for (i = 0; i < timeblock.length; i++) {
var row = $("<div>");
row.attr("timeblock")
$(".container").append(row);


//Create columns to hold the time//
for (p = 0; p < 3; p++) {
   if (p === 0) {
       var displayTime = $("<div>");
       displayTime.text(timeblock[i].showTime);
       displayTime.attr("class", "col-2 hour block");
   } 
   

   //Textarea column//
   else if (p === 1) {
       var plannerInput = $("<textarea>");
       
   } else {
       
   };
   
   //Change color code//


   //Save button column//

else if (p === 2) {
    var saveButton =$("<button>");
    saveButton.val(i);
    saveButton.attr("class", "col-2 saveButton");
}

};

$(row).append(displayTime, saveButton);

}

//Clear local storage//
function clearStorage(){
    localStorage.clear();
}

//Storing into local storage//
