"use client";

import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { trpc } from "../_trpc/client";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "../components/PokedexTable";

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>("");
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
  const filterMutatiom = trpc.getFilteredPokemon.useMutation();

  useEffect(() => {
    if (selectedType) {
      filterMutatiom
        .mutateAsync(selectedType)
        .then((data) => {
          setFilteredPokemon(data);
        })
        .catch((error) => console.log);
    }
  }, [selectedType]);

  const handleSelectType = (type: string | undefined) => {
    setSelectedType(type);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Filterable Pokedex Table
      </Typography>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={handleSelectType}
      />
      <PokedexTable pokemonArray={filteredPokemon} />
    </div>
  );
};

export default FilterablePokedexTable;
