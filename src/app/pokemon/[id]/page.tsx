// /app/pokemon/[id]/page.tsx
import Image from 'next/image';

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  weight: number;
}

async function getPokemonDetails(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch Pokemon details');
  }
  return res.json();
}

export default async function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pokemon: PokemonDetails = await getPokemonDetails(params.id);

  return (
    <div>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <p>Weight: {pokemon.weight}</p>
      <h2>Types</h2>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}
