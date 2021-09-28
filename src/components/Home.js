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
    axios.get(`https://exam-301-final.herokuapp.com/getStaticFruits`).then(result=>{
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
