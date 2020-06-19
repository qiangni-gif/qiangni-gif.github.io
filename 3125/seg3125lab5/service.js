

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validatecardnumber(inputtxt)
{
  var cardno = /^([0-9]{12}(?:[0-9]{4})?)$/;
  if(cardno.test(inputtxt))
        {
      return true;
        }
      else
        {
        
        return false;
        }
}

function validateCSV(inputtxt)
{
  var cardno = /^[0-9]{3}$/;
  if(cardno.test(inputtxt))
        {
      return true;
        }
      else
        {
        
        return false;
        }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var nickUND = ["2020-06-24","2020-06-29","2020-07-07","2020-07-18","2020-08-18","2020-09-18"]
var JulesUND = ["2020-06-25","2020-06-30","2020-07-21","2020-07-10","2020-07-03","2020-08-16","2020-10-21"]
const setDateFormat = "yy-mm-dd";

function disableDates(date){
    if (date.getDay() == 0)
        return [false];
    else if (document.getElementById("worker").value == "nick"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ nickUND.indexOf(string) == -1 ]

    }else if(document.getElementById("worker").value == "Jules"){
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [ JulesUND.indexOf(string) == -1 ]
    }
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#pay").on("click", function(){
        let fname = document.getElementById("name").value;
        let phone = validatePhone("phone");
        let worker = document.getElementById("worker").value;
        let cardNumber = validatecardnumber(document.getElementById("cardNumber").value);
        let CSV = validateCSV(document.getElementById("CSV").value);
        let dateBook = document.getElementById("dateInput").value;
        let timeBook = document.getElementById("dateInput").value;
        if (!phone){
            alert("Wrong format for phone");
            $("#phone").val("(XXX)-XXX-XXXX");
            $("#phone").addClass("error");
        }
        else if(!cardNumber) {
            alert("Not a valid Visa credit card number!");
            $("#cardNumber").val("XXXXXXXXXXXXXXXX");
            $("#cardNumber").removeClass("error");
        }
        else if(!CSV){
            alert("Not a valid CSV number!");
            $("#CSV").val("(XXX)");
            $("#CSV").removeClass("error");
        }
        else if ((fname != ""&& /^[a-zA-Z]+$/.test(fname))&& phone && (worker != null) && cardNumber && CSV && (dateBook != "") && (timeBook != "")){
            $("#phone").removeClass("error");
            $("#cardNumber").removeClass("error");
            $("#CSV").removeClass("error");
        }
        else{
            alert("Please fill all the form!");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            
            dateFormat: setDateFormat,
            // no calendar before today
            minDate: new Date(),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#cardNumber").on("mouseenter", function(){
        $("#cardNumber").addClass("showInput");
    });

    $("#cardNumber").on("mouseleave", function(){
        $("#cardNumber").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#cardNumber").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});