import React, { useEffect, useState } from 'react'
import "./Home.css"
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from './pagination';
// import { useContext } from 'react';
// import { Statecontext } from './redux/context/Context';
import { useNavigate } from 'react-router-dom';
// import { useNavigate,Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import { useSelector } from 'react-redux';

const Home = () => {
  // const navigate=useNavigate()
  // const {state,dispatch}=useContext(Statecontext)
  const [data,setdata]=useState([])
  const [currentpage,setcurrentpage]=useState(1)
  const [postperpage,setpostperpage]=useState(10)
  const navigate=useNavigate()
  
// const sakthi=()=>{
//   navigate("/detail")
// }

const details=()=>{
  navigate({
    pathname:"/detail",
  })
}

// const click=(a)=>{
// // located.replace=a

// // console.log(a);
// window.open(a)
// console.log("sakthi")
// }

    useEffect(()=>{
      fetch("https://api.spacexdata.com/v3/launches")
      .then((item)=>item.json())
      .then((item)=>setdata(item))

     
    },[])

    console.log(data);
 

    const lastpostindex=currentpage*postperpage
    const firstpostindex=lastpostindex-postperpage 

    const currentpost=data.slice(firstpostindex,lastpostindex)

  return (
    <div className='container'>
       <h1>Home</h1><button onClick={sakthi()}>click</button>
      <div className='overall'>
     
         {currentpost?.map((item,index)=>{
      return(
        
        <div key={index} className={"image"}>
        <Card sx={{ minWidth: 275}}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
           {item.mission_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {/* {item.de  */}
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="body2">
          <img sx={{ minWidth: 275}} src={item.links.mission_patch}/>
          </Typography>
        </CardContent>
        <CardActions className='btn'>
        <Button onClick={details()} variant="contained">More Details</Button>
        <a href={item.links.wikipedia}><Button className={"btn"} variant="contained">wikipedia</Button></a>
        
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
     
      </div>
   

        // <div key={index}>
        //   <h1>{item.mission_name}</h1>
        //   <div className='image'>
        //   <img  src={item.links.mission_patch}/>
        //   </div>
        // </div>
      )
      
    })}
    </div>
    <Pagination totalpost={data.length}
     postperpage={postperpage} 
    setcurrentpage={setcurrentpage}
    currentpage={currentpage}
    />
   </div>
    

 
  )
}

export default Home