function ClickHandling() {

  const handleClick = (event: object): void => {
    console.log('clicked', event)
  };

  return (
    <>
      <button onClick={handleClick}>react typescript testing</button>
    </>
  );
}

export { ClickHandling };