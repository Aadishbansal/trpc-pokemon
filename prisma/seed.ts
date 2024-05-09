// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
        {
          id: 1,
          name: "Bulbasaur",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png",
        },
        {
          id: 2,
          name: "Ivysaur",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png",
        },
        {
          id: 3,
          name: "Venusaur",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png",
        },
        {
          id: 4,
          name: "Venusaur",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png",
        },
        {
          id: 5,
          name: "Venusaur",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png",
        },
        {
          id: 6,
          name: "Charmander",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png",
        },
        {
          id: 7,
          name: "Charmeleon",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png",
        },
        {
          id: 8,
          name: "Charizard",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
        },
        {
          id: 9,
          name: "Charizard",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
        },
        {
          id: 10,
          name: "Charizard",
          types: [
            "fire",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
        },
        {
          id: 11,
          name: "Charizard",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
        },
        {
          id: 12,
          name: "Squirtle",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png",
        },
        {
          id: 13,
          name: "Wartortle",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/008.png",
        },
        {
          id: 14,
          name: "Blastoise",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
        },
        {
          id: 15,
          name: "Blastoise",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
        },
        {
          id: 16,
          name: "Blastoise",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/009.png",
        },
        {
          id: 17,
          name: "Caterpie",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png",
        },
        {
          id: 18,
          name: "Metapod",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/011.png",
        },
        {
          id: 19,
          name: "Butterfree",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/012.png",
        },
        {
          id: 20,
          name: "Butterfree",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/012.png",
        },
        {
          id: 21,
          name: "Weedle",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/013.png",
        },
        {
          id: 22,
          name: "Kakuna",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/014.png",
        },
        {
          id: 23,
          name: "Beedrill",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/015.png",
        },
        {
          id: 24,
          name: "Beedrill",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/015.png",
        },
        {
          id: 25,
          name: "Pidgey",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/016.png",
        },
        {
          id: 26,
          name: "Pidgeotto",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/017.png",
        },
        {
          id: 27,
          name: "Pidgeot",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/018.png",
        },
        {
          id: 28,
          name: "Pidgeot",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/018.png",
        },
        {
          id: 29,
          name: "Rattata",
          types: [
            "dark",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/019.png",
        },
        {
          id: 30,
          name: "Rattata",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/019.png",
        },
        {
          id: 31,
          name: "Raticate",
          types: [
            "dark",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/020.png",
        },
        {
          id: 32,
          name: "Raticate",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/020.png",
        },
        {
          id: 33,
          name: "Spearow",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/021.png",
        },
        {
          id: 34,
          name: "Fearow",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/022.png",
        },
        {
          id: 35,
          name: "Ekans",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/023.png",
        },
        {
          id: 36,
          name: "Arbok",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/024.png",
        },
        {
          id: 37,
          name: "Pikachu",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
        },
        {
          id: 38,
          name: "Pikachu",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
        },
        {
          id: 39,
          name: "Raichu",
          types: [
            "electric",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/026.png",
        },
        {
          id: 40,
          name: "Raichu",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/026.png",
        },
        {
          id: 41,
          name: "Sandshrew",
          types: [
            "ice",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/027.png",
        },
        {
          id: 42,
          name: "Sandshrew",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/027.png",
        },
        {
          id: 43,
          name: "Sandslash",
          types: [
            "ice",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/028.png",
        },
        {
          id: 44,
          name: "Sandslash",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/028.png",
        },
        {
          id: 45,
          name: "Nidoran♀",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/029.png",
        },
        {
          id: 46,
          name: "Nidorina",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/030.png",
        },
        {
          id: 47,
          name: "Nidoqueen",
          types: [
            "poison",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/031.png",
        },
        {
          id: 48,
          name: "Nidoran♂",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/032.png",
        },
        {
          id: 49,
          name: "Nidorino",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/033.png",
        },
        {
          id: 50,
          name: "Nidoking",
          types: [
            "poison",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/034.png",
        },
        {
          id: 51,
          name: "Clefairy",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/035.png",
        },
        {
          id: 52,
          name: "Clefable",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/036.png",
        },
        {
          id: 53,
          name: "Vulpix",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/037.png",
        },
        {
          id: 54,
          name: "Vulpix",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/037.png",
        },
        {
          id: 55,
          name: "Ninetales",
          types: [
            "ice",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/038.png",
        },
        {
          id: 56,
          name: "Ninetales",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/038.png",
        },
        {
          id: 57,
          name: "Jigglypuff",
          types: [
            "normal",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/039.png",
        },
        {
          id: 58,
          name: "Wigglytuff",
          types: [
            "normal",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/040.png",
        },
        {
          id: 59,
          name: "Zubat",
          types: [
            "poison",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/041.png",
        },
        {
          id: 60,
          name: "Golbat",
          types: [
            "poison",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/042.png",
        },
        {
          id: 61,
          name: "Oddish",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/043.png",
        },
        {
          id: 62,
          name: "Gloom",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/044.png",
        },
        {
          id: 63,
          name: "Vileplume",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/045.png",
        },
        {
          id: 64,
          name: "Paras",
          types: [
            "bug",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/046.png",
        },
        {
          id: 65,
          name: "Parasect",
          types: [
            "bug",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/047.png",
        },
        {
          id: 66,
          name: "Venonat",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/048.png",
        },
        {
          id: 67,
          name: "Venomoth",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/049.png",
        },
        {
          id: 68,
          name: "Diglett",
          types: [
            "ground",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/050.png",
        },
        {
          id: 69,
          name: "Diglett",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/050.png",
        },
        {
          id: 70,
          name: "Dugtrio",
          types: [
            "ground",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/051.png",
        },
        {
          id: 71,
          name: "Dugtrio",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/051.png",
        },
        {
          id: 72,
          name: "Meowth",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/052.png",
        },
        {
          id: 73,
          name: "Meowth",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/052.png",
        },
        {
          id: 74,
          name: "Meowth",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/052.png",
        },
        {
          id: 75,
          name: "Meowth",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/052.png",
        },
        {
          id: 76,
          name: "Persian",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/053.png",
        },
        {
          id: 77,
          name: "Persian",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/053.png",
        },
        {
          id: 78,
          name: "Psyduck",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/054.png",
        },
        {
          id: 79,
          name: "Golduck",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/055.png",
        },
        {
          id: 80,
          name: "Mankey",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/056.png",
        },
        {
          id: 81,
          name: "Primeape",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/057.png",
        },
        {
          id: 82,
          name: "Growlithe",
          types: [
            "fire",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/058.png",
        },
        {
          id: 83,
          name: "Growlithe",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/058.png",
        },
        {
          id: 84,
          name: "Arcanine",
          types: [
            "fire",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/059.png",
        },
        {
          id: 85,
          name: "Arcanine",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/059.png",
        },
        {
          id: 86,
          name: "Poliwag",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/060.png",
        },
        {
          id: 87,
          name: "Poliwhirl",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/061.png",
        },
        {
          id: 88,
          name: "Poliwrath",
          types: [
            "water",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/062.png",
        },
        {
          id: 89,
          name: "Abra",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/063.png",
        },
        {
          id: 90,
          name: "Kadabra",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/064.png",
        },
        {
          id: 91,
          name: "Alakazam",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/065.png",
        },
        {
          id: 92,
          name: "Alakazam",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/065.png",
        },
        {
          id: 93,
          name: "Machop",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/066.png",
        },
        {
          id: 94,
          name: "Machoke",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/067.png",
        },
        {
          id: 95,
          name: "Machamp",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/068.png",
        },
        {
          id: 96,
          name: "Machamp",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/068.png",
        },
        {
          id: 97,
          name: "Bellsprout",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/069.png",
        },
        {
          id: 98,
          name: "Weepinbell",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/070.png",
        },
        {
          id: 99,
          name: "Victreebel",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/071.png",
        },
        {
          id: 100,
          name: "Tentacool",
          types: [
            "water",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/072.png",
        },
        {
          id: 101,
          name: "Tentacruel",
          types: [
            "water",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/073.png",
        },
        {
          id: 102,
          name: "Geodude",
          types: [
            "rock",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/074.png",
        },
        {
          id: 103,
          name: "Geodude",
          types: [
            "rock",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/074.png",
        },
        {
          id: 104,
          name: "Graveler",
          types: [
            "rock",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/075.png",
        },
        {
          id: 105,
          name: "Graveler",
          types: [
            "rock",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/075.png",
        },
        {
          id: 106,
          name: "Golem",
          types: [
            "rock",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/076.png",
        },
        {
          id: 107,
          name: "Golem",
          types: [
            "rock",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/076.png",
        },
        {
          id: 108,
          name: "Ponyta",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/077.png",
        },
        {
          id: 109,
          name: "Ponyta",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/077.png",
        },
        {
          id: 110,
          name: "Rapidash",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/078.png",
        },
        {
          id: 111,
          name: "Rapidash",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/078.png",
        },
        {
          id: 112,
          name: "Slowpoke",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/079.png",
        },
        {
          id: 113,
          name: "Slowpoke",
          types: [
            "water",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/079.png",
        },
        {
          id: 114,
          name: "Slowbro",
          types: [
            "poison",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/080.png",
        },
        {
          id: 115,
          name: "Slowbro",
          types: [
            "water",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/080.png",
        },
        {
          id: 116,
          name: "Slowbro",
          types: [
            "water",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/080.png",
        },
        {
          id: 117,
          name: "Magnemite",
          types: [
            "electric",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/081.png",
        },
        {
          id: 118,
          name: "Magneton",
          types: [
            "electric",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/082.png",
        },
        {
          id: 119,
          name: "Farfetch’d",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/083.png",
        },
        {
          id: 120,
          name: "Farfetch’d",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/083.png",
        },
        {
          id: 121,
          name: "Doduo",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/084.png",
        },
        {
          id: 122,
          name: "Dodrio",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/085.png",
        },
        {
          id: 123,
          name: "Seel",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/086.png",
        },
        {
          id: 124,
          name: "Dewgong",
          types: [
            "water",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/087.png",
        },
        {
          id: 125,
          name: "Grimer",
          types: [
            "poison",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/088.png",
        },
        {
          id: 126,
          name: "Grimer",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/088.png",
        },
        {
          id: 127,
          name: "Muk",
          types: [
            "poison",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/089.png",
        },
        {
          id: 128,
          name: "Muk",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/089.png",
        },
        {
          id: 129,
          name: "Shellder",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/090.png",
        },
        {
          id: 130,
          name: "Cloyster",
          types: [
            "water",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/091.png",
        },
        {
          id: 131,
          name: "Gastly",
          types: [
            "ghost",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/092.png",
        },
        {
          id: 132,
          name: "Haunter",
          types: [
            "ghost",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/093.png",
        },
        {
          id: 133,
          name: "Gengar",
          types: [
            "ghost",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/094.png",
        },
        {
          id: 134,
          name: "Gengar",
          types: [
            "ghost",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/094.png",
        },
        {
          id: 135,
          name: "Gengar",
          types: [
            "ghost",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/094.png",
        },
        {
          id: 136,
          name: "Onix",
          types: [
            "rock",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/095.png",
        },
        {
          id: 137,
          name: "Drowzee",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/096.png",
        },
        {
          id: 138,
          name: "Hypno",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/097.png",
        },
        {
          id: 139,
          name: "Krabby",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/098.png",
        },
        {
          id: 140,
          name: "Kingler",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/099.png",
        },
        {
          id: 141,
          name: "Kingler",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/099.png",
        },
        {
          id: 142,
          name: "Voltorb",
          types: [
            "electric",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/100.png",
        },
        {
          id: 143,
          name: "Voltorb",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/100.png",
        },
        {
          id: 144,
          name: "Electrode",
          types: [
            "electric",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/101.png",
        },
        {
          id: 145,
          name: "Electrode",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/101.png",
        },
        {
          id: 146,
          name: "Exeggcute",
          types: [
            "grass",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/102.png",
        },
        {
          id: 147,
          name: "Exeggutor",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/103.png",
        },
        {
          id: 148,
          name: "Exeggutor",
          types: [
            "grass",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/103.png",
        },
        {
          id: 149,
          name: "Cubone",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/104.png",
        },
        {
          id: 150,
          name: "Marowak",
          types: [
            "fire",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/105.png",
        },
        {
          id: 151,
          name: "Marowak",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/105.png",
        },
        {
          id: 152,
          name: "Hitmonlee",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/106.png",
        },
        {
          id: 153,
          name: "Hitmonchan",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/107.png",
        },
        {
          id: 154,
          name: "Lickitung",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/108.png",
        },
        {
          id: 155,
          name: "Koffing",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/109.png",
        },
        {
          id: 156,
          name: "Weezing",
          types: [
            "poison",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/110.png",
        },
        {
          id: 157,
          name: "Weezing",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/110.png",
        },
        {
          id: 158,
          name: "Rhyhorn",
          types: [
            "ground",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/111.png",
        },
        {
          id: 159,
          name: "Rhydon",
          types: [
            "ground",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/112.png",
        },
        {
          id: 160,
          name: "Chansey",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/113.png",
        },
        {
          id: 161,
          name: "Tangela",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/114.png",
        },
        {
          id: 162,
          name: "Kangaskhan",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/115.png",
        },
        {
          id: 163,
          name: "Kangaskhan",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/115.png",
        },
        {
          id: 164,
          name: "Horsea",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/116.png",
        },
        {
          id: 165,
          name: "Seadra",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/117.png",
        },
        {
          id: 166,
          name: "Goldeen",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/118.png",
        },
        {
          id: 167,
          name: "Seaking",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/119.png",
        },
        {
          id: 168,
          name: "Staryu",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/120.png",
        },
        {
          id: 169,
          name: "Starmie",
          types: [
            "water",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/121.png",
        },
        {
          id: 170,
          name: "Mr. Mime",
          types: [
            "ice",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/122.png",
        },
        {
          id: 171,
          name: "Mr. Mime",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/122.png",
        },
        {
          id: 172,
          name: "Scyther",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/123.png",
        },
        {
          id: 173,
          name: "Jynx",
          types: [
            "ice",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/124.png",
        },
        {
          id: 174,
          name: "Electabuzz",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/125.png",
        },
        {
          id: 175,
          name: "Magmar",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/126.png",
        },
        {
          id: 176,
          name: "Pinsir",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/127.png",
        },
        {
          id: 177,
          name: "Pinsir",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/127.png",
        },
        {
          id: 178,
          name: "Tauros",
          types: [
            "fighting",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/128.png",
        },
        {
          id: 179,
          name: "Tauros",
          types: [
            "fighting",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/128.png",
        },
        {
          id: 180,
          name: "Tauros",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/128.png",
        },
        {
          id: 181,
          name: "Tauros",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/128.png",
        },
        {
          id: 182,
          name: "Magikarp",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/129.png",
        },
        {
          id: 183,
          name: "Gyarados",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/130.png",
        },
        {
          id: 184,
          name: "Gyarados",
          types: [
            "water",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/130.png",
        },
        {
          id: 185,
          name: "Lapras",
          types: [
            "water",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/131.png",
        },
        {
          id: 186,
          name: "Lapras",
          types: [
            "water",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/131.png",
        },
        {
          id: 187,
          name: "Ditto",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/132.png",
        },
        {
          id: 188,
          name: "Eevee",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/133.png",
        },
        {
          id: 189,
          name: "Eevee",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/133.png",
        },
        {
          id: 190,
          name: "Vaporeon",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/134.png",
        },
        {
          id: 191,
          name: "Jolteon",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/135.png",
        },
        {
          id: 192,
          name: "Flareon",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/136.png",
        },
        {
          id: 193,
          name: "Porygon",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/137.png",
        },
        {
          id: 194,
          name: "Omanyte",
          types: [
            "rock",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/138.png",
        },
        {
          id: 195,
          name: "Omastar",
          types: [
            "rock",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/139.png",
        },
        {
          id: 196,
          name: "Kabuto",
          types: [
            "rock",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/140.png",
        },
        {
          id: 197,
          name: "Kabutops",
          types: [
            "rock",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/141.png",
        },
        {
          id: 198,
          name: "Aerodactyl",
          types: [
            "rock",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/142.png",
        },
        {
          id: 199,
          name: "Aerodactyl",
          types: [
            "rock",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/142.png",
        },
        {
          id: 200,
          name: "Snorlax",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/143.png",
        },
        {
          id: 201,
          name: "Snorlax",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/143.png",
        },
        {
          id: 202,
          name: "Articuno",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/144.png",
        },
        {
          id: 203,
          name: "Articuno",
          types: [
            "ice",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/144.png",
        },
        {
          id: 204,
          name: "Zapdos",
          types: [
            "fighting",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/145.png",
        },
        {
          id: 205,
          name: "Zapdos",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/145.png",
        },
        {
          id: 206,
          name: "Moltres",
          types: [
            "dark",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/146.png",
        },
        {
          id: 207,
          name: "Moltres",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/146.png",
        },
        {
          id: 208,
          name: "Dratini",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/147.png",
        },
        {
          id: 209,
          name: "Dragonair",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/148.png",
        },
        {
          id: 210,
          name: "Dragonite",
          types: [
            "dragon",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/149.png",
        },
        {
          id: 211,
          name: "Mewtwo",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/150.png",
        },
        {
          id: 212,
          name: "Mewtwo",
          types: [
            "psychic",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/150.png",
        },
        {
          id: 213,
          name: "Mewtwo",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/150.png",
        },
        {
          id: 214,
          name: "Mew",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/151.png",
        },
        {
          id: 215,
          name: "Chikorita",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/152.png",
        },
        {
          id: 216,
          name: "Bayleef",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/153.png",
        },
        {
          id: 217,
          name: "Meganium",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/154.png",
        },
        {
          id: 218,
          name: "Cyndaquil",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/155.png",
        },
        {
          id: 219,
          name: "Quilava",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/156.png",
        },
        {
          id: 220,
          name: "Typhlosion",
          types: [
            "fire",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/157.png",
        },
        {
          id: 221,
          name: "Typhlosion",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/157.png",
        },
        {
          id: 222,
          name: "Totodile",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/158.png",
        },
        {
          id: 223,
          name: "Croconaw",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/159.png",
        },
        {
          id: 224,
          name: "Feraligatr",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/160.png",
        },
        {
          id: 225,
          name: "Sentret",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/161.png",
        },
        {
          id: 226,
          name: "Furret",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/162.png",
        },
        {
          id: 227,
          name: "Hoothoot",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/163.png",
        },
        {
          id: 228,
          name: "Noctowl",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/164.png",
        },
        {
          id: 229,
          name: "Ledyba",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/165.png",
        },
        {
          id: 230,
          name: "Ledian",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/166.png",
        },
        {
          id: 231,
          name: "Spinarak",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/167.png",
        },
        {
          id: 232,
          name: "Ariados",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/168.png",
        },
        {
          id: 233,
          name: "Crobat",
          types: [
            "poison",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/169.png",
        },
        {
          id: 234,
          name: "Chinchou",
          types: [
            "water",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/170.png",
        },
        {
          id: 235,
          name: "Lanturn",
          types: [
            "water",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/171.png",
        },
        {
          id: 236,
          name: "Pichu",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/172.png",
        },
        {
          id: 237,
          name: "Cleffa",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/173.png",
        },
        {
          id: 238,
          name: "Igglybuff",
          types: [
            "normal",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/174.png",
        },
        {
          id: 239,
          name: "Togepi",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/175.png",
        },
        {
          id: 240,
          name: "Togetic",
          types: [
            "fairy",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/176.png",
        },
        {
          id: 241,
          name: "Natu",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/177.png",
        },
        {
          id: 242,
          name: "Xatu",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/178.png",
        },
        {
          id: 243,
          name: "Mareep",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/179.png",
        },
        {
          id: 244,
          name: "Flaaffy",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/180.png",
        },
        {
          id: 245,
          name: "Ampharos",
          types: [
            "electric",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/181.png",
        },
        {
          id: 246,
          name: "Ampharos",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/181.png",
        },
        {
          id: 247,
          name: "Bellossom",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/182.png",
        },
        {
          id: 248,
          name: "Marill",
          types: [
            "water",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/183.png",
        },
        {
          id: 249,
          name: "Azumarill",
          types: [
            "water",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/184.png",
        },
        {
          id: 250,
          name: "Sudowoodo",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/185.png",
        },
        {
          id: 251,
          name: "Politoed",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/186.png",
        },
        {
          id: 252,
          name: "Hoppip",
          types: [
            "grass",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/187.png",
        },
        {
          id: 253,
          name: "Skiploom",
          types: [
            "grass",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/188.png",
        },
        {
          id: 254,
          name: "Jumpluff",
          types: [
            "grass",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/189.png",
        },
        {
          id: 255,
          name: "Aipom",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/190.png",
        },
        {
          id: 256,
          name: "Sunkern",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/191.png",
        },
        {
          id: 257,
          name: "Sunflora",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/192.png",
        },
        {
          id: 258,
          name: "Yanma",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/193.png",
        },
        {
          id: 259,
          name: "Wooper",
          types: [
            "poison",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/194.png",
        },
        {
          id: 260,
          name: "Wooper",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/194.png",
        },
        {
          id: 261,
          name: "Quagsire",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/195.png",
        },
        {
          id: 262,
          name: "Espeon",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/196.png",
        },
        {
          id: 263,
          name: "Umbreon",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/197.png",
        },
        {
          id: 264,
          name: "Murkrow",
          types: [
            "dark",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/198.png",
        },
        {
          id: 265,
          name: "Slowking",
          types: [
            "poison",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/199.png",
        },
        {
          id: 266,
          name: "Slowking",
          types: [
            "water",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/199.png",
        },
        {
          id: 267,
          name: "Misdreavus",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/200.png",
        },
        {
          id: 268,
          name: "Unown",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/201.png",
        },
        {
          id: 269,
          name: "Wobbuffet",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/202.png",
        },
        {
          id: 270,
          name: "Girafarig",
          types: [
            "normal",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/203.png",
        },
        {
          id: 271,
          name: "Pineco",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/204.png",
        },
        {
          id: 272,
          name: "Forretress",
          types: [
            "bug",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/205.png",
        },
        {
          id: 273,
          name: "Dunsparce",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/206.png",
        },
        {
          id: 274,
          name: "Gligar",
          types: [
            "ground",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/207.png",
        },
        {
          id: 275,
          name: "Steelix",
          types: [
            "steel",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/208.png",
        },
        {
          id: 276,
          name: "Steelix",
          types: [
            "steel",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/208.png",
        },
        {
          id: 277,
          name: "Snubbull",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/209.png",
        },
        {
          id: 278,
          name: "Granbull",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/210.png",
        },
        {
          id: 279,
          name: "Qwilfish",
          types: [
            "dark",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/211.png",
        },
        {
          id: 280,
          name: "Qwilfish",
          types: [
            "water",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/211.png",
        },
        {
          id: 281,
          name: "Scizor",
          types: [
            "bug",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/212.png",
        },
        {
          id: 282,
          name: "Scizor",
          types: [
            "bug",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/212.png",
        },
        {
          id: 283,
          name: "Shuckle",
          types: [
            "bug",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/213.png",
        },
        {
          id: 284,
          name: "Heracross",
          types: [
            "bug",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/214.png",
        },
        {
          id: 285,
          name: "Heracross",
          types: [
            "bug",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/214.png",
        },
        {
          id: 286,
          name: "Sneasel",
          types: [
            "fighting",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/215.png",
        },
        {
          id: 287,
          name: "Sneasel",
          types: [
            "dark",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/215.png",
        },
        {
          id: 288,
          name: "Teddiursa",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/216.png",
        },
        {
          id: 289,
          name: "Ursaring",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/217.png",
        },
        {
          id: 290,
          name: "Slugma",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/218.png",
        },
        {
          id: 291,
          name: "Magcargo",
          types: [
            "fire",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/219.png",
        },
        {
          id: 292,
          name: "Swinub",
          types: [
            "ice",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/220.png",
        },
        {
          id: 293,
          name: "Piloswine",
          types: [
            "ice",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/221.png",
        },
        {
          id: 294,
          name: "Corsola",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/222.png",
        },
        {
          id: 295,
          name: "Corsola",
          types: [
            "water",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/222.png",
        },
        {
          id: 296,
          name: "Remoraid",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/223.png",
        },
        {
          id: 297,
          name: "Octillery",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/224.png",
        },
        {
          id: 298,
          name: "Delibird",
          types: [
            "ice",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/225.png",
        },
        {
          id: 299,
          name: "Mantine",
          types: [
            "water",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/226.png",
        },
        {
          id: 300,
          name: "Skarmory",
          types: [
            "steel",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/227.png",
        },
        {
          id: 301,
          name: "Houndour",
          types: [
            "dark",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/228.png",
        },
        {
          id: 302,
          name: "Houndoom",
          types: [
            "dark",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/229.png",
        },
        {
          id: 303,
          name: "Houndoom",
          types: [
            "dark",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/229.png",
        },
        {
          id: 304,
          name: "Kingdra",
          types: [
            "water",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/230.png",
        },
        {
          id: 305,
          name: "Phanpy",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/231.png",
        },
        {
          id: 306,
          name: "Donphan",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/232.png",
        },
        {
          id: 307,
          name: "Porygon2",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/233.png",
        },
        {
          id: 308,
          name: "Stantler",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/234.png",
        },
        {
          id: 309,
          name: "Smeargle",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/235.png",
        },
        {
          id: 310,
          name: "Tyrogue",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/236.png",
        },
        {
          id: 311,
          name: "Hitmontop",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/237.png",
        },
        {
          id: 312,
          name: "Smoochum",
          types: [
            "ice",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/238.png",
        },
        {
          id: 313,
          name: "Elekid",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/239.png",
        },
        {
          id: 314,
          name: "Magby",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/240.png",
        },
        {
          id: 315,
          name: "Miltank",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/241.png",
        },
        {
          id: 316,
          name: "Blissey",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/242.png",
        },
        {
          id: 317,
          name: "Raikou",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/243.png",
        },
        {
          id: 318,
          name: "Entei",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/244.png",
        },
        {
          id: 319,
          name: "Suicune",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/245.png",
        },
        {
          id: 320,
          name: "Larvitar",
          types: [
            "rock",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/246.png",
        },
        {
          id: 321,
          name: "Pupitar",
          types: [
            "rock",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/247.png",
        },
        {
          id: 322,
          name: "Tyranitar",
          types: [
            "rock",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/248.png",
        },
        {
          id: 323,
          name: "Tyranitar",
          types: [
            "rock",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/248.png",
        },
        {
          id: 324,
          name: "Lugia",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/249.png",
        },
        {
          id: 325,
          name: "Ho-Oh",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/250.png",
        },
        {
          id: 326,
          name: "Celebi",
          types: [
            "psychic",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/251.png",
        },
        {
          id: 327,
          name: "Treecko",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/252.png",
        },
        {
          id: 328,
          name: "Grovyle",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/253.png",
        },
        {
          id: 329,
          name: "Sceptile",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/254.png",
        },
        {
          id: 330,
          name: "Sceptile",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/254.png",
        },
        {
          id: 331,
          name: "Torchic",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/255.png",
        },
        {
          id: 332,
          name: "Combusken",
          types: [
            "fire",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/256.png",
        },
        {
          id: 333,
          name: "Blaziken",
          types: [
            "fire",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/257.png",
        },
        {
          id: 334,
          name: "Blaziken",
          types: [
            "fire",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/257.png",
        },
        {
          id: 335,
          name: "Mudkip",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/258.png",
        },
        {
          id: 336,
          name: "Marshtomp",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/259.png",
        },
        {
          id: 337,
          name: "Swampert",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/260.png",
        },
        {
          id: 338,
          name: "Swampert",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/260.png",
        },
        {
          id: 339,
          name: "Poochyena",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/261.png",
        },
        {
          id: 340,
          name: "Mightyena",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/262.png",
        },
        {
          id: 341,
          name: "Zigzagoon",
          types: [
            "dark",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/263.png",
        },
        {
          id: 342,
          name: "Zigzagoon",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/263.png",
        },
        {
          id: 343,
          name: "Linoone",
          types: [
            "dark",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/264.png",
        },
        {
          id: 344,
          name: "Linoone",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/264.png",
        },
        {
          id: 345,
          name: "Wurmple",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/265.png",
        },
        {
          id: 346,
          name: "Silcoon",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/266.png",
        },
        {
          id: 347,
          name: "Beautifly",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/267.png",
        },
        {
          id: 348,
          name: "Cascoon",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/268.png",
        },
        {
          id: 349,
          name: "Dustox",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/269.png",
        },
        {
          id: 350,
          name: "Lotad",
          types: [
            "water",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/270.png",
        },
        {
          id: 351,
          name: "Lombre",
          types: [
            "water",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/271.png",
        },
        {
          id: 352,
          name: "Ludicolo",
          types: [
            "water",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/272.png",
        },
        {
          id: 353,
          name: "Seedot",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/273.png",
        },
        {
          id: 354,
          name: "Nuzleaf",
          types: [
            "grass",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/274.png",
        },
        {
          id: 355,
          name: "Shiftry",
          types: [
            "grass",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/275.png",
        },
        {
          id: 356,
          name: "Taillow",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/276.png",
        },
        {
          id: 357,
          name: "Swellow",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/277.png",
        },
        {
          id: 358,
          name: "Wingull",
          types: [
            "water",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/278.png",
        },
        {
          id: 359,
          name: "Pelipper",
          types: [
            "water",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/279.png",
        },
        {
          id: 360,
          name: "Ralts",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/280.png",
        },
        {
          id: 361,
          name: "Kirlia",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/281.png",
        },
        {
          id: 362,
          name: "Gardevoir",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/282.png",
        },
        {
          id: 363,
          name: "Gardevoir",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/282.png",
        },
        {
          id: 364,
          name: "Surskit",
          types: [
            "bug",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/283.png",
        },
        {
          id: 365,
          name: "Masquerain",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/284.png",
        },
        {
          id: 366,
          name: "Shroomish",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/285.png",
        },
        {
          id: 367,
          name: "Breloom",
          types: [
            "grass",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/286.png",
        },
        {
          id: 368,
          name: "Slakoth",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/287.png",
        },
        {
          id: 369,
          name: "Vigoroth",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/288.png",
        },
        {
          id: 370,
          name: "Slaking",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/289.png",
        },
        {
          id: 371,
          name: "Nincada",
          types: [
            "bug",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/290.png",
        },
        {
          id: 372,
          name: "Ninjask",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/291.png",
        },
        {
          id: 373,
          name: "Shedinja",
          types: [
            "bug",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/292.png",
        },
        {
          id: 374,
          name: "Whismur",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/293.png",
        },
        {
          id: 375,
          name: "Loudred",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/294.png",
        },
        {
          id: 376,
          name: "Exploud",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/295.png",
        },
        {
          id: 377,
          name: "Makuhita",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/296.png",
        },
        {
          id: 378,
          name: "Hariyama",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/297.png",
        },
        {
          id: 379,
          name: "Azurill",
          types: [
            "normal",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/298.png",
        },
        {
          id: 380,
          name: "Nosepass",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/299.png",
        },
        {
          id: 381,
          name: "Skitty",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/300.png",
        },
        {
          id: 382,
          name: "Delcatty",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/301.png",
        },
        {
          id: 383,
          name: "Sableye",
          types: [
            "dark",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/302.png",
        },
        {
          id: 384,
          name: "Sableye",
          types: [
            "dark",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/302.png",
        },
        {
          id: 385,
          name: "Mawile",
          types: [
            "steel",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/303.png",
        },
        {
          id: 386,
          name: "Mawile",
          types: [
            "steel",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/303.png",
        },
        {
          id: 387,
          name: "Aron",
          types: [
            "steel",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/304.png",
        },
        {
          id: 388,
          name: "Lairon",
          types: [
            "steel",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/305.png",
        },
        {
          id: 389,
          name: "Aggron",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/306.png",
        },
        {
          id: 390,
          name: "Aggron",
          types: [
            "steel",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/306.png",
        },
        {
          id: 391,
          name: "Meditite",
          types: [
            "fighting",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/307.png",
        },
        {
          id: 392,
          name: "Medicham",
          types: [
            "fighting",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/308.png",
        },
        {
          id: 393,
          name: "Medicham",
          types: [
            "fighting",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/308.png",
        },
        {
          id: 394,
          name: "Electrike",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/309.png",
        },
        {
          id: 395,
          name: "Manectric",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/310.png",
        },
        {
          id: 396,
          name: "Manectric",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/310.png",
        },
        {
          id: 397,
          name: "Plusle",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/311.png",
        },
        {
          id: 398,
          name: "Minun",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/312.png",
        },
        {
          id: 399,
          name: "Volbeat",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/313.png",
        },
        {
          id: 400,
          name: "Illumise",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/314.png",
        },
        {
          id: 401,
          name: "Roselia",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/315.png",
        },
        {
          id: 402,
          name: "Gulpin",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/316.png",
        },
        {
          id: 403,
          name: "Swalot",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/317.png",
        },
        {
          id: 404,
          name: "Carvanha",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/318.png",
        },
        {
          id: 405,
          name: "Sharpedo",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/319.png",
        },
        {
          id: 406,
          name: "Sharpedo",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/319.png",
        },
        {
          id: 407,
          name: "Wailmer",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/320.png",
        },
        {
          id: 408,
          name: "Wailord",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/321.png",
        },
        {
          id: 409,
          name: "Numel",
          types: [
            "fire",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/322.png",
        },
        {
          id: 410,
          name: "Camerupt",
          types: [
            "fire",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/323.png",
        },
        {
          id: 411,
          name: "Camerupt",
          types: [
            "fire",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/323.png",
        },
        {
          id: 412,
          name: "Torkoal",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/324.png",
        },
        {
          id: 413,
          name: "Spoink",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/325.png",
        },
        {
          id: 414,
          name: "Grumpig",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/326.png",
        },
        {
          id: 415,
          name: "Spinda",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/327.png",
        },
        {
          id: 416,
          name: "Trapinch",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/328.png",
        },
        {
          id: 417,
          name: "Vibrava",
          types: [
            "ground",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/329.png",
        },
        {
          id: 418,
          name: "Flygon",
          types: [
            "ground",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/330.png",
        },
        {
          id: 419,
          name: "Cacnea",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/331.png",
        },
        {
          id: 420,
          name: "Cacturne",
          types: [
            "grass",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/332.png",
        },
        {
          id: 421,
          name: "Swablu",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/333.png",
        },
        {
          id: 422,
          name: "Altaria",
          types: [
            "dragon",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/334.png",
        },
        {
          id: 423,
          name: "Altaria",
          types: [
            "dragon",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/334.png",
        },
        {
          id: 424,
          name: "Zangoose",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/335.png",
        },
        {
          id: 425,
          name: "Seviper",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/336.png",
        },
        {
          id: 426,
          name: "Lunatone",
          types: [
            "rock",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/337.png",
        },
        {
          id: 427,
          name: "Solrock",
          types: [
            "rock",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/338.png",
        },
        {
          id: 428,
          name: "Barboach",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/339.png",
        },
        {
          id: 429,
          name: "Whiscash",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/340.png",
        },
        {
          id: 430,
          name: "Corphish",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/341.png",
        },
        {
          id: 431,
          name: "Crawdaunt",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/342.png",
        },
        {
          id: 432,
          name: "Baltoy",
          types: [
            "ground",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/343.png",
        },
        {
          id: 433,
          name: "Claydol",
          types: [
            "ground",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/344.png",
        },
        {
          id: 434,
          name: "Lileep",
          types: [
            "rock",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/345.png",
        },
        {
          id: 435,
          name: "Cradily",
          types: [
            "rock",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/346.png",
        },
        {
          id: 436,
          name: "Anorith",
          types: [
            "rock",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/347.png",
        },
        {
          id: 437,
          name: "Armaldo",
          types: [
            "rock",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/348.png",
        },
        {
          id: 438,
          name: "Feebas",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/349.png",
        },
        {
          id: 439,
          name: "Milotic",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/350.png",
        },
        {
          id: 440,
          name: "Castform",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/351.png",
        },
        {
          id: 441,
          name: "Kecleon",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/352.png",
        },
        {
          id: 442,
          name: "Shuppet",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/353.png",
        },
        {
          id: 443,
          name: "Banette",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/354.png",
        },
        {
          id: 444,
          name: "Banette",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/354.png",
        },
        {
          id: 445,
          name: "Duskull",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/355.png",
        },
        {
          id: 446,
          name: "Dusclops",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/356.png",
        },
        {
          id: 447,
          name: "Tropius",
          types: [
            "grass",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/357.png",
        },
        {
          id: 448,
          name: "Chimecho",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/358.png",
        },
        {
          id: 449,
          name: "Absol",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/359.png",
        },
        {
          id: 450,
          name: "Absol",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/359.png",
        },
        {
          id: 451,
          name: "Wynaut",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/360.png",
        },
        {
          id: 452,
          name: "Snorunt",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/361.png",
        },
        {
          id: 453,
          name: "Glalie",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/362.png",
        },
        {
          id: 454,
          name: "Glalie",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/362.png",
        },
        {
          id: 455,
          name: "Spheal",
          types: [
            "ice",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/363.png",
        },
        {
          id: 456,
          name: "Sealeo",
          types: [
            "ice",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/364.png",
        },
        {
          id: 457,
          name: "Walrein",
          types: [
            "ice",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/365.png",
        },
        {
          id: 458,
          name: "Clamperl",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/366.png",
        },
        {
          id: 459,
          name: "Huntail",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/367.png",
        },
        {
          id: 460,
          name: "Gorebyss",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/368.png",
        },
        {
          id: 461,
          name: "Relicanth",
          types: [
            "water",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/369.png",
        },
        {
          id: 462,
          name: "Luvdisc",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/370.png",
        },
        {
          id: 463,
          name: "Bagon",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/371.png",
        },
        {
          id: 464,
          name: "Shelgon",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/372.png",
        },
        {
          id: 465,
          name: "Salamence",
          types: [
            "dragon",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/373.png",
        },
        {
          id: 466,
          name: "Salamence",
          types: [
            "dragon",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/373.png",
        },
        {
          id: 467,
          name: "Beldum",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/374.png",
        },
        {
          id: 468,
          name: "Metang",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/375.png",
        },
        {
          id: 469,
          name: "Metagross",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/376.png",
        },
        {
          id: 470,
          name: "Metagross",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/376.png",
        },
        {
          id: 471,
          name: "Regirock",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/377.png",
        },
        {
          id: 472,
          name: "Regice",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/378.png",
        },
        {
          id: 473,
          name: "Registeel",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/379.png",
        },
        {
          id: 474,
          name: "Latias",
          types: [
            "dragon",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/380.png",
        },
        {
          id: 475,
          name: "Latias",
          types: [
            "dragon",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/380.png",
        },
        {
          id: 476,
          name: "Latios",
          types: [
            "dragon",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/381.png",
        },
        {
          id: 477,
          name: "Latios",
          types: [
            "dragon",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/381.png",
        },
        {
          id: 478,
          name: "Kyogre",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/382.png",
        },
        {
          id: 479,
          name: "Kyogre",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/382.png",
        },
        {
          id: 480,
          name: "Groudon",
          types: [
            "ground",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/383.png",
        },
        {
          id: 481,
          name: "Groudon",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/383.png",
        },
        {
          id: 482,
          name: "Rayquaza",
          types: [
            "dragon",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/384.png",
        },
        {
          id: 483,
          name: "Rayquaza",
          types: [
            "dragon",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/384.png",
        },
        {
          id: 484,
          name: "Jirachi",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/385.png",
        },
        {
          id: 485,
          name: "Deoxys",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/386.png",
        },
        {
          id: 486,
          name: "Deoxys",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/386.png",
        },
        {
          id: 487,
          name: "Deoxys",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/386.png",
        },
        {
          id: 488,
          name: "Deoxys",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/386.png",
        },
        {
          id: 489,
          name: "Turtwig",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/387.png",
        },
        {
          id: 490,
          name: "Grotle",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/388.png",
        },
        {
          id: 491,
          name: "Torterra",
          types: [
            "grass",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/389.png",
        },
        {
          id: 492,
          name: "Chimchar",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/390.png",
        },
        {
          id: 493,
          name: "Monferno",
          types: [
            "fire",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/391.png",
        },
        {
          id: 494,
          name: "Infernape",
          types: [
            "fire",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/392.png",
        },
        {
          id: 495,
          name: "Piplup",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/393.png",
        },
        {
          id: 496,
          name: "Prinplup",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/394.png",
        },
        {
          id: 497,
          name: "Empoleon",
          types: [
            "water",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/395.png",
        },
        {
          id: 498,
          name: "Starly",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/396.png",
        },
        {
          id: 499,
          name: "Staravia",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/397.png",
        },
        {
          id: 500,
          name: "Staraptor",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/398.png",
        },
        {
          id: 501,
          name: "Bidoof",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/399.png",
        },
        {
          id: 502,
          name: "Bibarel",
          types: [
            "normal",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/400.png",
        },
        {
          id: 503,
          name: "Kricketot",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/401.png",
        },
        {
          id: 504,
          name: "Kricketune",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/402.png",
        },
        {
          id: 505,
          name: "Shinx",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/403.png",
        },
        {
          id: 506,
          name: "Luxio",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/404.png",
        },
        {
          id: 507,
          name: "Luxray",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/405.png",
        },
        {
          id: 508,
          name: "Budew",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/406.png",
        },
        {
          id: 509,
          name: "Roserade",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/407.png",
        },
        {
          id: 510,
          name: "Cranidos",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/408.png",
        },
        {
          id: 511,
          name: "Rampardos",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/409.png",
        },
        {
          id: 512,
          name: "Shieldon",
          types: [
            "rock",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/410.png",
        },
        {
          id: 513,
          name: "Bastiodon",
          types: [
            "rock",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/411.png",
        },
        {
          id: 514,
          name: "Burmy",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/412.png",
        },
        {
          id: 515,
          name: "Burmy",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/412.png",
        },
        {
          id: 516,
          name: "Burmy",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/412.png",
        },
        {
          id: 517,
          name: "Wormadam",
          types: [
            "bug",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/413.png",
        },
        {
          id: 518,
          name: "Wormadam",
          types: [
            "bug",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/413.png",
        },
        {
          id: 519,
          name: "Wormadam",
          types: [
            "bug",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/413.png",
        },
        {
          id: 520,
          name: "Mothim",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/414.png",
        },
        {
          id: 521,
          name: "Combee",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/415.png",
        },
        {
          id: 522,
          name: "Vespiquen",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/416.png",
        },
        {
          id: 523,
          name: "Pachirisu",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/417.png",
        },
        {
          id: 524,
          name: "Buizel",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/418.png",
        },
        {
          id: 525,
          name: "Floatzel",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/419.png",
        },
        {
          id: 526,
          name: "Cherubi",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/420.png",
        },
        {
          id: 527,
          name: "Cherrim",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/421.png",
        },
        {
          id: 528,
          name: "Cherrim",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/421.png",
        },
        {
          id: 529,
          name: "Shellos",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/422.png",
        },
        {
          id: 530,
          name: "Shellos",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/422.png",
        },
        {
          id: 531,
          name: "Gastrodon",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/423.png",
        },
        {
          id: 532,
          name: "Gastrodon",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/423.png",
        },
        {
          id: 533,
          name: "Ambipom",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/424.png",
        },
        {
          id: 534,
          name: "Drifloon",
          types: [
            "ghost",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/425.png",
        },
        {
          id: 535,
          name: "Drifblim",
          types: [
            "ghost",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/426.png",
        },
        {
          id: 536,
          name: "Buneary",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/427.png",
        },
        {
          id: 537,
          name: "Lopunny",
          types: [
            "normal",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/428.png",
        },
        {
          id: 538,
          name: "Lopunny",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/428.png",
        },
        {
          id: 539,
          name: "Mismagius",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/429.png",
        },
        {
          id: 540,
          name: "Honchkrow",
          types: [
            "dark",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/430.png",
        },
        {
          id: 541,
          name: "Glameow",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/431.png",
        },
        {
          id: 542,
          name: "Purugly",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/432.png",
        },
        {
          id: 543,
          name: "Chingling",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/433.png",
        },
        {
          id: 544,
          name: "Stunky",
          types: [
            "poison",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/434.png",
        },
        {
          id: 545,
          name: "Skuntank",
          types: [
            "poison",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/435.png",
        },
        {
          id: 546,
          name: "Bronzor",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/436.png",
        },
        {
          id: 547,
          name: "Bronzong",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/437.png",
        },
        {
          id: 548,
          name: "Bonsly",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/438.png",
        },
        {
          id: 549,
          name: "Mime Jr.",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/439.png",
        },
        {
          id: 550,
          name: "Happiny",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/440.png",
        },
        {
          id: 551,
          name: "Chatot",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/441.png",
        },
        {
          id: 552,
          name: "Spiritomb",
          types: [
            "ghost",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/442.png",
        },
        {
          id: 553,
          name: "Gible",
          types: [
            "dragon",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/443.png",
        },
        {
          id: 554,
          name: "Gabite",
          types: [
            "dragon",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/444.png",
        },
        {
          id: 555,
          name: "Garchomp",
          types: [
            "dragon",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/445.png",
        },
        {
          id: 556,
          name: "Garchomp",
          types: [
            "dragon",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/445.png",
        },
        {
          id: 557,
          name: "Munchlax",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/446.png",
        },
        {
          id: 558,
          name: "Riolu",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/447.png",
        },
        {
          id: 559,
          name: "Lucario",
          types: [
            "fighting",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/448.png",
        },
        {
          id: 560,
          name: "Lucario",
          types: [
            "fighting",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/448.png",
        },
        {
          id: 561,
          name: "Hippopotas",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/449.png",
        },
        {
          id: 562,
          name: "Hippowdon",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/450.png",
        },
        {
          id: 563,
          name: "Skorupi",
          types: [
            "poison",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/451.png",
        },
        {
          id: 564,
          name: "Drapion",
          types: [
            "poison",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/452.png",
        },
        {
          id: 565,
          name: "Croagunk",
          types: [
            "poison",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/453.png",
        },
        {
          id: 566,
          name: "Toxicroak",
          types: [
            "poison",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/454.png",
        },
        {
          id: 567,
          name: "Carnivine",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/455.png",
        },
        {
          id: 568,
          name: "Finneon",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/456.png",
        },
        {
          id: 569,
          name: "Lumineon",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/457.png",
        },
        {
          id: 570,
          name: "Mantyke",
          types: [
            "water",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/458.png",
        },
        {
          id: 571,
          name: "Snover",
          types: [
            "grass",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/459.png",
        },
        {
          id: 572,
          name: "Abomasnow",
          types: [
            "grass",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/460.png",
        },
        {
          id: 573,
          name: "Abomasnow",
          types: [
            "grass",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/460.png",
        },
        {
          id: 574,
          name: "Weavile",
          types: [
            "dark",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/461.png",
        },
        {
          id: 575,
          name: "Magnezone",
          types: [
            "electric",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/462.png",
        },
        {
          id: 576,
          name: "Lickilicky",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/463.png",
        },
        {
          id: 577,
          name: "Rhyperior",
          types: [
            "ground",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/464.png",
        },
        {
          id: 578,
          name: "Tangrowth",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/465.png",
        },
        {
          id: 579,
          name: "Electivire",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/466.png",
        },
        {
          id: 580,
          name: "Magmortar",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/467.png",
        },
        {
          id: 581,
          name: "Togekiss",
          types: [
            "fairy",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/468.png",
        },
        {
          id: 582,
          name: "Yanmega",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/469.png",
        },
        {
          id: 583,
          name: "Leafeon",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/470.png",
        },
        {
          id: 584,
          name: "Glaceon",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/471.png",
        },
        {
          id: 585,
          name: "Gliscor",
          types: [
            "ground",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/472.png",
        },
        {
          id: 586,
          name: "Mamoswine",
          types: [
            "ice",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/473.png",
        },
        {
          id: 587,
          name: "Porygon-Z",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/474.png",
        },
        {
          id: 588,
          name: "Gallade",
          types: [
            "psychic",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/475.png",
        },
        {
          id: 589,
          name: "Gallade",
          types: [
            "psychic",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/475.png",
        },
        {
          id: 590,
          name: "Probopass",
          types: [
            "rock",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/476.png",
        },
        {
          id: 591,
          name: "Dusknoir",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/477.png",
        },
        {
          id: 592,
          name: "Froslass",
          types: [
            "ice",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/478.png",
        },
        {
          id: 593,
          name: "Rotom",
          types: [
            "electric",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/479.png",
        },
        {
          id: 594,
          name: "Rotom",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/479.png",
        },
        {
          id: 595,
          name: "Rotom",
          types: [
            "electric",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/479.png",
        },
        {
          id: 596,
          name: "Rotom",
          types: [
            "electric",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/479.png",
        },
        {
          id: 597,
          name: "Rotom",
          types: [
            "electric",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/479.png",
        },
        {
          id: 598,
          name: "Rotom",
          types: [
            "electric",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/479.png",
        },
        {
          id: 599,
          name: "Uxie",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/480.png",
        },
        {
          id: 600,
          name: "Mesprit",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/481.png",
        },
        {
          id: 601,
          name: "Azelf",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/482.png",
        },
        {
          id: 602,
          name: "Dialga",
          types: [
            "steel",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/483.png",
        },
        {
          id: 603,
          name: "Dialga",
          types: [
            "steel",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/483.png",
        },
        {
          id: 604,
          name: "Palkia",
          types: [
            "water",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/484.png",
        },
        {
          id: 605,
          name: "Palkia",
          types: [
            "water",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/484.png",
        },
        {
          id: 606,
          name: "Heatran",
          types: [
            "fire",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/485.png",
        },
        {
          id: 607,
          name: "Regigigas",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/486.png",
        },
        {
          id: 608,
          name: "Giratina",
          types: [
            "ghost",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/487.png",
        },
        {
          id: 609,
          name: "Giratina",
          types: [
            "ghost",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/487.png",
        },
        {
          id: 610,
          name: "Cresselia",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/488.png",
        },
        {
          id: 611,
          name: "Phione",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/489.png",
        },
        {
          id: 612,
          name: "Manaphy",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/490.png",
        },
        {
          id: 613,
          name: "Darkrai",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/491.png",
        },
        {
          id: 614,
          name: "Shaymin",
          types: [
            "grass",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/492.png",
        },
        {
          id: 615,
          name: "Shaymin",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/492.png",
        },
        {
          id: 616,
          name: "Arceus",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/493.png",
        },
        {
          id: 617,
          name: "Victini",
          types: [
            "psychic",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/494.png",
        },
        {
          id: 618,
          name: "Snivy",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/495.png",
        },
        {
          id: 619,
          name: "Servine",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/496.png",
        },
        {
          id: 620,
          name: "Serperior",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/497.png",
        },
        {
          id: 621,
          name: "Tepig",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/498.png",
        },
        {
          id: 622,
          name: "Pignite",
          types: [
            "fire",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/499.png",
        },
        {
          id: 623,
          name: "Emboar",
          types: [
            "fire",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/500.png",
        },
        {
          id: 624,
          name: "Oshawott",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/501.png",
        },
        {
          id: 625,
          name: "Dewott",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/502.png",
        },
        {
          id: 626,
          name: "Samurott",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/503.png",
        },
        {
          id: 627,
          name: "Samurott",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/503.png",
        },
        {
          id: 628,
          name: "Patrat",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/504.png",
        },
        {
          id: 629,
          name: "Watchog",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/505.png",
        },
        {
          id: 630,
          name: "Lillipup",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/506.png",
        },
        {
          id: 631,
          name: "Herdier",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/507.png",
        },
        {
          id: 632,
          name: "Stoutland",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/508.png",
        },
        {
          id: 633,
          name: "Purrloin",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/509.png",
        },
        {
          id: 634,
          name: "Liepard",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/510.png",
        },
        {
          id: 635,
          name: "Pansage",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/511.png",
        },
        {
          id: 636,
          name: "Simisage",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/512.png",
        },
        {
          id: 637,
          name: "Pansear",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/513.png",
        },
        {
          id: 638,
          name: "Simisear",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/514.png",
        },
        {
          id: 639,
          name: "Panpour",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/515.png",
        },
        {
          id: 640,
          name: "Simipour",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/516.png",
        },
        {
          id: 641,
          name: "Munna",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/517.png",
        },
        {
          id: 642,
          name: "Musharna",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/518.png",
        },
        {
          id: 643,
          name: "Pidove",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/519.png",
        },
        {
          id: 644,
          name: "Tranquill",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/520.png",
        },
        {
          id: 645,
          name: "Unfezant",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/521.png",
        },
        {
          id: 646,
          name: "Unfezant",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/521.png",
        },
        {
          id: 647,
          name: "Blitzle",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/522.png",
        },
        {
          id: 648,
          name: "Zebstrika",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/523.png",
        },
        {
          id: 649,
          name: "Roggenrola",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/524.png",
        },
        {
          id: 650,
          name: "Boldore",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/525.png",
        },
        {
          id: 651,
          name: "Gigalith",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/526.png",
        },
        {
          id: 652,
          name: "Woobat",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/527.png",
        },
        {
          id: 653,
          name: "Swoobat",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/528.png",
        },
        {
          id: 654,
          name: "Drilbur",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/529.png",
        },
        {
          id: 655,
          name: "Excadrill",
          types: [
            "ground",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/530.png",
        },
        {
          id: 656,
          name: "Audino",
          types: [
            "normal",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/531.png",
        },
        {
          id: 657,
          name: "Audino",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/531.png",
        },
        {
          id: 658,
          name: "Timburr",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/532.png",
        },
        {
          id: 659,
          name: "Gurdurr",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/533.png",
        },
        {
          id: 660,
          name: "Conkeldurr",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/534.png",
        },
        {
          id: 661,
          name: "Tympole",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/535.png",
        },
        {
          id: 662,
          name: "Palpitoad",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/536.png",
        },
        {
          id: 663,
          name: "Seismitoad",
          types: [
            "water",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/537.png",
        },
        {
          id: 664,
          name: "Throh",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/538.png",
        },
        {
          id: 665,
          name: "Sawk",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/539.png",
        },
        {
          id: 666,
          name: "Sewaddle",
          types: [
            "bug",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/540.png",
        },
        {
          id: 667,
          name: "Swadloon",
          types: [
            "bug",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/541.png",
        },
        {
          id: 668,
          name: "Leavanny",
          types: [
            "bug",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/542.png",
        },
        {
          id: 669,
          name: "Venipede",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/543.png",
        },
        {
          id: 670,
          name: "Whirlipede",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/544.png",
        },
        {
          id: 671,
          name: "Scolipede",
          types: [
            "bug",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/545.png",
        },
        {
          id: 672,
          name: "Cottonee",
          types: [
            "grass",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/546.png",
        },
        {
          id: 673,
          name: "Whimsicott",
          types: [
            "grass",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/547.png",
        },
        {
          id: 674,
          name: "Petilil",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/548.png",
        },
        {
          id: 675,
          name: "Lilligant",
          types: [
            "grass",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/549.png",
        },
        {
          id: 676,
          name: "Lilligant",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/549.png",
        },
        {
          id: 677,
          name: "Basculin",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/550.png",
        },
        {
          id: 678,
          name: "Basculin",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/550.png",
        },
        {
          id: 679,
          name: "Basculin",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/550.png",
        },
        {
          id: 680,
          name: "Sandile",
          types: [
            "ground",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/551.png",
        },
        {
          id: 681,
          name: "Krokorok",
          types: [
            "ground",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/552.png",
        },
        {
          id: 682,
          name: "Krookodile",
          types: [
            "ground",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/553.png",
        },
        {
          id: 683,
          name: "Darumaka",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/554.png",
        },
        {
          id: 684,
          name: "Darumaka",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/554.png",
        },
        {
          id: 685,
          name: "Darmanitan",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/555.png",
        },
        {
          id: 686,
          name: "Darmanitan",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/555.png",
        },
        {
          id: 687,
          name: "Maractus",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/556.png",
        },
        {
          id: 688,
          name: "Dwebble",
          types: [
            "bug",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/557.png",
        },
        {
          id: 689,
          name: "Crustle",
          types: [
            "bug",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/558.png",
        },
        {
          id: 690,
          name: "Scraggy",
          types: [
            "dark",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/559.png",
        },
        {
          id: 691,
          name: "Scrafty",
          types: [
            "dark",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/560.png",
        },
        {
          id: 692,
          name: "Sigilyph",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/561.png",
        },
        {
          id: 693,
          name: "Yamask",
          types: [
            "ground",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/562.png",
        },
        {
          id: 694,
          name: "Yamask",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/562.png",
        },
        {
          id: 695,
          name: "Cofagrigus",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/563.png",
        },
        {
          id: 696,
          name: "Tirtouga",
          types: [
            "water",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/564.png",
        },
        {
          id: 697,
          name: "Carracosta",
          types: [
            "water",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/565.png",
        },
        {
          id: 698,
          name: "Archen",
          types: [
            "rock",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/566.png",
        },
        {
          id: 699,
          name: "Archeops",
          types: [
            "rock",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/567.png",
        },
        {
          id: 700,
          name: "Trubbish",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/568.png",
        },
        {
          id: 701,
          name: "Garbodor",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/569.png",
        },
        {
          id: 702,
          name: "Garbodor",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/569.png",
        },
        {
          id: 703,
          name: "Zorua",
          types: [
            "normal",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/570.png",
        },
        {
          id: 704,
          name: "Zorua",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/570.png",
        },
        {
          id: 705,
          name: "Zoroark",
          types: [
            "normal",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/571.png",
        },
        {
          id: 706,
          name: "Zoroark",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/571.png",
        },
        {
          id: 707,
          name: "Minccino",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/572.png",
        },
        {
          id: 708,
          name: "Cinccino",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/573.png",
        },
        {
          id: 709,
          name: "Gothita",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/574.png",
        },
        {
          id: 710,
          name: "Gothorita",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/575.png",
        },
        {
          id: 711,
          name: "Gothitelle",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/576.png",
        },
        {
          id: 712,
          name: "Solosis",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/577.png",
        },
        {
          id: 713,
          name: "Duosion",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/578.png",
        },
        {
          id: 714,
          name: "Reuniclus",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/579.png",
        },
        {
          id: 715,
          name: "Ducklett",
          types: [
            "water",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/580.png",
        },
        {
          id: 716,
          name: "Swanna",
          types: [
            "water",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/581.png",
        },
        {
          id: 717,
          name: "Vanillite",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/582.png",
        },
        {
          id: 718,
          name: "Vanillish",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/583.png",
        },
        {
          id: 719,
          name: "Vanilluxe",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/584.png",
        },
        {
          id: 720,
          name: "Deerling",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/585.png",
        },
        {
          id: 721,
          name: "Deerling",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/585.png",
        },
        {
          id: 722,
          name: "Deerling",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/585.png",
        },
        {
          id: 723,
          name: "Deerling",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/585.png",
        },
        {
          id: 724,
          name: "Sawsbuck",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/586.png",
        },
        {
          id: 725,
          name: "Sawsbuck",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/586.png",
        },
        {
          id: 726,
          name: "Sawsbuck",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/586.png",
        },
        {
          id: 727,
          name: "Sawsbuck",
          types: [
            "normal",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/586.png",
        },
        {
          id: 728,
          name: "Emolga",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/587.png",
        },
        {
          id: 729,
          name: "Karrablast",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/588.png",
        },
        {
          id: 730,
          name: "Escavalier",
          types: [
            "bug",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/589.png",
        },
        {
          id: 731,
          name: "Foongus",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/590.png",
        },
        {
          id: 732,
          name: "Amoonguss",
          types: [
            "grass",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/591.png",
        },
        {
          id: 733,
          name: "Frillish",
          types: [
            "water",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/592.png",
        },
        {
          id: 734,
          name: "Frillish",
          types: [
            "water",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/592.png",
        },
        {
          id: 735,
          name: "Jellicent",
          types: [
            "water",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/593.png",
        },
        {
          id: 736,
          name: "Jellicent",
          types: [
            "water",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/593.png",
        },
        {
          id: 737,
          name: "Alomomola",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/594.png",
        },
        {
          id: 738,
          name: "Joltik",
          types: [
            "bug",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/595.png",
        },
        {
          id: 739,
          name: "Galvantula",
          types: [
            "bug",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/596.png",
        },
        {
          id: 740,
          name: "Ferroseed",
          types: [
            "grass",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/597.png",
        },
        {
          id: 741,
          name: "Ferrothorn",
          types: [
            "grass",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/598.png",
        },
        {
          id: 742,
          name: "Klink",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/599.png",
        },
        {
          id: 743,
          name: "Klang",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/600.png",
        },
        {
          id: 744,
          name: "Klinklang",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/601.png",
        },
        {
          id: 745,
          name: "Tynamo",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/602.png",
        },
        {
          id: 746,
          name: "Eelektrik",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/603.png",
        },
        {
          id: 747,
          name: "Eelektross",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/604.png",
        },
        {
          id: 748,
          name: "Elgyem",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/605.png",
        },
        {
          id: 749,
          name: "Beheeyem",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/606.png",
        },
        {
          id: 750,
          name: "Litwick",
          types: [
            "ghost",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/607.png",
        },
        {
          id: 751,
          name: "Lampent",
          types: [
            "ghost",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/608.png",
        },
        {
          id: 752,
          name: "Chandelure",
          types: [
            "ghost",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/609.png",
        },
        {
          id: 753,
          name: "Axew",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/610.png",
        },
        {
          id: 754,
          name: "Fraxure",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/611.png",
        },
        {
          id: 755,
          name: "Haxorus",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/612.png",
        },
        {
          id: 756,
          name: "Cubchoo",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/613.png",
        },
        {
          id: 757,
          name: "Beartic",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/614.png",
        },
        {
          id: 758,
          name: "Cryogonal",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/615.png",
        },
        {
          id: 759,
          name: "Shelmet",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/616.png",
        },
        {
          id: 760,
          name: "Accelgor",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/617.png",
        },
        {
          id: 761,
          name: "Stunfisk",
          types: [
            "ground",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/618.png",
        },
        {
          id: 762,
          name: "Stunfisk",
          types: [
            "ground",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/618.png",
        },
        {
          id: 763,
          name: "Mienfoo",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/619.png",
        },
        {
          id: 764,
          name: "Mienshao",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/620.png",
        },
        {
          id: 765,
          name: "Druddigon",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/621.png",
        },
        {
          id: 766,
          name: "Golett",
          types: [
            "ground",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/622.png",
        },
        {
          id: 767,
          name: "Golurk",
          types: [
            "ground",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/623.png",
        },
        {
          id: 768,
          name: "Pawniard",
          types: [
            "dark",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/624.png",
        },
        {
          id: 769,
          name: "Bisharp",
          types: [
            "dark",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/625.png",
        },
        {
          id: 770,
          name: "Bouffalant",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/626.png",
        },
        {
          id: 771,
          name: "Rufflet",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/627.png",
        },
        {
          id: 772,
          name: "Braviary",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/628.png",
        },
        {
          id: 773,
          name: "Braviary",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/628.png",
        },
        {
          id: 774,
          name: "Vullaby",
          types: [
            "dark",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/629.png",
        },
        {
          id: 775,
          name: "Mandibuzz",
          types: [
            "dark",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/630.png",
        },
        {
          id: 776,
          name: "Heatmor",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/631.png",
        },
        {
          id: 777,
          name: "Durant",
          types: [
            "bug",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/632.png",
        },
        {
          id: 778,
          name: "Deino",
          types: [
            "dark",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/633.png",
        },
        {
          id: 779,
          name: "Zweilous",
          types: [
            "dark",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/634.png",
        },
        {
          id: 780,
          name: "Hydreigon",
          types: [
            "dark",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/635.png",
        },
        {
          id: 781,
          name: "Larvesta",
          types: [
            "bug",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/636.png",
        },
        {
          id: 782,
          name: "Volcarona",
          types: [
            "bug",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/637.png",
        },
        {
          id: 783,
          name: "Cobalion",
          types: [
            "steel",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/638.png",
        },
        {
          id: 784,
          name: "Terrakion",
          types: [
            "rock",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/639.png",
        },
        {
          id: 785,
          name: "Virizion",
          types: [
            "grass",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/640.png",
        },
        {
          id: 786,
          name: "Tornadus",
          types: [
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/641.png",
        },
        {
          id: 787,
          name: "Tornadus",
          types: [
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/641.png",
        },
        {
          id: 788,
          name: "Thundurus",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/642.png",
        },
        {
          id: 789,
          name: "Thundurus",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/642.png",
        },
        {
          id: 790,
          name: "Reshiram",
          types: [
            "dragon",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/643.png",
        },
        {
          id: 791,
          name: "Zekrom",
          types: [
            "dragon",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/644.png",
        },
        {
          id: 792,
          name: "Landorus",
          types: [
            "ground",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/645.png",
        },
        {
          id: 793,
          name: "Landorus",
          types: [
            "ground",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/645.png",
        },
        {
          id: 794,
          name: "Kyurem",
          types: [
            "dragon",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/646.png",
        },
        {
          id: 795,
          name: "Kyurem",
          types: [
            "dragon",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/646.png",
        },
        {
          id: 796,
          name: "Kyurem",
          types: [
            "dragon",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/646.png",
        },
        {
          id: 797,
          name: "Keldeo",
          types: [
            "water",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/647.png",
        },
        {
          id: 798,
          name: "Keldeo",
          types: [
            "water",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/647.png",
        },
        {
          id: 799,
          name: "Meloetta",
          types: [
            "normal",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/648.png",
        },
        {
          id: 800,
          name: "Meloetta",
          types: [
            "normal",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/648.png",
        },
        {
          id: 801,
          name: "Genesect",
          types: [
            "bug",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/649.png",
        },
        {
          id: 802,
          name: "Chespin",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/650.png",
        },
        {
          id: 803,
          name: "Quilladin",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/651.png",
        },
        {
          id: 804,
          name: "Chesnaught",
          types: [
            "grass",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/652.png",
        },
        {
          id: 805,
          name: "Fennekin",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/653.png",
        },
        {
          id: 806,
          name: "Braixen",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/654.png",
        },
        {
          id: 807,
          name: "Delphox",
          types: [
            "fire",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/655.png",
        },
        {
          id: 808,
          name: "Froakie",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/656.png",
        },
        {
          id: 809,
          name: "Frogadier",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/657.png",
        },
        {
          id: 810,
          name: "Greninja",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/658.png",
        },
        {
          id: 811,
          name: "Greninja",
          types: [
            "water",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/658.png",
        },
        {
          id: 812,
          name: "Bunnelby",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/659.png",
        },
        {
          id: 813,
          name: "Diggersby",
          types: [
            "normal",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/660.png",
        },
        {
          id: 814,
          name: "Fletchling",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/661.png",
        },
        {
          id: 815,
          name: "Fletchinder",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/662.png",
        },
        {
          id: 816,
          name: "Talonflame",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/663.png",
        },
        {
          id: 817,
          name: "Scatterbug",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/664.png",
        },
        {
          id: 818,
          name: "Spewpa",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/665.png",
        },
        {
          id: 819,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 820,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 821,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 822,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 823,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 824,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 825,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 826,
          name: "Vivillon",
          types: [
            "bug",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/666.png",
        },
        {
          id: 827,
          name: "Litleo",
          types: [
            "fire",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/667.png",
        },
        {
          id: 828,
          name: "Pyroar",
          types: [
            "fire",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/668.png",
        },
        {
          id: 829,
          name: "Pyroar",
          types: [
            "fire",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/668.png",
        },
        {
          id: 830,
          name: "Flabébé",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/669.png",
        },
        {
          id: 831,
          name: "Floette",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/670.png",
        },
        {
          id: 832,
          name: "Florges",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/671.png",
        },
        {
          id: 833,
          name: "Skiddo",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/672.png",
        },
        {
          id: 834,
          name: "Gogoat",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/673.png",
        },
        {
          id: 835,
          name: "Pancham",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/674.png",
        },
        {
          id: 836,
          name: "Pangoro",
          types: [
            "fighting",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/675.png",
        },
        {
          id: 837,
          name: "Furfrou",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/676.png",
        },
        {
          id: 838,
          name: "Furfrou",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/676.png",
        },
        {
          id: 839,
          name: "Furfrou",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/676.png",
        },
        {
          id: 840,
          name: "Furfrou",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/676.png",
        },
        {
          id: 841,
          name: "Espurr",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/677.png",
        },
        {
          id: 842,
          name: "Meowstic",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/678.png",
        },
        {
          id: 843,
          name: "Meowstic",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/678.png",
        },
        {
          id: 844,
          name: "Honedge",
          types: [
            "steel",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/679.png",
        },
        {
          id: 845,
          name: "Doublade",
          types: [
            "steel",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/680.png",
        },
        {
          id: 846,
          name: "Aegislash",
          types: [
            "steel",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/681.png",
        },
        {
          id: 847,
          name: "Aegislash",
          types: [
            "steel",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/681.png",
        },
        {
          id: 848,
          name: "Spritzee",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/682.png",
        },
        {
          id: 849,
          name: "Aromatisse",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/683.png",
        },
        {
          id: 850,
          name: "Swirlix",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/684.png",
        },
        {
          id: 851,
          name: "Slurpuff",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/685.png",
        },
        {
          id: 852,
          name: "Inkay",
          types: [
            "dark",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/686.png",
        },
        {
          id: 853,
          name: "Malamar",
          types: [
            "dark",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/687.png",
        },
        {
          id: 854,
          name: "Binacle",
          types: [
            "rock",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/688.png",
        },
        {
          id: 855,
          name: "Barbaracle",
          types: [
            "rock",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/689.png",
        },
        {
          id: 856,
          name: "Skrelp",
          types: [
            "poison",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/690.png",
        },
        {
          id: 857,
          name: "Dragalge",
          types: [
            "poison",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/691.png",
        },
        {
          id: 858,
          name: "Clauncher",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/692.png",
        },
        {
          id: 859,
          name: "Clawitzer",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/693.png",
        },
        {
          id: 860,
          name: "Helioptile",
          types: [
            "electric",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/694.png",
        },
        {
          id: 861,
          name: "Heliolisk",
          types: [
            "electric",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/695.png",
        },
        {
          id: 862,
          name: "Tyrunt",
          types: [
            "rock",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/696.png",
        },
        {
          id: 863,
          name: "Tyrantrum",
          types: [
            "rock",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/697.png",
        },
        {
          id: 864,
          name: "Amaura",
          types: [
            "rock",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/698.png",
        },
        {
          id: 865,
          name: "Aurorus",
          types: [
            "rock",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/699.png",
        },
        {
          id: 866,
          name: "Sylveon",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/700.png",
        },
        {
          id: 867,
          name: "Hawlucha",
          types: [
            "fighting",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/701.png",
        },
        {
          id: 868,
          name: "Dedenne",
          types: [
            "electric",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/702.png",
        },
        {
          id: 869,
          name: "Carbink",
          types: [
            "rock",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/703.png",
        },
        {
          id: 870,
          name: "Goomy",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/704.png",
        },
        {
          id: 871,
          name: "Sliggoo",
          types: [
            "steel",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/705.png",
        },
        {
          id: 872,
          name: "Sliggoo",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/705.png",
        },
        {
          id: 873,
          name: "Goodra",
          types: [
            "steel",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/706.png",
        },
        {
          id: 874,
          name: "Goodra",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/706.png",
        },
        {
          id: 875,
          name: "Klefki",
          types: [
            "steel",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/707.png",
        },
        {
          id: 876,
          name: "Phantump",
          types: [
            "ghost",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/708.png",
        },
        {
          id: 877,
          name: "Trevenant",
          types: [
            "ghost",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/709.png",
        },
        {
          id: 878,
          name: "Pumpkaboo",
          types: [
            "ghost",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/710.png",
        },
        {
          id: 879,
          name: "Gourgeist",
          types: [
            "ghost",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/711.png",
        },
        {
          id: 880,
          name: "Bergmite",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/712.png",
        },
        {
          id: 881,
          name: "Avalugg",
          types: [
            "ice",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/713.png",
        },
        {
          id: 882,
          name: "Avalugg",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/713.png",
        },
        {
          id: 883,
          name: "Noibat",
          types: [
            "flying",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/714.png",
        },
        {
          id: 884,
          name: "Noivern",
          types: [
            "flying",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/715.png",
        },
        {
          id: 885,
          name: "Xerneas",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/716.png",
        },
        {
          id: 886,
          name: "Yveltal",
          types: [
            "dark",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/717.png",
        },
        {
          id: 887,
          name: "Zygarde",
          types: [
            "dragon",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/718.png",
        },
        {
          id: 888,
          name: "Zygarde",
          types: [
            "dragon",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/718.png",
        },
        {
          id: 889,
          name: "Zygarde",
          types: [
            "dragon",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/718.png",
        },
        {
          id: 890,
          name: "Diancie",
          types: [
            "rock",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/719.png",
        },
        {
          id: 891,
          name: "Diancie",
          types: [
            "rock",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/719.png",
        },
        {
          id: 892,
          name: "Hoopa",
          types: [
            "psychic",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/720.png",
        },
        {
          id: 893,
          name: "Hoopa",
          types: [
            "psychic",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/720.png",
        },
        {
          id: 894,
          name: "Volcanion",
          types: [
            "fire",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/721.png",
        },
        {
          id: 895,
          name: "Rowlet",
          types: [
            "grass",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/722.png",
        },
        {
          id: 896,
          name: "Dartrix",
          types: [
            "grass",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/723.png",
        },
        {
          id: 897,
          name: "Decidueye",
          types: [
            "grass",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/724.png",
        },
        {
          id: 898,
          name: "Decidueye",
          types: [
            "grass",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/724.png",
        },
        {
          id: 899,
          name: "Litten",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/725.png",
        },
        {
          id: 900,
          name: "Torracat",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/726.png",
        },
        {
          id: 901,
          name: "Incineroar",
          types: [
            "fire",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/727.png",
        },
        {
          id: 902,
          name: "Popplio",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/728.png",
        },
        {
          id: 903,
          name: "Brionne",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/729.png",
        },
        {
          id: 904,
          name: "Primarina",
          types: [
            "water",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/730.png",
        },
        {
          id: 905,
          name: "Pikipek",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/731.png",
        },
        {
          id: 906,
          name: "Trumbeak",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/732.png",
        },
        {
          id: 907,
          name: "Toucannon",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/733.png",
        },
        {
          id: 908,
          name: "Yungoos",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/734.png",
        },
        {
          id: 909,
          name: "Gumshoos",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/735.png",
        },
        {
          id: 910,
          name: "Grubbin",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/736.png",
        },
        {
          id: 911,
          name: "Charjabug",
          types: [
            "bug",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/737.png",
        },
        {
          id: 912,
          name: "Vikavolt",
          types: [
            "bug",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/738.png",
        },
        {
          id: 913,
          name: "Crabrawler",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/739.png",
        },
        {
          id: 914,
          name: "Crabominable",
          types: [
            "fighting",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/740.png",
        },
        {
          id: 915,
          name: "Oricorio",
          types: [
            "ghost",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/741.png",
        },
        {
          id: 916,
          name: "Oricorio",
          types: [
            "psychic",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/741.png",
        },
        {
          id: 917,
          name: "Oricorio",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/741.png",
        },
        {
          id: 918,
          name: "Oricorio",
          types: [
            "fire",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/741.png",
        },
        {
          id: 919,
          name: "Cutiefly",
          types: [
            "bug",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/742.png",
        },
        {
          id: 920,
          name: "Ribombee",
          types: [
            "bug",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/743.png",
        },
        {
          id: 921,
          name: "Rockruff",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/744.png",
        },
        {
          id: 922,
          name: "Lycanroc",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/745.png",
        },
        {
          id: 923,
          name: "Lycanroc",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/745.png",
        },
        {
          id: 924,
          name: "Lycanroc",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/745.png",
        },
        {
          id: 925,
          name: "Wishiwashi",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/746.png",
        },
        {
          id: 926,
          name: "Wishiwashi",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/746.png",
        },
        {
          id: 927,
          name: "Mareanie",
          types: [
            "poison",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/747.png",
        },
        {
          id: 928,
          name: "Toxapex",
          types: [
            "poison",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/748.png",
        },
        {
          id: 929,
          name: "Mudbray",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/749.png",
        },
        {
          id: 930,
          name: "Mudsdale",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/750.png",
        },
        {
          id: 931,
          name: "Dewpider",
          types: [
            "water",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/751.png",
        },
        {
          id: 932,
          name: "Araquanid",
          types: [
            "water",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/752.png",
        },
        {
          id: 933,
          name: "Fomantis",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/753.png",
        },
        {
          id: 934,
          name: "Lurantis",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/754.png",
        },
        {
          id: 935,
          name: "Morelull",
          types: [
            "grass",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/755.png",
        },
        {
          id: 936,
          name: "Shiinotic",
          types: [
            "grass",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/756.png",
        },
        {
          id: 937,
          name: "Salandit",
          types: [
            "poison",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/757.png",
        },
        {
          id: 938,
          name: "Salazzle",
          types: [
            "poison",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/758.png",
        },
        {
          id: 939,
          name: "Stufful",
          types: [
            "normal",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/759.png",
        },
        {
          id: 940,
          name: "Bewear",
          types: [
            "normal",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/760.png",
        },
        {
          id: 941,
          name: "Bounsweet",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/761.png",
        },
        {
          id: 942,
          name: "Steenee",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/762.png",
        },
        {
          id: 943,
          name: "Tsareena",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/763.png",
        },
        {
          id: 944,
          name: "Comfey",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/764.png",
        },
        {
          id: 945,
          name: "Oranguru",
          types: [
            "normal",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/765.png",
        },
        {
          id: 946,
          name: "Passimian",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/766.png",
        },
        {
          id: 947,
          name: "Wimpod",
          types: [
            "bug",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/767.png",
        },
        {
          id: 948,
          name: "Golisopod",
          types: [
            "bug",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/768.png",
        },
        {
          id: 949,
          name: "Sandygast",
          types: [
            "ghost",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/769.png",
        },
        {
          id: 950,
          name: "Palossand",
          types: [
            "ghost",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/770.png",
        },
        {
          id: 951,
          name: "Pyukumuku",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/771.png",
        },
        {
          id: 952,
          name: "Type: Null",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/772.png",
        },
        {
          id: 953,
          name: "Silvally",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/773.png",
        },
        {
          id: 954,
          name: "Minior",
          types: [
            "rock",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/774.png",
        },
        {
          id: 955,
          name: "Minior",
          types: [
            "rock",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/774.png",
        },
        {
          id: 956,
          name: "Komala",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/775.png",
        },
        {
          id: 957,
          name: "Turtonator",
          types: [
            "fire",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/776.png",
        },
        {
          id: 958,
          name: "Togedemaru",
          types: [
            "electric",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/777.png",
        },
        {
          id: 959,
          name: "Mimikyu",
          types: [
            "ghost",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/778.png",
        },
        {
          id: 960,
          name: "Bruxish",
          types: [
            "water",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/779.png",
        },
        {
          id: 961,
          name: "Drampa",
          types: [
            "normal",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/780.png",
        },
        {
          id: 962,
          name: "Dhelmise",
          types: [
            "ghost",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/781.png",
        },
        {
          id: 963,
          name: "Jangmo-o",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/782.png",
        },
        {
          id: 964,
          name: "Hakamo-o",
          types: [
            "dragon",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/783.png",
        },
        {
          id: 965,
          name: "Kommo-o",
          types: [
            "dragon",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/784.png",
        },
        {
          id: 966,
          name: "Tapu Koko",
          types: [
            "electric",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/785.png",
        },
        {
          id: 967,
          name: "Tapu Lele",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/786.png",
        },
        {
          id: 968,
          name: "Tapu Bulu",
          types: [
            "grass",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/787.png",
        },
        {
          id: 969,
          name: "Tapu Fini",
          types: [
            "water",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/788.png",
        },
        {
          id: 970,
          name: "Cosmog",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/789.png",
        },
        {
          id: 971,
          name: "Cosmoem",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/790.png",
        },
        {
          id: 972,
          name: "Solgaleo",
          types: [
            "psychic",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/791.png",
        },
        {
          id: 973,
          name: "Lunala",
          types: [
            "psychic",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/792.png",
        },
        {
          id: 974,
          name: "Nihilego",
          types: [
            "rock",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/793.png",
        },
        {
          id: 975,
          name: "Buzzwole",
          types: [
            "bug",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/794.png",
        },
        {
          id: 976,
          name: "Pheromosa",
          types: [
            "bug",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/795.png",
        },
        {
          id: 977,
          name: "Xurkitree",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/796.png",
        },
        {
          id: 978,
          name: "Celesteela",
          types: [
            "steel",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/797.png",
        },
        {
          id: 979,
          name: "Kartana",
          types: [
            "grass",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/798.png",
        },
        {
          id: 980,
          name: "Guzzlord",
          types: [
            "dark",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/799.png",
        },
        {
          id: 981,
          name: "Necrozma",
          types: [
            "psychic",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/800.png",
        },
        {
          id: 982,
          name: "Necrozma",
          types: [
            "psychic",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/800.png",
        },
        {
          id: 983,
          name: "Necrozma",
          types: [
            "psychic",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/800.png",
        },
        {
          id: 984,
          name: "Necrozma",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/800.png",
        },
        {
          id: 985,
          name: "Magearna",
          types: [
            "steel",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/801.png",
        },
        {
          id: 986,
          name: "Marshadow",
          types: [
            "fighting",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/802.png",
        },
        {
          id: 987,
          name: "Poipole",
          types: [
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/803.png",
        },
        {
          id: 988,
          name: "Naganadel",
          types: [
            "poison",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/804.png",
        },
        {
          id: 989,
          name: "Stakataka",
          types: [
            "rock",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/805.png",
        },
        {
          id: 990,
          name: "Blacephalon",
          types: [
            "fire",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/806.png",
        },
        {
          id: 991,
          name: "Zeraora",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/807.png",
        },
        {
          id: 992,
          name: "Meltan",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/808.png",
        },
        {
          id: 993,
          name: "Melmetal",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/809.png",
        },
        {
          id: 994,
          name: "Melmetal",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/809.png",
        },
        {
          id: 995,
          name: "Grookey",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/810.png",
        },
        {
          id: 996,
          name: "Thwackey",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/811.png",
        },
        {
          id: 997,
          name: "Rillaboom",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/812.png",
        },
        {
          id: 998,
          name: "Rillaboom",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/812.png",
        },
        {
          id: 999,
          name: "Scorbunny",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/813.png",
        },
        {
          id: 1000,
          name: "Raboot",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/814.png",
        },
        {
          id: 1001,
          name: "Cinderace",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/815.png",
        },
        {
          id: 1002,
          name: "Cinderace",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/815.png",
        },
        {
          id: 1003,
          name: "Sobble",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/816.png",
        },
        {
          id: 1004,
          name: "Drizzile",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/817.png",
        },
        {
          id: 1005,
          name: "Inteleon",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/818.png",
        },
        {
          id: 1006,
          name: "Inteleon",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/818.png",
        },
        {
          id: 1007,
          name: "Skwovet",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/819.png",
        },
        {
          id: 1008,
          name: "Greedent",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/820.png",
        },
        {
          id: 1009,
          name: "Rookidee",
          types: [
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/821.png",
        },
        {
          id: 1010,
          name: "Corvisquire",
          types: [
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/822.png",
        },
        {
          id: 1011,
          name: "Corviknight",
          types: [
            "flying",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/823.png",
        },
        {
          id: 1012,
          name: "Corviknight",
          types: [
            "flying",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/823.png",
        },
        {
          id: 1013,
          name: "Blipbug",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/824.png",
        },
        {
          id: 1014,
          name: "Dottler",
          types: [
            "bug",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/825.png",
        },
        {
          id: 1015,
          name: "Orbeetle",
          types: [
            "bug",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/826.png",
        },
        {
          id: 1016,
          name: "Orbeetle",
          types: [
            "bug",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/826.png",
        },
        {
          id: 1017,
          name: "Nickit",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/827.png",
        },
        {
          id: 1018,
          name: "Thievul",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/828.png",
        },
        {
          id: 1019,
          name: "Gossifleur",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/829.png",
        },
        {
          id: 1020,
          name: "Eldegoss",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/830.png",
        },
        {
          id: 1021,
          name: "Wooloo",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/831.png",
        },
        {
          id: 1022,
          name: "Dubwool",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/832.png",
        },
        {
          id: 1023,
          name: "Chewtle",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/833.png",
        },
        {
          id: 1024,
          name: "Drednaw",
          types: [
            "water",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/834.png",
        },
        {
          id: 1025,
          name: "Drednaw",
          types: [
            "water",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/834.png",
        },
        {
          id: 1026,
          name: "Yamper",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/835.png",
        },
        {
          id: 1027,
          name: "Boltund",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/836.png",
        },
        {
          id: 1028,
          name: "Rolycoly",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/837.png",
        },
        {
          id: 1029,
          name: "Carkol",
          types: [
            "rock",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/838.png",
        },
        {
          id: 1030,
          name: "Coalossal",
          types: [
            "rock",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/839.png",
        },
        {
          id: 1031,
          name: "Coalossal",
          types: [
            "rock",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/839.png",
        },
        {
          id: 1032,
          name: "Applin",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/840.png",
        },
        {
          id: 1033,
          name: "Flapple",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/841.png",
        },
        {
          id: 1034,
          name: "Flapple",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/841.png",
        },
        {
          id: 1035,
          name: "Appletun",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/842.png",
        },
        {
          id: 1036,
          name: "Appletun",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/842.png",
        },
        {
          id: 1037,
          name: "Silicobra",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/843.png",
        },
        {
          id: 1038,
          name: "Sandaconda",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/844.png",
        },
        {
          id: 1039,
          name: "Sandaconda",
          types: [
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/844.png",
        },
        {
          id: 1040,
          name: "Cramorant",
          types: [
            "flying",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/845.png",
        },
        {
          id: 1041,
          name: "Arrokuda",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/846.png",
        },
        {
          id: 1042,
          name: "Barraskewda",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/847.png",
        },
        {
          id: 1043,
          name: "Toxel",
          types: [
            "electric",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/848.png",
        },
        {
          id: 1044,
          name: "Toxtricity",
          types: [
            "electric",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/849.png",
        },
        {
          id: 1045,
          name: "Toxtricity",
          types: [
            "electric",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/849.png",
        },
        {
          id: 1046,
          name: "Toxtricity",
          types: [
            "electric",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/849.png",
        },
        {
          id: 1047,
          name: "Sizzlipede",
          types: [
            "fire",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/850.png",
        },
        {
          id: 1048,
          name: "Centiskorch",
          types: [
            "fire",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/851.png",
        },
        {
          id: 1049,
          name: "Centiskorch",
          types: [
            "fire",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/851.png",
        },
        {
          id: 1050,
          name: "Clobbopus",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/852.png",
        },
        {
          id: 1051,
          name: "Grapploct",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/853.png",
        },
        {
          id: 1052,
          name: "Sinistea",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/854.png",
        },
        {
          id: 1053,
          name: "Sinistea",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/854.png",
        },
        {
          id: 1054,
          name: "Polteageist",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/855.png",
        },
        {
          id: 1055,
          name: "Polteageist",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/855.png",
        },
        {
          id: 1056,
          name: "Hatenna",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/856.png",
        },
        {
          id: 1057,
          name: "Hattrem",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/857.png",
        },
        {
          id: 1058,
          name: "Hatterene",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/858.png",
        },
        {
          id: 1059,
          name: "Hatterene",
          types: [
            "psychic",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/858.png",
        },
        {
          id: 1060,
          name: "Impidimp",
          types: [
            "dark",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/859.png",
        },
        {
          id: 1061,
          name: "Morgrem",
          types: [
            "dark",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/860.png",
        },
        {
          id: 1062,
          name: "Grimmsnarl",
          types: [
            "dark",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/861.png",
        },
        {
          id: 1063,
          name: "Grimmsnarl",
          types: [
            "dark",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/861.png",
        },
        {
          id: 1064,
          name: "Obstagoon",
          types: [
            "dark",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/862.png",
        },
        {
          id: 1065,
          name: "Perrserker",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/863.png",
        },
        {
          id: 1066,
          name: "Cursola",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/864.png",
        },
        {
          id: 1067,
          name: "Sirfetch’d",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/865.png",
        },
        {
          id: 1068,
          name: "Mr. Rime",
          types: [
            "ice",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/866.png",
        },
        {
          id: 1069,
          name: "Runerigus",
          types: [
            "ground",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/867.png",
        },
        {
          id: 1070,
          name: "Milcery",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/868.png",
        },
        {
          id: 1071,
          name: "Alcremie",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/869.png",
        },
        {
          id: 1072,
          name: "Alcremie",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/869.png",
        },
        {
          id: 1073,
          name: "Falinks",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/870.png",
        },
        {
          id: 1074,
          name: "Pincurchin",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/871.png",
        },
        {
          id: 1075,
          name: "Snom",
          types: [
            "ice",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/872.png",
        },
        {
          id: 1076,
          name: "Frosmoth",
          types: [
            "ice",
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/873.png",
        },
        {
          id: 1077,
          name: "Stonjourner",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/874.png",
        },
        {
          id: 1078,
          name: "Eiscue",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/875.png",
        },
        {
          id: 1079,
          name: "Indeedee",
          types: [
            "psychic",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/876.png",
        },
        {
          id: 1080,
          name: "Indeedee",
          types: [
            "psychic",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/876.png",
        },
        {
          id: 1081,
          name: "Morpeko",
          types: [
            "electric",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/877.png",
        },
        {
          id: 1082,
          name: "Morpeko",
          types: [
            "electric",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/877.png",
        },
        {
          id: 1083,
          name: "Cufant",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/878.png",
        },
        {
          id: 1084,
          name: "Copperajah",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/879.png",
        },
        {
          id: 1085,
          name: "Copperajah",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/879.png",
        },
        {
          id: 1086,
          name: "Dracozolt",
          types: [
            "electric",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/880.png",
        },
        {
          id: 1087,
          name: "Arctozolt",
          types: [
            "electric",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/881.png",
        },
        {
          id: 1088,
          name: "Dracovish",
          types: [
            "water",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/882.png",
        },
        {
          id: 1089,
          name: "Arctovish",
          types: [
            "water",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/883.png",
        },
        {
          id: 1090,
          name: "Duraludon",
          types: [
            "steel",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/884.png",
        },
        {
          id: 1091,
          name: "Duraludon",
          types: [
            "steel",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/884.png",
        },
        {
          id: 1092,
          name: "Dreepy",
          types: [
            "dragon",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/885.png",
        },
        {
          id: 1093,
          name: "Drakloak",
          types: [
            "dragon",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/886.png",
        },
        {
          id: 1094,
          name: "Dragapult",
          types: [
            "dragon",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/887.png",
        },
        {
          id: 1095,
          name: "Zacian",
          types: [
            "fairy",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/888.png",
        },
        {
          id: 1096,
          name: "Zacian",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/888.png",
        },
        {
          id: 1097,
          name: "Zamazenta",
          types: [
            "fighting",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/889.png",
        },
        {
          id: 1098,
          name: "Zamazenta",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/889.png",
        },
        {
          id: 1099,
          name: "Eternatus",
          types: [
            "poison",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/890.png",
        },
        {
          id: 1100,
          name: "Kubfu",
          types: [
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/891.png",
        },
        {
          id: 1101,
          name: "Urshifu",
          types: [
            "fighting",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/892.png",
        },
        {
          id: 1102,
          name: "Urshifu",
          types: [
            "fighting",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/892.png",
        },
        {
          id: 1103,
          name: "Urshifu",
          types: [
            "fighting",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/892.png",
        },
        {
          id: 1104,
          name: "Urshifu",
          types: [
            "fighting",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/892.png",
        },
        {
          id: 1105,
          name: "Zarude",
          types: [
            "dark",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/893.png",
        },
        {
          id: 1106,
          name: "Regieleki",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/894.png",
        },
        {
          id: 1107,
          name: "Regidrago",
          types: [
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/895.png",
        },
        {
          id: 1108,
          name: "Glastrier",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/896.png",
        },
        {
          id: 1109,
          name: "Spectrier",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/897.png",
        },
        {
          id: 1110,
          name: "Calyrex",
          types: [
            "psychic",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/898.png",
        },
        {
          id: 1111,
          name: "Calyrex",
          types: [
            "psychic",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/898.png",
        },
        {
          id: 1112,
          name: "Calyrex",
          types: [
            "psychic",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/898.png",
        },
        {
          id: 1113,
          name: "Wyrdeer",
          types: [
            "normal",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/899.png",
        },
        {
          id: 1114,
          name: "Kleavor",
          types: [
            "bug",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/900.png",
        },
        {
          id: 1115,
          name: "Ursaluna",
          types: [
            "ground",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/901.png",
        },
        {
          id: 1116,
          name: "Ursaluna",
          types: [
            "ground",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/901.png",
        },
        {
          id: 1117,
          name: "Basculegion",
          types: [
            "water",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/902.png",
        },
        {
          id: 1118,
          name: "Basculegion",
          types: [
            "water",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/902.png",
        },
        {
          id: 1119,
          name: "Sneasler",
          types: [
            "fighting",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/903.png",
        },
        {
          id: 1120,
          name: "Overqwil",
          types: [
            "dark",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/904.png",
        },
        {
          id: 1121,
          name: "Enamorus",
          types: [
            "fairy",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/905.png",
        },
        {
          id: 1122,
          name: "Enamorus",
          types: [
            "fairy",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/905.png",
        },
        {
          id: 1123,
          name: "Sprigatito",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/906.png",
        },
        {
          id: 1124,
          name: "Floragato",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/907.png",
        },
        {
          id: 1125,
          name: "Meowscarada",
          types: [
            "grass",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/908.png",
        },
        {
          id: 1126,
          name: "Fuecoco",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/909.png",
        },
        {
          id: 1127,
          name: "Crocalor",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/910.png",
        },
        {
          id: 1128,
          name: "Skeledirge",
          types: [
            "fire",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/911.png",
        },
        {
          id: 1129,
          name: "Quaxly",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/912.png",
        },
        {
          id: 1130,
          name: "Quaxwell",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/913.png",
        },
        {
          id: 1131,
          name: "Quaquaval",
          types: [
            "water",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/914.png",
        },
        {
          id: 1132,
          name: "Lechonk",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/915.png",
        },
        {
          id: 1133,
          name: "Oinkologne",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/916.png",
        },
        {
          id: 1134,
          name: "Oinkologne",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/916.png",
        },
        {
          id: 1135,
          name: "Tarountula",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/917.png",
        },
        {
          id: 1136,
          name: "Spidops",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/918.png",
        },
        {
          id: 1137,
          name: "Nymble",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/919.png",
        },
        {
          id: 1138,
          name: "Lokix",
          types: [
            "bug",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/920.png",
        },
        {
          id: 1139,
          name: "Pawmi",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/921.png",
        },
        {
          id: 1140,
          name: "Pawmo",
          types: [
            "electric",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/922.png",
        },
        {
          id: 1141,
          name: "Pawmot",
          types: [
            "electric",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/923.png",
        },
        {
          id: 1142,
          name: "Tandemaus",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/924.png",
        },
        {
          id: 1143,
          name: "Maushold",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/925.png",
        },
        {
          id: 1144,
          name: "Maushold",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/925.png",
        },
        {
          id: 1145,
          name: "Fidough",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/926.png",
        },
        {
          id: 1146,
          name: "Dachsbun",
          types: [
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/927.png",
        },
        {
          id: 1147,
          name: "Smoliv",
          types: [
            "grass",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/928.png",
        },
        {
          id: 1148,
          name: "Dolliv",
          types: [
            "grass",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/929.png",
        },
        {
          id: 1149,
          name: "Arboliva",
          types: [
            "grass",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/930.png",
        },
        {
          id: 1150,
          name: "Squawkabilly",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/931.png",
        },
        {
          id: 1151,
          name: "Squawkabilly",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/931.png",
        },
        {
          id: 1152,
          name: "Squawkabilly",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/931.png",
        },
        {
          id: 1153,
          name: "Squawkabilly",
          types: [
            "normal",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/931.png",
        },
        {
          id: 1154,
          name: "Nacli",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/932.png",
        },
        {
          id: 1155,
          name: "Naclstack",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/933.png",
        },
        {
          id: 1156,
          name: "Garganacl",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/934.png",
        },
        {
          id: 1157,
          name: "Charcadet",
          types: [
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/935.png",
        },
        {
          id: 1158,
          name: "Armarouge",
          types: [
            "fire",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/936.png",
        },
        {
          id: 1159,
          name: "Ceruledge",
          types: [
            "fire",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/937.png",
        },
        {
          id: 1160,
          name: "Tadbulb",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/938.png",
        },
        {
          id: 1161,
          name: "Bellibolt",
          types: [
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/939.png",
        },
        {
          id: 1162,
          name: "Wattrel",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/940.png",
        },
        {
          id: 1163,
          name: "Kilowattrel",
          types: [
            "electric",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/941.png",
        },
        {
          id: 1164,
          name: "Maschiff",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/942.png",
        },
        {
          id: 1165,
          name: "Mabosstiff",
          types: [
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/943.png",
        },
        {
          id: 1166,
          name: "Shroodle",
          types: [
            "poison",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/944.png",
        },
        {
          id: 1167,
          name: "Grafaiai",
          types: [
            "poison",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/945.png",
        },
        {
          id: 1168,
          name: "Bramblin",
          types: [
            "grass",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/946.png",
        },
        {
          id: 1169,
          name: "Brambleghast",
          types: [
            "grass",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/947.png",
        },
        {
          id: 1170,
          name: "Toedscool",
          types: [
            "ground",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/948.png",
        },
        {
          id: 1171,
          name: "Toedscruel",
          types: [
            "ground",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/949.png",
        },
        {
          id: 1172,
          name: "Klawf",
          types: [
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/950.png",
        },
        {
          id: 1173,
          name: "Capsakid",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/951.png",
        },
        {
          id: 1174,
          name: "Scovillain",
          types: [
            "grass",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/952.png",
        },
        {
          id: 1175,
          name: "Rellor",
          types: [
            "bug",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/953.png",
        },
        {
          id: 1176,
          name: "Rabsca",
          types: [
            "bug",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/954.png",
        },
        {
          id: 1177,
          name: "Flittle",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/955.png",
        },
        {
          id: 1178,
          name: "Espathra",
          types: [
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/956.png",
        },
        {
          id: 1179,
          name: "Tinkatink",
          types: [
            "fairy",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/957.png",
        },
        {
          id: 1180,
          name: "Tinkatuff",
          types: [
            "fairy",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/958.png",
        },
        {
          id: 1181,
          name: "Tinkaton",
          types: [
            "fairy",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/959.png",
        },
        {
          id: 1182,
          name: "Wiglett",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/960.png",
        },
        {
          id: 1183,
          name: "Wugtrio",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/961.png",
        },
        {
          id: 1184,
          name: "Bombirdier",
          types: [
            "flying",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/962.png",
        },
        {
          id: 1185,
          name: "Finizen",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/963.png",
        },
        {
          id: 1186,
          name: "Palafin",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/964.png",
        },
        {
          id: 1187,
          name: "Palafin",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/964.png",
        },
        {
          id: 1188,
          name: "Varoom",
          types: [
            "steel",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/965.png",
        },
        {
          id: 1189,
          name: "Revavroom",
          types: [
            "steel",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/966.png",
        },
        {
          id: 1190,
          name: "Cyclizar",
          types: [
            "dragon",
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/967.png",
        },
        {
          id: 1191,
          name: "Orthworm",
          types: [
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/968.png",
        },
        {
          id: 1192,
          name: "Glimmet",
          types: [
            "rock",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/969.png",
        },
        {
          id: 1193,
          name: "Glimmora",
          types: [
            "rock",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/970.png",
        },
        {
          id: 1194,
          name: "Greavard",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/971.png",
        },
        {
          id: 1195,
          name: "Houndstone",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/972.png",
        },
        {
          id: 1196,
          name: "Flamigo",
          types: [
            "flying",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/973.png",
        },
        {
          id: 1197,
          name: "Cetoddle",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/974.png",
        },
        {
          id: 1198,
          name: "Cetitan",
          types: [
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/975.png",
        },
        {
          id: 1199,
          name: "Veluza",
          types: [
            "water",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/976.png",
        },
        {
          id: 1200,
          name: "Dondozo",
          types: [
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/977.png",
        },
        {
          id: 1201,
          name: "Tatsugiri",
          types: [
            "dragon",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/978.png",
        },
        {
          id: 1202,
          name: "Tatsugiri",
          types: [
            "dragon",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/978.png",
        },
        {
          id: 1203,
          name: "Tatsugiri",
          types: [
            "dragon",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/978.png",
        },
        {
          id: 1204,
          name: "Annihilape",
          types: [
            "fighting",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/979.png",
        },
        {
          id: 1205,
          name: "Clodsire",
          types: [
            "poison",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/980.png",
        },
        {
          id: 1206,
          name: "Farigiraf",
          types: [
            "normal",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/981.png",
        },
        {
          id: 1207,
          name: "Dudunsparce",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/982.png",
        },
        {
          id: 1208,
          name: "Dudunsparce",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/982.png",
        },
        {
          id: 1209,
          name: "Kingambit",
          types: [
            "dark",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/983.png",
        },
        {
          id: 1210,
          name: "Great Tusk",
          types: [
            "ground",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/984.png",
        },
        {
          id: 1211,
          name: "Scream Tail",
          types: [
            "fairy",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/985.png",
        },
        {
          id: 1212,
          name: "Brute Bonnet",
          types: [
            "grass",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/986.png",
        },
        {
          id: 1213,
          name: "Flutter Mane",
          types: [
            "ghost",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/987.png",
        },
        {
          id: 1214,
          name: "Slither Wing",
          types: [
            "bug",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/988.png",
        },
        {
          id: 1215,
          name: "Sandy Shocks",
          types: [
            "electric",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/989.png",
        },
        {
          id: 1216,
          name: "Iron Treads",
          types: [
            "ground",
            "steel",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/990.png",
        },
        {
          id: 1217,
          name: "Iron Bundle",
          types: [
            "ice",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/991.png",
        },
        {
          id: 1218,
          name: "Iron Hands",
          types: [
            "fighting",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/992.png",
        },
        {
          id: 1219,
          name: "Iron Jugulis",
          types: [
            "dark",
            "flying",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/993.png",
        },
        {
          id: 1220,
          name: "Iron Moth",
          types: [
            "fire",
            "poison",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/994.png",
        },
        {
          id: 1221,
          name: "Iron Thorns",
          types: [
            "rock",
            "electric",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/995.png",
        },
        {
          id: 1222,
          name: "Frigibax",
          types: [
            "dragon",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/996.png",
        },
        {
          id: 1223,
          name: "Arctibax",
          types: [
            "dragon",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/997.png",
        },
        {
          id: 1224,
          name: "Baxcalibur",
          types: [
            "dragon",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/998.png",
        },
        {
          id: 1225,
          name: "Gimmighoul",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/999.png",
        },
        {
          id: 1226,
          name: "Gimmighoul",
          types: [
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/999.png",
        },
        {
          id: 1227,
          name: "Gholdengo",
          types: [
            "steel",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1000.png",
        },
        {
          id: 1228,
          name: "Wo-Chien",
          types: [
            "dark",
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1001.png",
        },
        {
          id: 1229,
          name: "Chien-Pao",
          types: [
            "dark",
            "ice",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1002.png",
        },
        {
          id: 1230,
          name: "Ting-Lu",
          types: [
            "dark",
            "ground",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1003.png",
        },
        {
          id: 1231,
          name: "Chi-Yu",
          types: [
            "dark",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1004.png",
        },
        {
          id: 1232,
          name: "Roaring Moon",
          types: [
            "dragon",
            "dark",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1005.png",
        },
        {
          id: 1233,
          name: "Iron Valiant",
          types: [
            "fairy",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1006.png",
        },
        {
          id: 1234,
          name: "Koraidon",
          types: [
            "fighting",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1007.png",
        },
        {
          id: 1235,
          name: "Miraidon",
          types: [
            "electric",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1008.png",
        },
        {
          id: 1236,
          name: "Walking Wake",
          types: [
            "water",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1009.png",
        },
        {
          id: 1237,
          name: "Iron Leaves",
          types: [
            "grass",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1010.png",
        },
        {
          id: 1238,
          name: "Dipplin",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1011.png",
        },
        {
          id: 1239,
          name: "Poltchageist",
          types: [
            "grass",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1012.png",
        },
        {
          id: 1240,
          name: "Poltchageist",
          types: [
            "grass",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1012.png",
        },
        {
          id: 1241,
          name: "Sinistcha",
          types: [
            "grass",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1013.png",
        },
        {
          id: 1242,
          name: "Sinistcha",
          types: [
            "grass",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1013.png",
        },
        {
          id: 1243,
          name: "Okidogi",
          types: [
            "poison",
            "fighting",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1014.png",
        },
        {
          id: 1244,
          name: "Munkidori",
          types: [
            "poison",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1015.png",
        },
        {
          id: 1245,
          name: "Fezandipiti",
          types: [
            "poison",
            "fairy",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1016.png",
        },
        {
          id: 1246,
          name: "Ogerpon",
          types: [
            "grass",
            "rock",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1017.png",
        },
        {
          id: 1247,
          name: "Ogerpon",
          types: [
            "grass",
            "fire",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1017.png",
        },
        {
          id: 1248,
          name: "Ogerpon",
          types: [
            "grass",
            "water",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1017.png",
        },
        {
          id: 1249,
          name: "Ogerpon",
          types: [
            "grass",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1017.png",
        },
        {
          id: 1250,
          name: "Archaludon",
          types: [
            "steel",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1018.png",
        },
        {
          id: 1251,
          name: "Hydrapple",
          types: [
            "grass",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1019.png",
        },
        {
          id: 1252,
          name: "Gouging Fire",
          types: [
            "fire",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1020.png",
        },
        {
          id: 1253,
          name: "Raging Bolt",
          types: [
            "electric",
            "dragon",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1021.png",
        },
        {
          id: 1254,
          name: "Iron Boulder",
          types: [
            "rock",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1022.png",
        },
        {
          id: 1255,
          name: "Iron Crown",
          types: [
            "steel",
            "psychic",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1023.png",
        },
        {
          id: 1256,
          name: "Terapagos",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1024.png",
        },
        {
          id: 1257,
          name: "Terapagos",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1024.png",
        },
        {
          id: 1258,
          name: "Terapagos",
          types: [
            "normal",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1024.png",
        },
        {
          id: 1259,
          name: "Pecharunt",
          types: [
            "poison",
            "ghost",
          ],
          sprite: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/1025.png",
        },
      ]
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
