function Clock () {
  // 1. Create a Date object.

  var date = new Date();
  this.hours = date.getHours();
  this.minutes = date.getMinutes();
  this.seconds = date.getSeconds();


  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  this.printTime();

  // 4. Schedule the tick at 1 second intervals.
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  // Use console.log to print it.
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  this.seconds += 1;
  if(this.seconds===60) {
    this.minutes += 1;
    this.seconds = 0;
  }
  if(this.minutes === 60){
    this.hours += 1;
    this.minutes = 0;
  }
  if(this.hours === 12){
    this.hours = 0;
  }
  
  // 2. Call printTime.
  this.printTime();

};

var clock = new Clock();
