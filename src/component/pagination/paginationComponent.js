import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPageNumber } from "../../store/acction/pageNumber";

export default function PagenationComponent(){

const pageNumberFromStore =useSelector((state)=>state.cart.pageNumber)
const [pageNum,setPageNum]=React.useState(pageNumberFromStore);
const dispatch = useDispatch();

const increseNum=()=>{

setPageNum(pageNum+1)
dispatch(setPageNumber(pageNum))
}

const decreseNum=()=>{
        setPageNum(pageNum-1)
        dispatch(setPageNumber(pageNum))
    
    }

const changeNum=(num)=>{
setPageNum(num);
dispatch(setPageNumber(num))
}

useEffect(()=>{
    dispatch(setPageNumber(pageNum))
},[pageNum])

    return(
 <nav aria-label="Page navigation example " >
  <ul className="pagination justify-content-center w-100 m-3">
    <li className={`page-item ${pageNum>1?'':'disabled'}`}>
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