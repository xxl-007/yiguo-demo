import React, {Component} from 'react'
import './Sale.scss'

export default class Sale extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        console.log(this.props);
        let {sale} = this.props;
        console.log(sale);
        

        return(
            <div className="sale">
                <div className="productShow">
                    {
                        sale.map((item,  index)=>{
                            return(
                                <div key={index} className="productContent">
                                <div className="productImg">
                                    <img src={item.SmallPic} alt=""/>
                                </div>
                                <div className="productMessage">
                                    <p className="name">{item.CommodityName}</p>
                                    <p className="txt">{item.SubTitle}</p>
                                    <i className="label">{item.PromotionTag}</i>
                                    <p className="priceContent">
                                        <span className="sellPrice">￥{item.SellPrice}</span>
                                        <span className="spec">{item.Spec}</span>
                                        <span className="add"></span>
                                        {/* url("//img05.yiguoimg.com/d/web/180508/01311/150610/add.png") no-repeat */}
                                    </p>
                                </div>
                            </div>
                            )     
                        })
                    }
                </div>
            </div>
        )
    }

}