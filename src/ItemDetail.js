import React, { useState, useEffect} from 'react';
import './App.css';

function Shop({match}) {
  useEffect(() => {
    fetchItem();
  }, [])

    const [item, setItem ] = useState({})

  const fetchItem = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)

    const item = await data.json()
    console.log(item)
    setItem(item)
  }

  return (
    <div className="App">
        <h1>{item.name}</h1>

      

      </div>  
  );
}

export default Shop;