import React, { Component } from 'react';
import NestedListItem from './NestedListItem';

class NestedList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: [...Array(this.props.list.length).keys()].map(() => true) // all root trees collpased by default
    }
  }

  createChildrenNodes = (list, paddingLeft) => {
    if (list.length) {
      let childrenWithHandlers = list.map((item, index) => {
        return (
          <NestedListItem
            key={index}
            data={item}
            createChildrenNodes={this.createChildrenNodes}
            styles={this.props.styles}
            leftOffset={paddingLeft || this.props.leftOffset}
            isFirstRender={!paddingLeft ? true : false} // TODO: make more usuage of this logic or try to remove it
          />
        )
      })
      return childrenWithHandlers;
    }
  }

  render() {
    const { list, styles } = this.props;
    return (
      <div style={styles.listWrapper || {}}>
        {
          this.createChildrenNodes(list)
        }
      </div>
    )
  }
}

export default NestedList;
