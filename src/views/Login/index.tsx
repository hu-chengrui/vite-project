import { useEffect } from 'react'
import styles from './index.module.scss'
import initLoginBg from './init.ts'
import { Input, Space, Button } from 'antd'



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
      <div className={styles.loginBox}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>React+Vite+Ts&nbsp;.&nbsp;星空后台</h1>
          <p>Forever Jackson Yee</p>
        </div>
        {/* 表单部分 */}
        <div className='from'>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Input placeholder="用户名" />
            <Input.Password placeholder="密码" />
            <Button type="primary" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

