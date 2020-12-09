const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map((journey) => {
      return journey.startLocation;
    })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const vehicles = this.journeys.map((journey) => {
    return journey.transport});
   
    let uniqueModes = [];
    
    vehicles.forEach((vehicle) => {
      if (uniqueModes.includes(vehicle) === false) {
        uniqueModes.push(vehicle);
      }
    })
      return uniqueModes
    
  }




module.exports = Traveller;
