import React, { Component } from 'react'
import './kind.scss'

export default class Kind extends Component {

    render() {
        return (
            <div id="kind" className="page">
                <div className='search-box'>
                    <div className='inp-box'>
                        <input type="text" className='inp' placeholder='请输入商品名称' />
                    </div>
                    <span>搜索</span>
                </div>
                <div className='content'>
                
                </div>
            </div>
        )

    }
}