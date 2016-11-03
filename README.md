# al-goods-grid
-------------
商品网格列表。

## Installation
```
npm i al-goods-grid
```

## Usage
```js
/*js文件*/
import Grid from 'al-goods-grid';
children={
  grid: new Grid({
    ...
  });
};
```
```xml
<!--xml组件-->
<component key="grid" name="al-goods-grid" />
```
```css
/*less文件*/
@import 'al-goods-grid';
```
## Props
|Property | PropType |Description|
|:---------|:----|:------|
|items|array|商品列表数据，针对`alaska-goods`service数据结构|
|onChange|func|item点击事件，返回`商品id`|