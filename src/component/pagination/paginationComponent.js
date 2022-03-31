import React, { useEffect } from "react"
import { Link } from "react-router-dom";

export default function PagenationComponent({changePage}){
const [pageNum,setPageNum]=React.useState(1);
const [isActive,setIsActive]=React.useState(false);


const increseNum=()=>{
    setIsActive(true)
setPageNum(pageNum+1)
}

const decreseNum=()=>{
    if(pageNum > 1){
        // setIsActive(true) 
        setPageNum(pageNum-1)
    }else if(pageNum === 1){
        setIsActive(false) 
    }
    }

const changeNum=(num)=>{
setPageNum(num);
}

useEffect(()=>{
    changePage(pageNum)
},[pageNum])

    return(
 <nav aria-label="Page navigation example " >
  <ul className="pagination justify-content-center w-100 m-3">
    <li className={`page-item ${isActive?'':'disabled'}`}>
      <Link className="page-link" onClick={decreseNum} to="/" >Previous</Link>
    </li>
    <li className={`page-item ${pageNum === 1?'active':''}`}><Link  onClick={()=>{changeNum(1)} } className="page-link" to="/">1</Link></li>
    <li className={`page-item ${pageNum === 2?'active':''}`}><Link onClick={()=>changeNum(2) } className="page-link" to="/">2</Link></li>
    <li className={`page-item ${pageNum === 3?'active':''}`}><Link onClick={()=>changeNum(3)} className="page-link" to="/">3</Link></li>
    <li className="page-item">
      <Link className="page-link" onClick={increseNum} to="/">Next</Link>
    </li>
  </ul>
</nav>
    )
}