import React from 'react';
import '../LoadingSpiner/Loader.css';

function Loader() {
  
  return (
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
}

export default Loader;