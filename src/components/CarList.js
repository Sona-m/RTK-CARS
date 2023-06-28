import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { removeCar } from '../redux/store';
import { Button } from '@mui/material';

const CarList = () => {
  const {cars , name} = useSelector(({form ,cars : { cars , searchTerm}}) => {
    const filteredCars = cars.filter((car) => 
     car.name.toLowerCase().includes(searchTerm.toLowerCase())
     );
     return {
      cars : filteredCars,
      name : form.name
     }
  });
  const dispatch = useDispatch();

  const handleCarDelete = (car) =>{
     dispatch(removeCar(car.id))
  }
  
  const renderedCars = cars.map((car)=>{
    // DECIDE IF THIS CAR SHOULD BE BOLD
    const bold = name &&  car.name.toLowerCase().includes(name.toLowerCase())
    return(
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p className='note'>{car.name} - ${car.cost}</p>
        <Button 
        onClick={() => handleCarDelete(car)}
        variant = 'contained'
        color = 'error'
        >Delete</Button>
      </div>
    )  
  })
  return (
    <div className='car-list'>
      {renderedCars}
      <hr/>
    </div>
  )
}

export default CarList