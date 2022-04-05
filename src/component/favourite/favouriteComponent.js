import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { setCounter } from "../../store/acction/counter";
import {  setItems } from "../../store/acction/items";


export default function FavComponent(){
 const itemsFromStore=useSelector((state)=>state.cart.items)
const counterFromStore = useSelector((state)=>state.cart.counter) 
// const oneItemFromStore=useSelector((state)=>state.cart.item)
const dispatch=useDispatch();
  

let[counter,setCounter2]=React.useState(counterFromStore)

let[itemsArray]=React.useState(itemsFromStore)

 const cahngeisDone =(item,index)=>{
    //   item.flag=false;
      setCounter2(counter-=1);
      dispatch(setCounter(counter))
      
      for (var i = 0; i < itemsFromStore.length; i++) {
        var obj = itemsFromStore[i];
        if (obj.id == item.id) {
            itemsArray.splice(i, 1);
            
            dispatch(setItems(itemsArray))
        }
      }

      
    
     
    console.log(itemsFromStore);
    // console.log(counter);
   }

    const projectCard = itemsFromStore.map((item, index) => {
        return (
          <div key={index} className="mb-5 col-sm-12 col-md-4 col-lg-4">
            <div className="card position-relative h-100">
              <i
              onClick={()=>{
              cahngeisDone(item,index)          
              }} 
              style={{
                right:0,
                fontSize:"40px",
                color:"red",
                cursor: "pointer",
                marginRight:"3%"
              }}
              className={`bi bi-trash3-fill position-absolute`}></i>
          
              <div
                className="position-absolute"
                style={{
                  backgroundColor: "#ffee00",
                  width: "20%",
                  borderRadius: "25px",
                  border: "2px solid red",
                  marginTop:"20px",
                  marginLeft:"3%"
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
    <div style={{marginTop:"7%"}} className="container">
        <section id="portfolio">
        <div className="py-3  container">
          <div className="row text-center mw-100 mh-100">{projectCard}</div>
        </div>
      </section>
        </div>
    )
}
