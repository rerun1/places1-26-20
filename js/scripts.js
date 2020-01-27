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
  var placeListDisplay = $("ul#placeList");
  var htmlForPlaceList = "";
  destinationsListToDisplay.destinations.forEach(function(destination){
    htmlForPlaceList += "<li id="+destination.id+">"+destination.place+"</li>";
  });
  placeListDisplay.html(htmlForPlaceList);
}

// function displayDestinationDetails(destinationsListToDisplay){
//   var destinationsListDisplay = $("ul#destinationsList");
//   var htmlForDestinationDetail = "";
//   destinationsListToDisplay.destinations.forEach(function(destination) {
//       var destintationDetailsSentence = destination.placeInfo(destination);
//       htmlForDestinationDetail += "<li id=" + destination.id + ">" + destintationDetailsSentence + "</li>";
//     });
//     destinationsListDisplay.html(htmlForDestinationDetail);
// }


$(document).ready(function(){

  $("li").click(function(){
    alert("clicked");
  });

  
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
