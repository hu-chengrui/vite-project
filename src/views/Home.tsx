import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from '@/components/MainMenu'

const { Header, Content, Footer, Sider } = Layout;

const Views: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                {/* 侧边栏logo */}
                <div className="logo" />
                <MainMenu></MainMenu>
            </Sider>
            {/* 右侧界面 */}
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingLeft: '16px' }}>
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
                    {/* 每页窗口内容 */}
                    <Outlet></Outlet>
                </Content>
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Views;