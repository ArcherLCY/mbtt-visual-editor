import React from 'react'
import Content from '../content/index'
import Textarea from '../textarea/index'
import Picture from '../picture/index_'
import Flower from './flower'
import Work from './work'
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import './index.css'
import { increment } from '../card/silce'
import { type } from '@testing-library/user-event/dist/type'

const Resume = (options) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className='resume'>
                <div className='firstLine'>
                    <div className='firstLine_content'>
                        <div>
                            <Content 
                             onClick={() => {
                                dispatch(increment({ type: 'input', id: Date.parse(new Date())}))
                            }}
                             />
                            <Content />
                        </div>
                        <div>
                            <Content />
                            <Content />
                        </div>
                        <div>
                            <Content />
                            <Content />
                        </div>
                        <div>
                            <Content />
                            <Content />
                        </div>
                    </div>
                    <Picture />
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