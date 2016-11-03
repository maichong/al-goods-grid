/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-20
 * @author lulu <lulu@maichong.it>
 */

import wx from 'labrador';
import Item from './item';

const { array, func } = wx.PropTypes;

export default class GoodsGrid extends wx.Component {
  propTypes = {
    items: array,
    onChange: func
  };
  data = {
    items: []
  };

  children = {
    listItems: new wx.List(Item, 'items', {
      id: '>id',
      pic: '>pic',
      title: '>title',
      price: '>price',
      onChange: '#handleChange'
    })
  };

  onUpdate(props) {
    this.setData({ items: props.items });
  }

  handleChange(component) {
    let id = this.data.items[component.key].id;
    this.props.onChange(id);
  }
}
