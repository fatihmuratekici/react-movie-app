import React, { useContext } from 'react'
import Card from '../components/Card';
import { GlobalContext } from '../context/SiteContext';

function İzlemeListesi() {

  const {state} = useContext(GlobalContext);

  return (
    <div className='container mt-4'>
    <div className='d-flex justify-content-between'>
      <h3>İzleme Listesi</h3>
      <div className="count-pill">{state.watch.length} Film</div>
     
    </div>
 
    <div className="movie-grid">
    {
        state.watch.map(item => (
          <Card key={item.id} item={item}/>
        ))
      }
    
    </div>
   
  </div>
  )
}

export default İzlemeListesi