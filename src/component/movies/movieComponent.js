import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PagenationComponent from "../pagination/paginationComponent";
import SearchComponent from "../search/searchComponent";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../../store/acction/counter";
import { setItems } from "../../store/acction/items";


export default function MovieComponent() {
  const [cardMovies, setCardMovies] = useState([]);
  const [filtered, setFilterd] = React.useState(cardMovies);
  

  const counterFromStore = useSelector((state) => state.cart.counter);
  const itemsFromStore = useSelector((state) => state.cart.items);
  const pageNumberFromStore =useSelector((state)=>state.cart.pageNumber);

  const dispatch = useDispatch();


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
        `https://api.themoviedb.org/3/movie/popular?api_key=edd8bc035ccbe239e18b997fcf30f067&page=${pageNumberFromStore}`
      )
      .then((res) => {
        setCardMovies(res.data.results);
        setFilterd(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [pageNumberFromStore]);


  useEffect(() => {
    console.log(itemsFromStore);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=edd8bc035ccbe239e18b997fcf30f067&page=${pageNumberFromStore}`
      )
      .then((res) => {
        setCardMovies(res.data.results);
        setFilterd(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);


  let [counter, setCounter2] = React.useState(counterFromStore);


  const containsObject=(obj, list)=> {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }
    return false;
}



  const cahngeisDone = (item, index) => {
    if (!containsObject(item,itemsFromStore)) {

      setCounter2((counter += 1));
      dispatch(setCounter(counter));

      dispatch(setItems([...itemsFromStore, item]));



    } else if (itemsFromStore.includes(item)) {
      setCounter2((counter -= 1));
      dispatch(setCounter(counter));

      let movies = itemsFromStore.filter((movie) => {
        return movie.id !== item.id;
      });

      dispatch(setItems(movies));
    }
  };

  const projectCard = filtered.map((item, index) => {
    return (
      <div key={index} className="mb-5 col-sm-12 col-md-4 col-lg-4">
        <div className="card position-relative h-100">
          <i
            onClick={() => {
              cahngeisDone(item, index);
            }}
            style={{
              right: 0,
              fontSize: "50px",
              color: "#FFD700",
              cursor: "pointer",
              marginRight: "3%",
            }}
            className={`bi bi-star${
              containsObject(item,itemsFromStore) ? "-fill" : ""
            } position-absolute`}
          ></i>

          <div
            className="position-absolute"
            style={{
              backgroundColor: "#ffee00",
              width: "20%",
              borderRadius: "25px",
              border: "2px solid red",
              marginTop: "20px",
              marginLeft: "3%",
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
      <div className="text-center mt-5">
        <SearchComponent searchTable={searchTable} />
      </div>
      <section id="portfolio">
        <div className="py-3  container">
          <div className="row text-center mw-100 mh-100">{projectCard}</div>
        </div>
      </section>
      <PagenationComponent/>
    </>
  );
}
