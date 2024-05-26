import React, { useState } from 'react';
import PropertyForm from './components/PropertyForm';
import PropertyDetails from './components/PropertyDetails';

function App() {
  const [propertyData, setPropertyData] = useState(null);

  return (
    <div className="App">
      <h1>Property History Lookup</h1>
      <PropertyForm onPropertyData={setPropertyData} />
      {propertyData && <PropertyDetails propertyData={propertyData} />}
    </div>
  );
}

export default App;
