import axios from "axios";
import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';


 class FruitItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  addToFav=(item)=>{
      const {user}=this.props.auth0;
      const obj={
          userEmail:user.email,
          name:item.name,
          image:item.image,
          price:item.price,


      }

      axios.post(`https://exam-301-final.herokuapp.com/addToFav`,obj).then(result=>{
          console.log(result);
      })
      .catch(err=>{
          console.log(`error`);
      })

    



  }

  render() {
    return (
      <div>
          <Row>
        {this.props.staticFruits.map((item) => (

         <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                {item.price}
                </Card.Text>
                <Button onClick={()=>this.addToFav(item)}  variant="primary">Add</Button>
              </Card.Body>
            </Card>
            </Col>
        ))}
       </Row>
      </div>
    );
  }
}

export default withAuth0(FruitItem);
