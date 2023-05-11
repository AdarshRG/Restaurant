import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';



function Restview() {

  const [restList,setRest]=useState([])

    //api creation
    const getData=async()=>{
    const result=await fetch('/restaurants.json')
    //asyncronous aanu so json convert to js
    result.json().then(data=>setRest(data.restaurants))
    }
    
  //object create for useparams
const params=useParams()
console.log(params.id);

//find single rstaurant dqata
const singleRest=restList.find(i=>i.id==params.id)
console.log(singleRest);

    //userEffects work 2or3 times so 2 arrays forms stop cheyan aanu []
    useEffect(()=>{
        getData()
    },[])




  return (
 <div>
  {
singleRest?
      (<Row>
      <Col lg={6} md={6}>
        <img className='w-80 container p-5' style={{height:"800px" }}
        src={singleRest.photograph}/>
        </Col>
        <Col lg={6} md={6} className='mt-5 fs-5'>

<ListGroup className='pe-5' >
  
         <ListGroup.Item><h1 className='text-warning'>{singleRest.name}</h1></ListGroup.Item>
        <ListGroup.Item>Address<strong>{singleRest.address}</strong></ListGroup.Item>
        <ListGroup.Item>Neighborhood<strong>{singleRest.neighborhood}</strong></ListGroup.Item>
        <ListGroup.Item>Cusine Type<strong>{singleRest.cuisine_type}</strong></ListGroup.Item>
        <ListGroup.Item>
          <Operatingtime workingTime={singleRest.operating_hours}/>
          <Review reviewList={singleRest.reviews}/>
        </ListGroup.Item>

</ListGroup>
           </Col>
  
      </Row>):""
}
 </div>
  )
}

export default Restview