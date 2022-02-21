import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { hotelData } from "../../data";

const GoogleMap = (props) => {
  let lat;
  let lng;
  if (props.locationName === "Sundharban") {
    lat = 21.9497;
    lng = 89.1833;
  }
  if (props.locationName === "Sajek Valley") {
    lat = 23.3847;
    lng = 92.2918;
  }
  if (props.locationName === "Cox's Bazar") {
    lat = 21.4285;
    lng = 91.9702;
  }
  if (props.locationName === "Sreemangal") {
    lat = 24.3065;
    lng = 91.7296;
  }

  const mapStyles = {
    width: "50%",
    height: "50%",
    border: "2px solid red",
   
  };

  return (
    <div>
      <Container>
        <Row>
          <div>
            {hotelData.map((elem) => {
              return (
                <div>
                  {elem.price}
                  {elem.title}
                  {elem.rating}
                </div>
              );
            })}
          </div>
          <div>
            <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: lat, lng: lng }}
            >
              <Marker position={{ lat: lat, lng: lng }} />
            </Map>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA9OU-Yxhjj-yocOCSzwPAOQpPnAOLJBj8",
})(GoogleMap);
