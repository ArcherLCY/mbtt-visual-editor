import React from 'react'
import styles from './index.module.scss'
import {Button} from 'antd'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { changeEditStatus } from '../../../slice'

export default function App() {
    const isEdit = useSelector((state) => state.home.isEdit)
    const dispatch = useDispatch()
    return (
        <div className={styles.isEdit}>
            {
                isEdit ? 
                <Button type='primary' onClick={() => dispatch(changeEditStatus(false))}>编辑模式<DoubleRightOutlined /></Button> : 
                <Button type='danger' onClick={() => dispatch(changeEditStatus(true))}>预览模式<DoubleLeftOutlined /></Button>
            }
        </div>
    )
}