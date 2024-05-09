"use client";

import { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { trpc } from "../_trpc/client";

interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  const [type, setType] = useState<string | undefined>(selectedType);
  const { data: types } = trpc.getTypes.useQuery();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string | undefined;
    setType(selectedValue);
    selectType(selectedValue);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Select Pokemon Type</InputLabel>
      <Select value={type ?? ""} onChange={handleChange}>
        {types?.map((t) => (
          <MenuItem key={t} value={t}>
            {t}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PokemonTypeSelection;
