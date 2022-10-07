import React from 'react'
import styles from './index.module.scss'
import {Button} from 'antd'
import {useDispatch} from 'react-redux'
import {clearDomList,deleteDom} from '../../../slice'

export default function App() {
    const dispatch = useDispatch()

    return (
        <div className={styles.display}>
            <Button type='primary' shape='round' onClick={() => alert('暂未完成')}>撤销</Button>
            <Button type='primary' shape='round' onClick={() => dispatch(clearDomList())}>清空</Button>
            <Button type='primary' shape='round' onClick={() => dispatch(deleteDom())}>删除</Button>
        </div>
    )
}