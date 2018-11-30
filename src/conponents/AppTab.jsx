import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AppTab extends Component{

    render(){
        return (
            <div id="appTab">
                <nav className="nav">
                    <NavLink act to="/home">首页</NavLink>
                    <NavLink to="/product">分类</NavLink>
                    <NavLink to="/eat">吃饭吧</NavLink>
                    <NavLink to="/cart">购物车</NavLink>
                    <NavLink to="/mine">我的易果</NavLink>
                </nav>
            </div>
        )
    }

}