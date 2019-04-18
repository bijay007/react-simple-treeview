# react-simple-treeview
Simple treeview component for React.

```
npm i --save react-simple-treeview

OR

yarn add react-simple-treeview (...in the future)
```

#### Using the component.

```javascript
import NestedList from 'react-simple-treeview';

const data = [
  {
    title: 'Unclassified'
  },
  {
    title: 'University',
    data: [
      title: 'Applied Science',
      data: []
    ]
  }
];

const styles = {
  listWrapper: {
    border: '1px solid red',
    backgroundColor: 'gray'
  },
  listItem: {
    padding: '10px'
  }
}

<NestedList list={data} styles={styles} />
```

#### Component props

| props | default | desc
|------|------|------
|data| null| array of objects to expand. It must have the same format as in the example
|styles| {} | styles to be applied to list container (listWrapper) and items (listItem)(see example)
