import ImageBox from "./ImageBox";
import Stats from "./Stats";
import "../styles/types.css";
import "../styles/styles.css";

const Data = ({ pokémon }) => {
  if (pokémon) {
    const {
      name,
      id,
      sprites: { front_default, back_default, front_shiny, back_shiny },
      height,
      weight,
      types,
      stats,
    } = pokémon;
    return (
      <>
        <section id="data">
          <p>ID: {id}</p>
          <p id="pokemonName">Name: {name} </p>
          <p>Height: {height * 10}cm</p>
          <p>Weight: {weight / 10}kg</p>
          <ul id="types">
            {types.map((element) => {
              const type = element.type.name;
              return (
                <li id={type} key={type}>
                  {type}
                </li>
              );
            })}
          </ul>
          <div id="chartContainer"></div>
          <Stats stats={stats} />
        </section>

        <section id="images">
          <ImageBox>
            <p>Default Colours:</p>
            <img alt={"default " + name + " front"} src={front_default}></img>
            {back_default && (
              <img alt={"default " + name + " back"} src={back_default}></img>
            )}
          </ImageBox>
          {(front_shiny || back_shiny) && (
            <ImageBox>
              <p>Shiny Colours:</p>
              <img alt={"shiny " + name + " front"} src={front_shiny}></img>
              {back_shiny && (
                <img alt={"shiny " + name + " back"} src={back_shiny}></img>
              )}
            </ImageBox>
          )}
        </section>
      </>
    );
  }
};

export default Data;
