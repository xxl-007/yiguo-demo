import React, { Component } from 'react'

import Sale from './conponents/sale/Sale.jsx'
import New from './conponents/new/New'
import Price from './conponents/price/Price'

import './ProductList.scss'

import {getProductList} from '../../services'

export default class ProductList extends Component {
    constructor(){
        super();
        this.state = {
            data: ["销量","新品", "价格"],
            showIndex: 0,
            product: [],
        }
    }
    
    render() {
        let {data, showIndex, product} = this.state;

        return (
            <div className="page subpage" id="productList">

                <ul className="navtab">
                {
                    data.map((item, index)=>{
                        return (
                            <li key={index} className={index==showIndex?"active":""} onClick={this.activeTab.bind(this,index)}>
                                {item}
                            </li>
                        )
                    })
                }
                </ul>

                <div className="content">
                    {showIndex==0 && <Sale sale={product}/>}
                    {showIndex==1 && <New/>}
                    {showIndex==2 && <Price/>}
                </div>
 
            </div >
        )
    }

    activeTab(index){
        console.log(index);
        this.setState({showIndex: index});
    }

    componentDidMount(){
        getProductList().then((result)=>{
            console.log("产品列表接收");
            console.log(result);
            console.log(result.Data.CommodityList);
            this.setState({product: result.Data.CommodityList});
        })
    }
}