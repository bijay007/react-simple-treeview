import React from 'react';
import NestedListItem from './NestedListItem';

const NestedList = (props) => {
  const { list, styles } = props;

  const createChildrenNodes = (list, paddingLeft) => {
    if (list.length) {
      let childrenWithHandlers = list.map((item, index) => {
        return (
          <NestedListItem
            key={index}
            data={item}
            createChildrenNodes={this.createChildrenNodes}
            styles={this.props.styles}
            leftOffset={paddingLeft || this.props.leftOffset}
            isFirstRender={!paddingLeft ? true : false} // TODO: make better usage of this logic or remove it
          />
        )
      })
      return childrenWithHandlers;
    }
  }
  return (
    <div style={styles.listWrapper || {}}>
      {
        createChildrenNodes(list)
      }
    </div>
  )
}

export default NestedList;
