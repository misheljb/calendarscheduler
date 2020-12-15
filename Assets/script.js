//Create Default Varaibles//
var nowDate = dayjs().format('dddd, DD MMMM YYYY');
var nowHour = dayjs().format('h');
var nowMinute = dayjs().format('mm');
var now12 = dayjs().format('A');
var nowEvents = [];

$("#nowDate").text(nowHour + ":" + nowMinute + now12 + " " + nowDate);

//Header date and time Display//
var newDate = new Date ();
var displaynewDate = $("<p>");
$(displaynewDate).text(val);
$("#jumbotron").append(displaynewDate);


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
row.attr("class", "timeblock")
$(".container").append(row);


//Create columns to hold the time//
for (p = 0; p < 3; p++) {
   if (p === 0) {
       var displayTime = $("<div>");
       displayTime.text(timeblock[i].showTime);
       displayTime.attr("id", timeblock[i].time);
       displayTime.attr("class", "hour");
   } 
   

   //Textarea column//
   else if (p === 1) {
       var plannerInput = $("<textarea>");
       plannerInput.attr("class", "textarea");
       console.log("plannerInput")
  
   //Change color code//
   var testHour =dayjs().hour();

   if (testHour === timeblock[i].time) {
       $(plannerInput).addClass("present");
   } 
   else if (testHour > timeblock[i].time) {
       $(plannerInput).addClass("past");

   } 
   else {
       $(plannerInput).addClass("future")
   }
   }


   //Save button column//

else if (p === 2) {
    var saveButton =$("<button>");
    saveButton.val(i);
    saveButton.attr("class", "col-2 saveButton");
}

};

$(row).append(displayTime, plannerInput, saveButton);

}

//build click event//
$(".saveButton").on("click", function () {
    var savingTime = $(this).siblings(".hour").attr("id");
    console.log(savingTime)
    var valTime = $(this).siblings("").attr("textarea");
    localStorage.setItem(savingTime, valTime)
});

//Clear local storage//
function clearStorage(){
    localStorage.clear();
}

//Storing into local storage//
function savingStorage(){
    console.log("savingStorage");
  
}