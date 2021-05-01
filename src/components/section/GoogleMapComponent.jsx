import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const GoogleMapComponent = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 20.935925, lng: -89.601857 }}
    >
      <Marker
        position={{ lat: 20.9359257, lng: -89.601857 }}
      />
    </GoogleMap>
  ));
  export default GoogleMapComponent