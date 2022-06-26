import WatchedCard from "../components/WatchedCard"
import React, { useContext } from 'react'
import { GlobalContext } from "../context/SiteContext";

function İzlenenler() {

  const {state} = useContext(GlobalContext);
  
  return (
    <div className='container mt-4'>
    <div className='d-flex justify-content-between'>
      <h3>İzleme Listesi</h3>
      <div className="count-pill">{state.watched.length} Film</div>
     
    </div>
 
    <div className="movie-grid">
    {
        state.watched.map(item => (
          <WatchedCard key={item.id} item={item}/>
        ))
      }
    
    </div>
   
  </div>
  )
}

export default İzlenenler