import '../../components/resume/index.css'
import React from 'react'
import { Input } from 'antd'
import Flower from '../../components/resume/flower'
import Work from '../../components/resume/work'
// import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'


function App() {
    let tab = useSelector((state) => state.home.tab)
    const { TextArea } = Input;
    let template = (
        <div className='resume'>
            <div className='firstLine'>
                <div className='firstLine_content' >
                    <div>
                        <Input className='content_input' value={'出生年月：1997年10月'} />
                        <Input className='content_input' value={'性 别：女'} />
                    </div>
                    <div>
                        <Input className='content_input' value={'籍 贯：浙江杭州'} />
                        <Input className='content_input' value={'毕业学校：浙江理工大学'} />
                    </div>
                    <div>
                        <Input className='content_input' value={'学 历：大学本科'} />
                        <Input className='content_input' value={'电 话：17782371046'} />
                    </div>
                    <div>
                        <Input className='content_input' value={'工作年限：应届毕业生'} />
                        <Input className='content_input' value={'邮 箱：123@qq.com'} />
                    </div>
                </div>
                <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="beautiful" className='picture' />
            </div>
            <div className='secondLine'>
                <Flower />
                <div className='secondLine_content'>
                    <Input className='content_input' value={'20xx.9-20xx.6'} />
                    <Input className='content_input' value={'浙江理工大学'} />
                    <Input className='content_input' value={'商务管理/本科'} />
                </div>
                <div className='secondLine_textarea'>
                    <div
                        style={{
                            marginTop: 15,
                            marginRight: 15,
                            color: 'deepskyblue'
                        }}>工作描述
                    </div>
                    <TextArea rows={5} value={'商务交流、企业组织与环境、数量方法、经济学、商务英语、会计学、管理信息技术、'} className={'textarea_index_textarea'} />
                </div>
            </div>
            <div>
                <Work />
                <div className='thirdLine_content'>
                    <Input className='content_input' value={'20xx.7-20xx.8'} />
                    <Input className='content_input' value={'杭州某某科技有限公司'} />
                    <Input className='content_input' value={'区域销售主管'} />
                </div>
                <div className='thirdLine_textarea_one'>
                    <div
                        style={{
                            marginTop: 15,
                            marginRight: 15,
                            color: 'deepskyblue'
                        }}>工作描述
                    </div>
                    <TextArea rows={5} value={'1.自毕业起即加入某某科技'} className={'textarea_index_textarea'} />
                </div>
                <div className='thirdLine_textarea_two'>
                    <div
                        style={{
                            marginTop: 15,
                            marginRight: 15,
                            color: 'deepskyblue'
                        }}>工作描述
                    </div>
                    <TextArea rows={5} value={'负责部门的日常管理工作'} className={'textarea_index_textarea'} />
                </div>
            </div>
        </div>
    )
    let punchCard = (
        <div>card</div>
    )
    let vote = (
        <div>vote</div>
    )
    return (
        <>
        {
            (function judge () {
                if(tab === 1 ) {
                    return (punchCard)   //打卡
                }
                if(tab === 2) {
                    return (vote)     //选举
                }
                if(tab === 3) {
                    return (template)  //简历
                }
            })()
        }
        </>
    )
}
export default App