import React from 'react';

function KeySiblingExample() {
  const categories = [
    {id: 1, name: 'Fruits', items: ['Apple', 'Banana']},
    {id: 2, name: 'Vegetables', items: ['Carrot', 'Broccoli']}
  ];

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default KeySiblingExample;