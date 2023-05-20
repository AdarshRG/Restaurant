import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useSelector } from 'react-redux';




function Restview() {

    
  //object create for useparams
const params=useParams()
console.log(params.id);

const {restList}=useSelector(state=>state.reducer1)

//find single rstaurant dqata
const singleRest=restList.find(i=>i.id==params.id)
console.log(singleRest);

useEffect(()=>{

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