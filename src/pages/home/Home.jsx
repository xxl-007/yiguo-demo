import React, {Component} from 'react'
import HomeUI from "./HomeUI";
import './Home.scss'

// 复杂组件,容器组件
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return(

            <HomeUI></HomeUI>
        )
    }


}