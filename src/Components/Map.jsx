import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 37.7749, lng: -122.4194 }} // San Francisco
      mapContainerStyle={{ width: '100%', height: '400px' }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </GoogleMap>
  );
}

export default MyMap;