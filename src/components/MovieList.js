
import { useContext } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { GlobalContext } from "../context/SiteContext";



function MovieList({film}) {
   const {addToWatch,state,addToWatched} = useContext(GlobalContext);
   const disable = state.watch.find(e => e.id === film.id)
   const disabled = state.watched.find(e => e.id === film.id)
  return (
   
    <div className="card mt-3 w-100">
        <div className="row">
            <div className="col-md-2">
                {
                    film.backdrop_path ? <img src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} className="img-fluid rounded-start" />
                    : <img src="./images/bos.jpg" className="img-fluid rounded-start w-100" />
                }
             
            </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">Film İsmi : {film.title}</h5>
                    <p className="card-text">IMB Puanı : {film.vote_average}</p>
                    <p className="card-text"><small className="text-muted">Çıkış Tarihi : {film.release_date}</small></p>
                </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
                <button className='btn btn-dark' disabled={disable} onClick={() => addToWatch(film)}><FaEye/><br/>İzleme Listesine Ekle</button>
                <button className='btn btn-success' disabled={disabled} onClick={() => addToWatched(film)}><FaEyeSlash/><br/>İzlenenlere Listesine Ekle</button>
            </div>
        </div>
    </div>
  )
}

export default MovieList