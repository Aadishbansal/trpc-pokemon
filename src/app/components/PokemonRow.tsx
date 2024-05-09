import { TableRow, TableCell, Typography, useMediaQuery } from "@mui/material";

interface PokemonRowProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonRow: React.FC<PokemonRowProps> = ({ id, name, types, sprite }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <TableRow>
      <TableCell>
        <Typography variant={isSmallScreen ? "subtitle1" : "h6"}>{name}</Typography>
      </TableCell>
      <TableCell>{id}</TableCell>
      <TableCell> {types.join(", ")}</TableCell>
      <TableCell>
        <img
          src={sprite}
          alt={name}
          style={{ maxWidth: isSmallScreen ? "80px" : "100px", maxHeight: isSmallScreen ? "80px" : "100px" }}
        />
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
