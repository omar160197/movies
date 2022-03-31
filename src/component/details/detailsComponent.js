import axios from "axios"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function DetailsComponent(){   
   const [movie,setMovie]=React.useState({});
   const params =useParams()
   useEffect((res)=>{
   axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=edd8bc035ccbe239e18b997fcf30f067`)
   .then((res)=>setMovie(res.data)) 
   .catch(err=>console.log(err))
})

    return(
      <section>
      <div class="container my-5">
  <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 class=" fw-bold lh-1">{movie.original_title}</h1>
      <p style={{fontSize:"30px"}}>
       {movie.overview}
      </p>
    </div>
    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img class="rounded-lg-3" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" height="600" width="420"/>
    </div>
  </div>
</div>
  </section>
    )  
  }