import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [ people, setPeople ] = React.useState(data);
  const removeItem = (id) => {
    let newArray = people.filter((person) => person.id !== id);
    setPeople(newArray)
  }

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person)=>{
        const {id, name}= person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove item</button>
          </div>
        ) 
      })}
      <button className='btn' onClick={()=>setPeople([])}>Clear All Items</button>
    </>
  )
};

export default UseStateArray;
