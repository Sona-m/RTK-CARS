import React from 'react';
import { useDispatch  , useSelector} from 'react-redux';
import { changeName ,changeCost , addCar } from '../redux/store';
import { Button } from '@mui/material';

const CarForm = () => {

  const dispatch = useDispatch();

  const handleNameChange = (event)=>{
   dispatch(changeName(event.target.value));
  }

  const handleCostChange = (event)=>{
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
   }

   const handleSubmit = (event) =>{
      event.preventDefault();
      dispatch(addCar({ name , cost}))
   }
   
  const {name , cost} = useSelector((state) => {
    return {
      name : state.form.name,
      cost : state.form.cost,
    };
  })

 
  return (
    <div className='car-form'>
      <h4 className='subtitle'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
        <div className='field'>
        <label >Name</label>
        <input 
         value = {name}
         onChange={handleNameChange}
         type='text'/>
         </div>
         <div className='field'>
        <label>Cost</label>
        <input 
         value = {cost || ''}
         onChange={handleCostChange}
         type='number'/>
         </div>
         <div className='field'>
        <Button variant='contained' color='secondary' type='submit'>Submit</Button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm