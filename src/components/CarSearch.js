import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { changeTerm } from '../redux/store';
const CarSearch = () => {

  const dispatch = useDispatch();
  const handleSearchTermChange = (event)=>{
     dispatch(changeTerm(event.target.value))
  }

  const searchTerm = useSelector(state => state.cars.searchTerm)
  return (
    <div className='list-header'>
      <h3 className='title'>My Cars</h3>
      <div className='search field'>
        <label className='label'>Search</label>
        <input
         className='input'
         value={searchTerm}
         onChange={handleSearchTermChange}/>
      </div>
    </div>
  )
}

export default CarSearch