/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-20
 * @author lulu <lulu@maichong.it>
 */

import wx from 'labrador';
import GoodsGridItem from 'al-goods-grid-item';

const { array } = wx.PropTypes;

export default class GoodsGrid extends wx.Component {
  propTypes = {
    items: array
  };
  data = {
    items: []
  };

  children = {
    listItems: new wx.List(GoodsGridItem, 'items', {
      id: '>id',
      pic: '>pic',
      title: '>title',
      price: '>price'
    })
  };

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
    this.setData({ items: props.items });
  }
}
