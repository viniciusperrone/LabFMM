import React from 'react';


const AppProvider: React.FC = ( { children }) => {
  return(
    <div>
      { children }
    </div>
  )
}

export default AppProvider;