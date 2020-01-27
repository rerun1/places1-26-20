 function DestinationsList(destination) {
    this.destinations = [];
    this.currentId = 0;
}
DestinationsList.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}
DestinationsList.prototype.assignId = function (destination) {
  this.currentId += 1;
  return this.currentId;
}
DestinationsList.prototype.findPlace = function(id) {
  for (var i = 0; i < this.destinations.length; i ++) {
    if (this.destinations[i]) {
      if (this.destinations[i].id == id) {
        return this.destinations[i];
      }
    }
  };
  return false;
}
function Destination (place, activity, season) {
  this.place = place;
  this.activity = activity;
  this.season = season;
}
Destination.prototype.placeInfo = function() {
  return "When in " + this.place + ", I like to " + this.activity + " during this time of year: " + this.season;
}
// User logic
var destinationsList = new DestinationsList();

var resetForm = function(){
  var inputPlace = $("input#destinationPlace").val("");
  var inputActivity = $("input#destinationActivity").val("");
  var inputSeason = $("input#destinationSeason").val("");
}
function displayDestinations(destinationsListToDisplay) {
  $("div#show-instructions").show();
  var placeListDisplay = $("ul#placeList");
  var htmlForPlaceList = "";
  destinationsListToDisplay.destinations.forEach(function(destination){
    htmlForPlaceList += "<li id="+destination.id+">"+destination.place+"</li>";
  });
  placeListDisplay.html(htmlForPlaceList);
}
function showDetails(id) {
  var destination = destinationsList.findPlace(id);
  $("div#show-details").show();
  $("span.place").html(destination.place);
  $("span.activity").html(destination.activity);
  $("span.season").html(destination.season);
  var buttons = $("div#buttons");
  buttons.empty();
  buttons.append("<button class='hideDetails'>X</button>")
}

function attachPlaceListeners(){
  $("ul#placeList").on("click", "li", function(){
    showDetails(this.id);
  });
  $("div#buttons").on("click", ".hideDetails", function(){
    $("div#show-details").hide();
  });
}


$(document).ready(function(){
    attachPlaceListeners();
    $("form#addDestination").submit(function(event){
      event.preventDefault();
      var inputPlace = $("input#destinationPlace").val();
      var inputActivity = $("input#destinationActivity").val();
      var inputSeason = $("input#destinationSeason").val();

      var destination = new Destination(inputPlace,inputActivity,inputSeason);

      destinationsList.addDestination(destination);

      console.log(destinationsList);

      displayDestinations(destinationsList);


      resetForm();


    });

});
