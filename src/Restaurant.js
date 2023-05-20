import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';
import { getRestaurants } from './actions/restAction';
import { useDispatch, useSelector } from 'react-redux';




function Restaurant() {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getRestaurants)
    },[])
const {restList}=useSelector(state=>state.reducer1)
console.log(restList);

  return (
    <Row className='ms-5 mb-2 p-2' >
        <h1>Restaurant List</h1>
        {
            restList.map(rest=>(
               <Col className='p-1' lg={4} md={6}>
                  <Link id="l1" to={`/Restview/${rest.id}`}>

                        <Card id='c1' className='mt-5 ms-5' style={{ width: '18rem',height:'555px' }}>
                        <Card.Img variant="top" style={{height:'300px'}} src={rest.photograph} />
                        <Card.Body>
                          <Card.Title>{rest.name}</Card.Title>
                          <Card.Text>
                          {rest.address}
                          </Card.Text>
                        </Card.Body>
                      </Card>

                  </Link>
               </Col>
            ))
        }
    </Row>
  )
}

export default Restaurant