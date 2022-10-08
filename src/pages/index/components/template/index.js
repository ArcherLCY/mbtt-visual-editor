import { Card, Empty  } from 'antd';
function Template() {
    return (
        <div className="template">
            <div>
                <h2>系统模板</h2>
                <Card
                    title="简历模板"
                    extra={<a href="establish">查看</a>}
                    style={{
                        width: 300,
                        display: 'inline-block',
                        marginRight: 10
                    }}
                >
                    <p>这是一个简历模板</p>
                    <p>这是一个简历模板</p>
                    <p>这是一个简历模板</p>
                </Card>
                <Card
                    title="简历模板"
                    extra={<a href="establish">查看</a>}
                    style={{
                        width: 300,
                        display: 'inline-block',
                        marginRight: 10
                    }}
                >
                    <p>这是一个简历模板</p>
                    <p>这是一个简历模板</p>
                    <p>这是一个简历模板</p>
                </Card>
                <Card
                    title="简历模板"
                    extra={<a href="establish">查看</a>}
                    style={{
                        width: 300,
                        display: 'inline-block',
                        marginRight: 10
                    }}
                >
                    <p>这是一个简历模板</p>
                    <p>这是一个简历模板</p>
                    <p>这是一个简历模板</p>
                </Card>
            </div>
            <div>
            <h2>我的模板</h2>
            <Empty />
            </div>
        </div>
    )
}
export default Template