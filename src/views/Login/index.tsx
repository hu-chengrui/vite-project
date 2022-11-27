import { useEffect } from 'react'
import { Input, Space, Button } from 'antd'
import styles from './index.module.scss'
import initLoginBg from './init.ts'
import "./login.less"



export default function Login() {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () { initLoginBg() }
  }, [])
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
            <Input placeholder="用户" />
            <Input.Password placeholder="密码" />
            <div className="captchaBox">
              <Input placeholder="验证码" />
              <div className="captchaImg">
                <img height="32" src="https://1234ittv.com/apis/user/api/user/getVerifyCode?uuid=98c4b47895c74a388bd9dc8e77d3d001" alt="" />
              </div>
            </div>
            <Button type="primary" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

