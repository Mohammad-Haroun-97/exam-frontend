import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button, Row, Col } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

export class FavFruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favItems: [],

      showFlag: false,
      id: "",
      elementItem: "",
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;

    const obj = {
      userEmail: user.email,
    };

    axios
      .get(`https://exam-301-final.herokuapp.com/getFromDataBase`, { params: obj })
      .then((result) => {
        this.setState({
          favItems: result.data,
        });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(`error`);
      });
  };

  showModal = (item) => {
    this.setState({
      showFlag: true,
      elementItem: item,
      id: item._id,
    });
  };

  handleClose = () => {
    this.setState({
      showFlag: false,
    });
  };

 
 
 
 
  update = (event) => {


    event.preventDefault();

    const { user } = this.props.auth0;

    const obj = {
      userEmail: user.email,
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
    };

    axios.put(`https://exam-301-final.herokuapp.com/update/${this.state.id}`, obj).then(result => {
        this.setState({
          favItems: result.data,
        });
      })
      .catch((err) => {
        console.log(`err`);
      });


      this.setState({
        showFlag :false,
      })
  };



  delete=(id)=>{
    const { user } = this.props.auth0;

    const obj = {
      userEmail: user.email,

  }
  axios.delete(`https://exam-301-final.herokuapp.com/delete/${id}`,{params :obj}).then(result=>{
    this.setState({
      favItems :result.data,

    })
  })
  .catch(err=>{
    console.log(`error`);
  })



}




  render() {
    return (
      <div>
        <h1>My Favorite Fruits</h1>

        <Row>
          {this.state.favItems.map((item) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button
                    onClick={() => this.showModal(item,item._id)}
                    variant="primary"
                  >
                    Update
                  </Button>
                  <Button onClick={()=>this.delete(item._id)} variant="success">Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {this.state.showFlag && (
          <UpdateModal
            showModal={this.showModal}
            handleClose={this.handleClose}
            elementItem={this.state.elementItem}
            showFlag={this.state.showFlag}
            update={this.update}
          />
        )}
      </div>
    );
  }
}

export default withAuth0(FavFruit);
