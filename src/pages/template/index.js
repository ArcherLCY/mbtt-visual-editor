import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import Textarea from '../../components/textarea/index';

function Template(){
    return(
        <div className="Template">
            <Textarea>Template</Textarea>
        </div>
    )
}

export default Template