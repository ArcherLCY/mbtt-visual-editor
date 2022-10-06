import React from 'react'
import styles from './index.module.scss'
import {Button} from 'antd'

export default function App() {
    return (
        <div className={styles.display}>
            <Button type='primary' shape='round'>撤销</Button>
            <Button type='primary' shape='round'>清空</Button>
            <Button type='primary' shape='round'>删除</Button>
        </div>
    )
}