// pages/index.tsx
"use client";

import { useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import PokedexTable from "../components/PokedexTable";
import { trpc } from "../_trpc/client";
import { PokemonData } from "./GetPokemon";

const GetPokemons = () => {
  const [pokemonNames, setPokemonNames] = useState<string>("");
  const [pokemonArray, setPokemonArray] = useState<PokemonData[]>([]);
  const getPokemons = trpc.getPokemons.useMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const names = pokemonNames.split(",");
    const validName = [];
    for (const name of names) {
      const str = name.trim();
      if (str.length) validName.push(str);
    }
    if (validName?.length) {
      const data: any = await getPokemons.mutateAsync(validName);
      setPokemonArray(data);
    }
  };

  return (
    <div >
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
        <p>Please enter comma separated pokemon name </p>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <PokedexTable pokemonArray={pokemonArray} />
    </div>
  );
};

export default GetPokemons;
