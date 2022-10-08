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

const Resume = (options) => {
    const dispatch = useDispatch();
    console.log('id',options.options.id)
    return (
        <>
            <div className='resume'>
                <div className='firstLine'>
                    <div className='firstLine_content' >
                        <div>
                        {/* options.options.id */}
                            <Content 
                            // value={options.options?.value_content_resume}

                            // onClick={() => {
                            //     console.log(options);
                            //     dispatch(changeId(options.options))
                            // }}
                             />
                             {/* Date.parse(new Date())}} */}
                            <Content options={{type:'Content',id:Date.parse(new Date()) }} />
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