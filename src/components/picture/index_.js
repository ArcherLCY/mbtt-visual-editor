// 显示在屏幕中间
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'

function App(options) {
    const dispatch = useDispatch()
    return (
        <img src={options.options?.src} className={'picture'} onClick={() => { console.log(options); dispatch(changeId(options.options)) }}
            style={{
                height: options.options?.height,
                width: options.options?.width,
                marginLeft:options.options?.marginLeft||15,
                marginRight:options.options?.marginRight||15,
                marginBottom:options.options?.marginBottom,
                marginTop:options.options?.marginTop||15,
                zIndex:options.options?.zIndex,
                position:options.options?.position
            }} />
    )
}


export default App;