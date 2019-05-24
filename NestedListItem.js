import React, { Component } from 'react';
export default class NestedListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  clickHandler = () => this.setState({ collapsed: !this.state.collapsed })

  render() {
    const { data, styles, leftOffset, isFirstRender, createChildrenNodes } = this.props;
    const paddingLeft = isFirstRender ? '0px' : `${leftOffset}px`;
    // we merge the base styles with increased left padding
    let newStyles = Object.assign({}, styles.listItem, { paddingLeft });
    return (
      <React.Fragment>
        <div style={newStyles || {}} onClick={() => this.clickHandler()}>
            <div>{data.title ? data.title : `No Title`}</div>
            {
              data.data &&
              <span style={{cursor: 'pointer'}}>
                {
                  this.state.collapsed
                  ? '+'
                  : '-'
                }
              </span>
            }
          </div>
        <div>
        {
          !this.state.collapsed && data.data
            ? createChildrenNodes(data.data, 2 * leftOffset) // we double left padding on every recursion/depth
            : null
        }
        </div>
      </React.Fragment>
    )
  }
}
