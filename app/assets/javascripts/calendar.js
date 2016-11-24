$(document).ready(function() {
   $("#calendar").fullCalendar({
     defaultView: "month",
     height: 500,
     slotMinutes: 15,
     events: "/breweries/get_events",
     timeFormat: "LT",
     dragOpacity: "0.5",
     eventClick: function(event) {
      if (event.url) {
          window.open(event.url);
          return false;
      }
    }
  });
});
