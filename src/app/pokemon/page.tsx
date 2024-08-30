// /app/pokemon/page.tsx
import Link from 'next/link';

interface Pokemon {
  name: string;
  url: string;
}

async function getPokemonList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  const data = await res.json();
  return data.results;
}

export default async function PokemonPage() {
  const pokemonList: Pokemon[] = await getPokemonList();

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
