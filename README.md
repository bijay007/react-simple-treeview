# react-simple-treeview
Simple treeview component for React.

```
npm i --save react-simple-treeview

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
|list| [ ]| Array of objects to render as an expandable tree. Initial list data passed must have the same format as in the example (`title` for list items name and `data` for the inner expandable list)
|styles| { } | Styles to be applied to list container (`listWrapper`) and items (`listItem`)
