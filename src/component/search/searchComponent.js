import React from "react";

export default function SearchComponent({searchTable}){

const [keyword,setKeyword]=React.useState('');

const textChanged=(e)=>{
  // console.log(e.target.value);
setKeyword(e.target.value)
searchTable(keyword)
}


  return(
    <input className="m-3" style={{width:'40%' ,height:'40px',border:"solid 3px blue"}} type='text'  value={keyword} onChange={textChanged}  placeholder="Search"/>
  )  
}
