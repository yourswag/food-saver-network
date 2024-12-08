

const MapInitializer = () => {
  const mapRef = useRef(null);
  const startLocationRef = useRef(null);
  const endLocationRef = useRef(null);
  const suggestRouteButtonRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mapRef.current) {
        const L = require('leaflet');
        require('leaflet-routing-machine');
        require('leaflet-control-geocoder');

        mapRef.current = L.map('map').setView([22.5744, 88.3629], 12); // Center on a location

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(mapRef.current);

        // Initialize routing control
        const routingControl = L.Routing.control({
          waypoints: [],
          routeWhileDragging: true,
          geocoder: L.Control.Geocoder.nominatim() // Use Nominatim geocoder
        }).addTo(mapRef.current);

        const startInput = startLocationRef.current;
        const endInput = endLocationRef.current;
        const suggestRouteButton = suggestRouteButtonRef.current;

        if (suggestRouteButton) {
          suggestRouteButton.addEventListener('click', function () {
            const start = startInput.value;
            const end = endInput.value;

            if (!start || !end) {
              alert("Please enter both starting and ending locations.");
              return;
            }

            routingControl.setWaypoints([]);

            L.Control.Geocoder.nominatim().geocode(start, function (results) {
              if (results.length > 0) {
                const startLatLng = results[0].center;
                routingControl.spliceWaypoints(0, 1, startLatLng);

                L.Control.Geocoder.nominatim().geocode(end, function (results) {
                  if (results.length > 0) {
                    const endLatLng = results[0].center;
                    routingControl.spliceWaypoints(1, 1, endLatLng);
                  } else {
                    alert("End location not found.");
                  }
                });
              } else {
                alert("Starting location not found.");
              }
            });
          });
        }
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet/dist/leaflet.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css"
        />

        {/* Internal CSS */}
        <style>
          {`
            #map {
              min-height: 720px; /* Ensures the map container fills at least 720px */
              width: 100%; /* Make map container fill full width */
            }
            #controls {
              position: absolute;
              top: 80px;
              left: 10px;
              z-index: 1000;
              background: white;
              padding: 15px;
              border-radius: 5px;
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
              width: 250px; /* Set a fixed width for the controls */
            }
            input[type="text"] {
              width: 90%; /* Make input fields take full width */
              padding: 8px;
              margin-bottom: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            button {
              width: 100%; /* Make button take full width */
              padding: 10px;
              background-color: #4CAF50;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
            button:hover {
              background-color: #45a049;
            }
          `}
        </style>
      </Head>
      <div>
        <div id="controls">
          <input
            type="text"
            id="startLocation"
            placeholder="Enter starting location"
            ref={startLocationRef}
          />
          <input
            type="text"
            id="endLocation"
            placeholder="Enter ending location"
            ref={endLocationRef}
          />
          <button
            id="suggestRoute"
            ref={suggestRouteButtonRef}
          >
            Suggest Route
          </button>
        </div>
        <div id="map" style={{ minHeight: '720px', width: '100%' }}></div>
      </div>
    </>
  );
};

export default MapInitializer;