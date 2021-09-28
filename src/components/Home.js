import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import FruitItem from './FruitItem'



export class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      staticFruits : [],
       
    }
  }

  componentDidMount=()=>{
    axios.get(`http://localhost:3100/getStaticFruits`).then(result=>{
      this.setState({
        staticFruits :result.data
      })
    })
    .catch(err=>{
      console.log(`error`);
    })

  }

  render() {
    return (
      <div>
        <h1>API Fruits</h1>

        <FruitItem staticFruits={this.state.staticFruits}/>


        
      </div>
    )
  }
}

export default Home
