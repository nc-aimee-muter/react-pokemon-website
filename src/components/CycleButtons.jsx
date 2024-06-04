const CycleButtons = ({ pokémon, setSearchTerm }) => {
  const handleClick = (number) => {
    if (pokémon.id === 1 && number === -1) {
      setSearchTerm(1025);
    } else if (pokémon.id === 1025 && number === 1) {
      setSearchTerm(1);
    } else {
      setSearchTerm(pokémon.id + number);
    }
  };

  return (
    <>
      <section id="cycleButtons">
        <label id="previousButtonLabel" htmlFor="previousButton">
          Previous
        </label>
        <button id="previousButton" onClick={() => handleClick(-1)}>
          -
        </button>
        <label id="nextButtonLabel" htmlFor="nextButton">
          Next
        </label>
        <button id="nextButton" onClick={() => handleClick(1)}>
          +
        </button>
      </section>
    </>
  );
};

export default CycleButtons;
