import React, {Component} from 'react'
import './Home.scss'

import {getHomeData} from "../../services";


// 复杂组件,容器组件
export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            homedata:''
        }
    }
    render(){
        return(
            <div id="home" className="page">
                <header className="homeheader">
                        <span className="addr">深圳</span>
                        <span className="search"><input type="text"/></span>
                </header>
                <div className="app-content" ref="scroll">
                    <div className="wrap">
                        {/*轮播图部分 */}
                        <div className="first">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">Slide 1</div>
                                    <div className="swiper-slide">Slide 2</div>
                                    <div className="swiper-slide">Slide 3</div>
                                    <div className="swiper-slide">Slide 3</div>
                                    <div className="swiper-slide">Slide 3</div>
                                </div>
                                <div className="swiper-pagination">
                                
                                </div>
                            </div>
                        </div>
                        <div className="first">1</div>
                        <div className="first">1</div>
                        <div className="first">1</div>
                        <div className="first">1</div>
                        <div className="first">1</div>
                        <div className="first">1</div>
                    </div>
                </div>


                {/* productList测试按钮 */}
                <button onClick={this.productList.bind(this)}></button>
            </div>
        )
    }

   componentDidMount(){
        getHomeData().then((result)=>{
            console.log(result);
        })
        var scroll=new window.IScroll(this.refs.scroll,{
            tap: true,
            click: true,
            bounce: true,
            probeType: 3
        })

        // 初始化轮播图
        var mySwiper = new window.Swiper ('.swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            pagination: {
              el: '.swiper-pagination',
            },
          })        
        
   }
    // productList点击事件
    productList(){
        this.props.history.push({pathname: '/home/productList', state: {Keyword: "水果"}});
    }

}




