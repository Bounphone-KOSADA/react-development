import React from 'react';

function ListItem({ item }) {
  return <li>{item}</li>;
}

function ExtractedListItemExample() {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </ul>
  );
}

export default ExtractedListItemExample;