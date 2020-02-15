function validation(){

    var eventType = document.forms["eventForm"]["events"].value;
    var eventDate = document.forms["eventForm"]["eventDate"].value;
    var eventTitle = document.forms["eventForm"]["eventTitle"].value;

    if (eventType == "blank"){
        alert("Please select the event type.");
        return false;
    }

    if(eventDate == ""){
        alert("Please choose a valid date. (Leave blank to the second date option if this is a one day event.");
        return false;
    }

    if(eventTitle == ""){
        alert("Please enter a valid title.");
        return false;
    }

    else{
        alert("Event added successfully.");
    }

}

function success(){
    alert("Event added successfully.");
}

function currentDate(){
    document.body.style.opacity='1';

    n = new Date();
    year = n.getFullYear();
    month = n.getMonth() + 1;
    day = n.getDate();
    document.getElementById("dateToday").value = month + "/" + day + "/" + year;
}
