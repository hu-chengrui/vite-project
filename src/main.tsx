import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入顺序
//引入全局样式初始化的插件  要放在APP的上面，可以自己定义的组件样式覆盖这个初始化的样式
import "reset-css"
//UI框架的样式

//全局样式
import "@/assets/styles/global.scss"
//路由
import { BrowserRouter } from "react-router-dom"
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
)
