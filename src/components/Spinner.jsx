import React from 'react';
import splash from "./../images/fullyshipsplash.gif"

function Spinner() {
  return (
     <div class="fp-container">
        <image src={splash} className="fp-loader" alt="loading" />
     </div>
  );
};

export default Spinner;