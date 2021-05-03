import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
// Create the state var/access
const [result, setResult] = useState([]);

// This asynchronous method call the REST API 
// and set the result in the state when data is retrieved
async function fetchData() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  setResult(data);
}

// This method is executed after the component is mounted
useEffect( () => {
  fetchData();
}, []);

  return (
    <div>
      <h1>Users List</h1>
      {result.map(user => (
        <div key={user.id}>
          User Id: {user.id}, 
          User Name: {user.name}
        </div>
      ))}
    </div>
  );
}

export default App;
