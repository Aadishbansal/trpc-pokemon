import { PrismaClient } from "@prisma/client";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { Input } from "@mui/material";

const prisma = new PrismaClient();
const GetPokemonInput = z.string();

export const appRouter = router({
  getPokemon: publicProcedure
    .input(GetPokemonInput)
    .mutation(async ({ input }) => {
      const pokemon = await prisma.pokemon.findFirst({
        where: { name: input },
      });
      if (!pokemon) return null;
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        sprite: pokemon.sprite,
      };
    }),
    getPokemons: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: {
          name: {
            in: input,
          },
        },
      });
      return pokemons ? pokemons : [];
    }),
  getTypes: publicProcedure.query(async () => {
    const types = await prisma.pokemon.findMany({ select: { types: true } });

    const uniqueTypes = Array.from(new Set(types.flatMap((t) => t.types)));

    return uniqueTypes;
  }),
  getFilteredPokemon: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: { types: { has: input } },
      });
      return pokemons;
    }),
});

export type AppRouter = typeof appRouter;
