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
    let href = dom.href
    let checked = dom.checked
    let placeholder = dom.placeholder
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
        case 'link' : return (
            '<' + type + ' ' +
            'style=' + '{{' + 'value:' + title + ',' + 
            'href:' + href + ',' +
            '>' + '<' + type + '/>' 
        )
        case 'rate' :return (
            '<Rate' +
            'style=' + '{{' + 'value:' + title + ',' +
            'checked:' + checked + ',' +
            'fontSize:' + fontSize + ',' +
            '>' + '</Rate>'
        )
        case 'email' : return (
            '<Input' +
            'style=' + '{{' + 'placeholder:' + placeholder + ',' +
            'checked:' + checked + ',' +
            'fontSize:' + fontSize + ',' +
            'width:' + width + ',' +
            'height:' + height + ',' +
            '>' + '</Input>'
        )
        case 'telephone' : return (
            '<Input' +
            'style=' + '{{' + 'placeholder:' + placeholder + ',' +
            'checked:' + checked + ',' +
            'fontSize:' + fontSize + ',' +
            'width:' + width + ',' +
            'height:' + height + ',' +
            '>' + '</Input>'
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