"use client";

import { useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import PokedexTable from "../components/PokedexTable";
import { trpc } from "../_trpc/client";
import { PokemonData } from "./GetPokemon";

const GetPokemons = () => {
  const [pokemonNames, setPokemonNames] = useState<string>("");
  const [pokemonArray, setPokemonArray] = useState<PokemonData[]>([]);
  const [queryKey, setQueryKey] = useState<string[]>([]);

  const getPokemonsQuery = trpc.getPokemons.useQuery(queryKey, {
    enabled: queryKey.length > 0,
    onSuccess: (data) => {
      setPokemonArray(data);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const names = pokemonNames.split(",");
    const validNames = names.map((name) => name.trim()).filter((name) => name.length > 0);
    if (validNames.length > 0) {
      setQueryKey(validNames);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Enter Pokemon Names
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Pokemon Names (comma-separated)"
          fullWidth
          value={pokemonNames}
          onChange={(e) => setPokemonNames(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <Typography variant="body2" color="textSecondary">
          Please enter comma-separated pokemon names.
        </Typography>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <PokedexTable pokemonArray={pokemonArray} />
    </div>
  );
};

export default GetPokemons;
