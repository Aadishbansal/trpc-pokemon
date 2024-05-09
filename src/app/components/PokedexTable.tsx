// components/PokedexTable.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import PokemonRow from "./PokemonRow";
import { PokemonData } from "../_component/GetPokemon";

interface PokedexTableProps {
  pokemonArray: string[];
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemonArray }) => {
  if (!pokemonArray) return <h1>No data {JSON.stringify(pokemonArray)}</h1>;
  return (
    <>
      {pokemonArray.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Pokemons</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemonArray.map((pokemon: PokemonData, index) => (
                <PokemonRow
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                  sprite={pokemon.sprite}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {pokemonArray.length === 0 && (
        <Typography variant="body1" style={{ marginTop: "20px" }}>
          No Pokemon to display
        </Typography>
      )}
    </>
  );
};

export default PokedexTable;
