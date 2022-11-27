import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    BlockOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


type MenuItem = Required<MenuProps>['items'][number];

//: MenuItem 函数类型
function getItem(
    //参数
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    //函数体部分
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'user', <UserOutlined />, [
        getItem('Tom', '/user/tom'),
        getItem('Bill', '/user/bill'),
        getItem('Alex', '/user/alex'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
    getItem('About', '/about', <BlockOutlined />),
];

const Components: React.FC = () => {
    //引入路由跳转的Hook 
    const navigateTo = useNavigate()
    const menuClick = (e: { key: string }) => {
        //根据菜单的key获取到不同的菜单路由
        // console.log("菜单点击跳转", e.key);
        //点击跳转到不同的路由
        navigateTo(e.key)

    }

    let firstOpenkey: string = "";
    //展开和回收某项菜单栏时执行
    const [openKeys, setOpenKeys] = useState([firstOpenkey])
    const handleOpenChange = (openKeys: string[]) => {
        // console.log(openKeys);
        //只展示最后一个点开项=>只保留数组的最后一项
        setOpenKeys([openKeys[openKeys.length - 1]])//选取openKeys的最后一项

    }
    //当前选中的路由页面
    const currentRoute = useLocation()
    // console.log("---------", currentRoute);
    console.log(currentRoute.pathname);//选中那个页面打印那个页面的路径


    // let firstOpenkey: string = "";
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
            firstOpenkey = items[i]!.key as string
            break;
        }
    }

    return (
        //defaultSelectedKeys={[currentRoute.pathname]}表示当前样式选中项
        <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick} onOpenChange={handleOpenChange} openKeys={openKeys} />
    )
}
export default Components;
