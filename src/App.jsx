import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'

import Home from './pages/home/Home'
import Kind from './pages/kind/Kind'
import Eat from './pages/eat/Eat'
import Shop from './pages/shop/Shop'
import Mine from './pages/mine/Mine'
import NotFind from './pages/NotFind'

import ProductList from './conponents/productList/ProductList.jsx'

import './App.css'

export default class App extends Component{

    render(){
        return (
            <Router>
            <div className="app">

                <Switch>
                    <Route path="/" exact render={()=>{
                        //重定向
                        return <Redirect to="/home"/>
                    }}/>

                    <Route path="/home" component={Home}/>
                    
                    <Route path="/kind"  component={Kind}/>

                    <Route path="/eat"  component={Eat}/>

                    <Route path="/shop"  component={Shop}/>
                    <Route path="/mine"  component={Mine}/>


                    <Route path="/404"  component={NotFind}/>

                    <Route render={()=>{
                        //重定向
                        return <Redirect to="/404"/>
                    }}/>
                </Switch>

                    <Route path="/home/productList" component={ProductList}/>


                <nav className="tabs">
                    <Link className="tab" to="/home">home</Link>
                    <Link className="tab" to="/kind">kind</Link>
                    <Link className="tab" to="/eat">eat</Link>
                    <Link className="tab" to="/shop">shop</Link>
                    <Link className="tab" to="/mine">mine</Link>
                </nav>

                
            </div>
            </Router>
        )

    }
}

