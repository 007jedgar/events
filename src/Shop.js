import React, { useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Shop() {
    useEffect(() => {
      fetchItems()
    }, [])

    const [items, setItems ]  = useState([])

  const fetchItems = async () => {
    const data = await fetch("http://dummy.restapiexample.com/api/v1/employees")
    const items = await data.json()
    console.log(items.data)
    setItems(items.data)
  }

  return (
    <div className="App">
        <h1>Shop</h1>

        {items.map(item => (
          <h3 key={item.id}>
            <Link to={`/shop/${item.id}`}> {item.employee_name}</Link>
          </h3>
        ))}
      </div>
  );
}

export default Shop;