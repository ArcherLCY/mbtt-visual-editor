import React, { useState } from 'react'
import styles from './index.module.scss'
import { Divider, Input, Select, Space, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { changeContentSize } from '../../../slice'

const { Option } = Select;

// 画板初始数据
const list = [
    { width: 800, height: 1000, name: 'PC' },
    { width: 1024, height: 768, name: 'PC' },
    { width: 1920, height: 1080, name: 'PC' },
    { width: 375, height: 667, name: 'iPhone' },

]
export default function App() {
    const [data, setData] = useState(list)
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    // 添加自定义画板
    const addData = () => {
        const inputs = input.trim()
        const strs = inputs.split('*')
        if (inputs === '' || strs.length === 0 || inputs.indexOf('*') === -1) return alert('格式不正确！')
        const width = parseInt(strs[0])
        const height = parseInt(strs[1])
        if(typeof width != 'number' || typeof height != 'number') return alert('格式不正确！')
        data.push({ width, height, name: '自定义' + (data.length - list.length + 1) })    
        setData([...data])
        setInput('')
        
    }

    // 选择画板
    const selectContentSize = (e) => {
        const splits = e.split('*')
        const width = parseInt(splits[0])
        const height = parseInt(splits[1])
        dispatch(changeContentSize({width, height}))
    }

    return (
        <div className={styles.ContentSizeEdit}>
            <div style={{ marginRight: 50 + 'px' }}>
                <label>选择画板：</label>
                <Select
                    defaultValue={data[0].width + '*' + data[0].height}
                    style={{ width: 220 }}
                    onChange={(e) => { selectContentSize(e) }}
                    dropdownRender={menu => (
                        <>
                            {menu}
                            <Divider style={{ margin: '8px 0' }} />
                            <Space style={{ padding: '0 8px 4px' }}>
                                <Input
                                    placeholder="输入自定义宽高，如100*200"
                                    onChange={(e) => {setInput(e.target.value) }}
                                />
                                <Button type="text" icon={<PlusOutlined />} onClick={() => addData()}>
                                    添加
                                </Button>
                            </Space>
                        </>
                    )}>
                    {
                        data.map((item, index) => {
                            const { name, width, height } = item
                            return <Option value={width + '*' + height} key={index}>{name + '：' + width + ' * ' + height + ' 像素'}</Option>
                        })
                    }
                </Select>
            </div>
        </div>
    )
}