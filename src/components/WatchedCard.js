import React, { useContext } from 'react'
import { GlobalContext } from '../context/SiteContext';

function WatchedCard({item}) {
  const {removeToWatched} = useContext(GlobalContext);
  return (
    <div className="movie-card">
        <div className="overlay"></div>
        <div className="vote-average">{item.vote_average}</div>
        <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/>
        <div className="inner-card-controls">
         
        <button className="ctrl-btn" onClick={() => removeToWatched(item.id)}><i className="fa-fw fa fa-times"></i></button>
        </div>
    </div>
  )
}

export default WatchedCard