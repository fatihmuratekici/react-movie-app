import React, {useState } from 'react'
import MovieList from '../components/MovieList'


function Home() {


  const [movie,setMovie]  = useState([]);
  const [sorgu,setSorgu]  = useState("");


    function onChange(e){
        setSorgu(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=15005c48f2625def09dacd3d0fc01762&query=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            if(data.results){
                setMovie(data.results)
            }
            else{
                setMovie([])
            }
        });
    }

  return (
    <>
        <section className='container mt-4'>
            <div className='position-relative'>
                <div>
                    <div className='position-absolute d-flex flex-column justify-content-center' id='top'>
                        <div className='text-white fs-1 fw-bold'>Hoş Geldiniz.</div> 
                        <span className='text-white fs-4 mb-3'>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</span>
                       <input type="text" className="form-control w-100" value={sorgu} onChange={onChange} placeholder="Film ve Dizi Ara" />
                        
                    </div>
                  
                </div>
                <img src="./images/banner.jpg" className='w-100 position-relative t-0'/>
            </div>
        </section>
        <section className='container d-flex flex-wrap gap-1'> 
            {
              movie.map(film => (

                <MovieList key={film.id} film={film}/>


                ))
            }
        </section>
   </>
  )
}

export default Home