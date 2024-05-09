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

  return (
    <FormControl fullWidth>
      <InputLabel>Select Pokemon Type</InputLabel>
      <Select
        value={type ?? ""}
        onChange={(e) => {
          const selectedValue = e.target.value as string | undefined;
          setType(selectedValue);
          selectType(selectedValue);
        }}
      >
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
