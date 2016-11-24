function createGmap(dataFromServer) {
  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {},
      internal: {id: 'brewery_map'}
    },
    function() {
      markers = handler.addMarkers(dataFromServer);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    }
  );
};

function loadAndCreateGmap() {
  // Only load map data if we have a map on the page
  if ($('#brewery_map').length > 0) {
    // Access the data-brewery-id attribute on the map element
    // This variable is used by the id set in the view.
    var breweryId =
     $('#brewery_map').attr('data-brewery-id');

    $.ajax({
      dataType: 'json',
      url: '/breweries/' + breweryId + '/map_location',
      method: 'GET',
      success: function(dataFromServer) {
        createGmap(dataFromServer);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Getting map data failed: " + errorThrown);
      }
    });
  }
};

function loadAndCreateAllMap() {
  // Only load map data if we have a map on the page
  if ($('#breweries_map').length > 0) {
    // Access the data-brewery-id attribute on the map element

    $.ajax({
      dataType: 'json',
      url: '/breweries/breweries_map',
      method: 'GET',
      success: function(dataFromServer) {
        createGmap(dataFromServer);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert("Getting map data failed: " + errorThrown);
      }
    });
  }
};

function callingAllFunctions() {
   loadAndCreateGmap();
   loadAndCreateAllMap();
};

// Create the map when the page loads the first time
$(document).on('ready', callingAllFunctions);
// Create the map when the contents is loaded using turbolinks
// To be 'turbolinks:load' in Rails 4
$(document).on('turbolinks:load', callingAllFunctions);
