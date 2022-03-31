import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PagenationComponent from "../pagination/paginationComponent";
import SearchComponent from "../search/searchComponent";

export default function MovieComponent() {
  const [cardMovies, setCardMovies] = useState([]);
  const [filtered, setFilterd] = React.useState(cardMovies);

const [pageNum,setPageNum]=React.useState(1);

  const changePage=(num)=>{
   console.log(num);
setPageNum(num);
  }

  const searchTable = (keyword) => {
    setFilterd(
      cardMovies.filter((item) => {
        return item.original_title.toLowerCase().includes(keyword);
      })
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=edd8bc035ccbe239e18b997fcf30f067&page=${pageNum}`
      )
      .then((res) => {
        setCardMovies(res.data.results);
        setFilterd(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [pageNum]);



  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=edd8bc035ccbe239e18b997fcf30f067&page=1`
      )
      .then((res) => {
        setCardMovies(res.data.results);
        setFilterd(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);




  const projectCard = filtered.map((item, id) => {
    return (
      <div key={id} className="mb-5 col-sm-12 col-md-4 col-lg-4">
        <div className="card position-relative h-100">
          <div
            className="position-absolute m-2"
            style={{
              backgroundColor: "#ffee00",
              width: "20%",
              borderRadius: "25px",
              border: "2px solid red",
            }}
          >
            {item.vote_average}
          </div>

          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{item.original_title}</h5>
            <p className="card-text">{`${item.overview.slice(0, 120)}..`}</p>
            <Link to={`/details/${item.id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        className="text-center mt-5"
      >
        <SearchComponent 
        
        searchTable={searchTable} />
      </div>
      <section id="portfolio">
        <div className="py-3  container">
          <div className="row text-center mw-100 mh-100">{projectCard}</div>
        </div>
      </section>
      <PagenationComponent
      changePage={changePage}
      
      />
    </>
  );
}
