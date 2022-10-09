import React from 'react'
import { Card, Input, Button, Checkbox, Form } from 'antd'
import './index.css'

import { useNavigate } from "react-router-dom";

const App = () => {

    const navigate = useNavigate()

    const onFinish = (values) => {
        navigate('/index')
        // alert('登录成功！！低代码引擎，创造你想创造的!');
    };

    const onFinishFailed = () => {
        alert('数据不合法！');
    };
    return (
        <div className="Index">
            <section className="sky">
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>
                <span className="start"></span>

            </section>
            <Card title="登录" bordered={false} style={{ width: 300, borderRadius: '10px' }}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="手机号"
                        name="phone"
                        rules={[{ required: true, message: '请输入手机号!' }, { min: 11, max: 11, message: '电话号码位数不正确!' }]}
                    >
                        <Input placeholder='输入手机号' />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }, { min: 6, max: 12, message: '输入不少于6位密码!' }]}
                    >
                        <Input.Password placeholder='输入密码' />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                        <Button type="primary" htmlType="submit" shape='round' style={{ padding: '0 30px' }}>
                            登录&注册
                        </Button>
                        <p style={{ marginTop: '10px', fontSize: '12px', color: '#777' }}>没有账号金会为您自动注册</p>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default App;