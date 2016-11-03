/**
 * item
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-03
 * @author LuLu <LuLu@maichong.it>
 */

import wx from 'labrador';

const { string, func, number } = wx.PropTypes;

export default class Item extends wx.Component {
    propTypes = {
        id: string,
        pic: string,
        title: string,
        price: number,
        onChange: func
    };

    data = {
        id: '',
        pic: '',
        title: '',
        price: ''
    };

    children = {};

    onLoad() {

    }

    onReady() {

    }

    onShow() {

    }

    onHide() {

    }

    onUnload() {

    }

    onUpdate(props) {
        this.setData({
            id: props.id,
            pic: props.pic,
            title: props.title,
            price: props.price
        })
    }

    handleGoodsClick() {
        this.props.onChange();
    }
}