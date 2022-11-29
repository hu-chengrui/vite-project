// import store from "@/store"
import { useDispatch, useSelector } from "react-redux"
//TS中提供了ReturnType,用来获取函数类型的返回值
// type RootState = ReturnType<typeof store.getState>

export default function About() {
  //获取仓库数据  组件中通过useSelector获取仓库数据
  const { num } = useSelector((state: RootState) => ({
    num: state.num
  }))
  const dispath = useDispatch()
  const changeNum = () => {
    // dispath(
    //   {
    //     type: "ADD",

    //   }
    // ),
    dispath(
      {
        type: "ADD2",
        val: 10
      }
    )
  }
  return (
    <div>About {num}
      <button onClick={changeNum}>点击</button></div>

  )
}

