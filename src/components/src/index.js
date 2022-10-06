import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import { useEffect } from 'react';
import './src.css'

const App = (options) => {
    const dispatch = useDispatch();
    return (
        <>
        <div id='src'
            className='src'
            onClick={() => {
                console.log(options);
                dispatch(changeId(options.options))
                window.location.href = document.getElementById('src').innerHTML
            }}
            style={{
                height: options.options?.height,
                width: options.options?.width || 500,
                marginLeft: options.options?.marginLeft || 15,
                marginRight: options.options?.marginRight || 15,
                marginBottom: options.options?.marginBottom,
                marginTop: options.options?.marginTop || 15,
                zIndex: options.options?.zIndex,
                position: options.options?.position,
                borderRadius: 5, 
            }} 
            > {options.options?.href || "#"}</div>
            </>
    )
}
export default App