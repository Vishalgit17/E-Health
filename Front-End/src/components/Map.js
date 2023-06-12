// import React, { useState, useEffect } from 'react';

// const MapPage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     // Simulating login and fetching user data
//     setTimeout(() => {
//       setIsLoggedIn(true);
//       setUserName('John Doe');
//       // Fetch user location using navigator.geolocation
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude
//           });
//         },
//         (error) => {
//           console.error('Error retrieving user location:', error);
//         }
//       );
//     }, 2000); // Simulating API call delay
//   }, []);

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <h2>Welcome, {userName}!</h2>
//           <div style={{ width: '100%', height: '400px' }}>
//             {userLocation && (
//               <iframe
//                 src={`https://www.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}&output=embed`}
//                 width="100%"
//                 height="100%"
//                 frameBorder="0"
//                 title="User Location"
//               ></iframe>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </div>
//   );
// };

// export default MapPage;


import React, { useState, useEffect } from 'react';

const MapPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Simulating login and fetching user data
    setTimeout(() => {
      setIsLoggedIn(true);
      setUserName('John Doe');
      // Fetch user location using navigator.geolocation
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error retrieving user location:', error);
        }
      );
    }, 2000); // Simulating API call delay
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userName}!</h2>
          <div style={{ width: '400px', height: '300px' }}>
            {userLocation && (
              <iframe
                src={`https://www.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}&output=embed`}
                width="100%"
                height="100%"
                frameBorder="0"
                title="User Location"
              ></iframe>
            )}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default MapPage;
