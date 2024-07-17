function ButtonClick() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Button was clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default ButtonClick;