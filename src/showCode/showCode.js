// 生成代码

import React from "react";
import { useSelector } from "react-redux";

function check(dom) {
    let type = dom.type.toLowerCase();
    let title = dom.title
    let src = dom.src
    let value = dom.value
    let text = dom.text
    let disabled = dom.disabled
    let showTime = dom.showTime
    let width = dom.width
    let height = dom.height
    let marginLeft = dom.marginLeft
    let marginTop = dom.marginTop
    let zIndex = dom.zIndex
    let color = dom.color
    let fontSize = dom.fontSize
    let fontFamily = dom.fontFamily
    let lineHeight = dom.lineHeight
    let border = dom.border
    let autoFocus = dom.autoFocus
    let defaultChecked = dom.defaultChecked
    switch (type) {
        case 'card': return (
            '<' + type + '>' + title + '<' + type + '/>'
        )
        case 'picture': return (
            '<' + 'img' + ' ' +
            'style=' + '{{' + 'width:' + width + ',' +
            'height:' + height + ',' +
            'marginLeft:' + marginLeft + ',' +
            'marginTop:' + marginTop + ',' +
            'zIndex:' + zIndex + ',' + '}}' + '>'
            + src + '<' + 'img' + '/>'
        )
        case 'checkbox': return (
            '<' + type + ' ' +
            'style=' + '{{' + 'autoFocus:' + autoFocus + ',' +
            'defaultChecked:' + defaultChecked + ',' +
            'disabled:' + disabled + ',' +
            + '>' + text + '<' + type + '/>'
        )
        case 'textarea': return (
            '<' + type + ' ' +
            'style=' + '{{' + 'width:' + width + ',' +
            'height:' + height + ',' +
            'marginLeft:' + marginLeft + ',' +
            'marginTop:' + marginTop + ',' +
            'zIndex:' + zIndex + ',' + '}}' + '>' + value + '<' + type + '/>'
        )
        case 'text': return (
            '<h3' + '' +
            'style=' + '{{' + 'width:' + width + ',' +
            'fontSize:' + fontSize + ',' +
            'fontFamily:' + fontFamily + ',' +
            'lineHeight:' + lineHeight + ',' +
            'border:' + border + ',' +
            'color:' + color + ',' + '}}' + '>' + value +'</h3>'
        )
        case 'datepicker': return (
            '<' + type + '>' + showTime + '<' + type + '/>'
        )
        case 'radio': return (
            '<' + type + '>' + text + '<' + type + '/>'
        )
        case 'switch': return (
            '<' + type + '>' + disabled + '<' + type + '/>'
        )
        case 'button': return (
            '<' + type + '>' + value + '<' + type + '/>'
        )
    }
}

const App = () => {
    const domList = useSelector((state) => state.home.domList)
    console.log('domListdomList', domList)
    return domList.map((item, index) => {
        return check(item)
    })
}
export default App