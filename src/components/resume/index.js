import React from 'react'
import Content from '../content/index'
import Textarea from '../textarea/index'
import Picture from '../picture/index'
import Flower from './flower'
import Work from './work'
import './index.css'


const Resume = ( ) => {
    return (
        <>
            <div className='resume'>
                <div className='firstLine'>
                    <div className='firstLine_content' >
                        <div className='firstLine_content_content'>
                            <Content />
                            <Content />
                        </div>
                        <div className='firstLine_content_content'>
                            <Content />
                            <Content />
                        </div>
                        <div className='firstLine_content_content'>
                            <Content />
                            <Content />
                        </div>
                        <div className='firstLine_content_content'>
                            <Content />
                            <Content />
                        </div>
                    </div>
                    <img src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt="pre"  className='picture'/>
                </div>

                <div className='secondLine'>
                    <Flower />
                    <div className='secondLine_content'>
                        <Content />
                        <Content />
                        <Content />
                    </div>
                    <div className='secondLine_textarea'>
                        <Textarea />
                    </div>
                </div>
                <div>
                    <Work />
                    <div className='thirdLine_content'>
                        <Content />
                        <Content />
                        <Content />
                    </div>
                    <div className='thirdLine_textarea_one'>
                        <Textarea />
                    </div>
                    <div className='thirdLine_textarea_two'>
                        <Textarea />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resume