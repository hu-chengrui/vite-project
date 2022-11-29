import { ChangeEvent, useEffect, useState } from 'react'
import { Input, Space, Button } from 'antd'
import styles from './index.module.scss'
import initLoginBg from './init.ts'
import "./login.less"



export default function Login() {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () { initLoginBg() }
  }, [])

  // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
  const [usernameVal, setUsernameVal] = useState("")//定义用户输入信息这个变量
  const [passwordVal, setPasswordVal] = useState("")//定义用户输入密码这个变量
  const [captchaVal, setCaptchaVal] = useState("")//定义用户输入验证码这个变量
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    // console.log(e.target.value);
    setUsernameVal(e.target.value)
  }
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    // console.log(e.target.value);
    setPasswordVal(e.target.value)
  }
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    // console.log(e.target.value);
    setCaptchaVal(e.target.value)
  }
  //点击登录按钮事件获取到上面3个值
  const goLogin = () => {
    console.log("用户输入的3个信息", usernameVal, passwordVal, captchaVal);
    //验证是否有空值
    //trim() 函数移除字符串两侧的空白字符或其他预定义字符。功能除去字符串开头和末尾的空格或其他字符。
    // if (!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      
    // }
  }

  return (
    <div className={styles.login}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox + " loginbox"}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>React+Vite+Ts&nbsp;.&nbsp;星空后台</h1>
          <p>Forever Jackson Yee</p>
        </div>
        {/* 表单部分 */}
        <div className='from'>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Input placeholder="用户" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg">
                <img height="32" src="" alt="" />
              </div>
            </div>
            <Button type="primary" block onClick={goLogin}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

