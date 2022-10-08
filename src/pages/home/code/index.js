import React from "react";
import { useDispatch,useSelector } from "react-redux";


const Card = (
    <>
    </>
)
function createCode (domList) {

}

const App = () => {
    // 拿到此时的domList
    const domList = useSelector((state) => state.home.domList)
    const dispatch = useDispatch();
    return (
        <>
        {domList.map((item,index) => {
            return (
                "<"  + item.type + "/>"
            )
        })}
        </>
    )
}
export default App