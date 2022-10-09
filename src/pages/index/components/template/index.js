import { Button, Card, Empty  } from 'antd';
import { useNavigate } from 'react-router';
function Template() {
    const navigate = useNavigate();
    return (
        <div className="template">
            <div>
                <h2>系统模板</h2>

                 <Card
                    title="简历模板"
                    extra={<a onClick={() => {navigate('/estab',{state:{name:'resume'}})}}>查看</a>}
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
                    title="疫情登记模板"
                    extra={<a href="clockIn">查看</a>}
                    style={{
                        width: 300,
                        display: 'inline-block',
                        marginRight: 10
                    }}
                >
                    <p>这是一个疫情登记模板，</p>
                    <p>包括健康状况，核酸检测时间、结果等基本情况收集</p>
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