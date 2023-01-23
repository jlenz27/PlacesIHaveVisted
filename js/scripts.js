// function placesBeen(){
//     this.locations = {};
//     this.timeOfYear = {};
//     this.landmark = {};
//     this.notes = {};
// }

// placesBeen.prototype.addLocation = function(location){
//     location.id = this.assignId();
//     this.location[location.id] = location;

// }

function PlacesBeen(locations, timeOfYear, landmark, notes) {
  this.locations = locations;
  this.timeOfYear = timeOfYear;
  this.landmark = landmark;
  this.notes = notes;
}