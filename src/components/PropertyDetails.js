import React from 'react';

const PropertyDetails = ({ propertyData }) => {
  return (
    <div>
      <h2>Property Details</h2>
      <p><strong>Address:</strong> {propertyData.address}</p>
      <p><strong>City:</strong> {propertyData.city}</p>
      <p><strong>Zip Code:</strong> {propertyData.zipCode}</p>
      <p><strong>Previous Sales:</strong> {propertyData.previousSales}</p>
      <p><strong>Price:</strong> {propertyData.price}</p>
      <p><strong>Value:</strong> {propertyData.value}</p>
      <p><strong>Owner:</strong> {propertyData.owner}</p>
    </div>
  );
};

export default PropertyDetails;