"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { trpc } from "../_trpc/client";
import PokemonRow from "../components/PokemonRow";

export type PokemonData = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};

export default function GetPokemon() {
  const [pokemon, setPokemon] = useState("");
  const getPokemon = trpc.getPokemon.useMutation();
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const handleButtonClick = async () => {
    if (pokemon.trim() !== "") {
      const str = pokemon.trim()
      const data: any = await getPokemon.mutateAsync(str);
      setPokemonData(data);
    }
  };
  return (
    <div>
      <div>
        <TextField
          label="Enter Pokemon Name"
          id="pokemon"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <Button variant="contained" onClick={handleButtonClick}>
          Search
        </Button>
      </div>

      {pokemonData ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Types</TableCell>
              <TableCell>Sprite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PokemonRow
              id={pokemonData.id}
              name={pokemonData.name}
              types={pokemonData.types}
              sprite={pokemonData.sprite}
            />
          </TableBody>
        </Table>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
