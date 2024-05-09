import FilterablePokedexTable from "./_component/FilterablePokedexTable";
import GetPokemon from "./_component/GetPokemon";
import GetPokemons from "./_component/GetPokemons";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "80%",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Part 1</p>
      <GetPokemon />
      <hr />
      <p>Part 2</p>
      <GetPokemons />
      <hr />
      <p>Part 3</p>
      <FilterablePokedexTable />
    </div>
  );
}
