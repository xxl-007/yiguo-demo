import React from 'react'
// 无状态组件，UI组件
export default function HomeUI(props){
    return (
        <div id="home"  className="page">
            <h1>这是home组件</h1>
            <button onClick={props.productList.bind(this)}>买二付一</button>
        </div>
    )
}

