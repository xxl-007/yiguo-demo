import React, {Component} from 'react'
import MineUI from "./MineUI";
import './Mine.scss'

// 复杂组件,容器组件
export default class Mine extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return(

            <MineUI></MineUI>
        )
    }

    

}
