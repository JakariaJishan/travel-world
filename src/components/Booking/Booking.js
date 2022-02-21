import React from 'react';
import { useParams } from 'react-router-dom';
import { locationData } from '../../data';
import GoogleMap from '../GoogleMap/GoogleMap';
const Booking = () => {
      let {locationDataId} = useParams();
      const detailsData = locationData[locationDataId - 1];
    
      return (
            <div>
                  <GoogleMap locationName={detailsData.name}/>
            </div>
      );
};
export default Booking;