import { Grid } from "@nextui-org/react";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { pokemonApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/ui/card";
import { IPokemonListReponse, SmallPokemon } from "../interfaces";

import styles from "./styles.module.scss";
interface IProps {
  pokemons: SmallPokemon[];
}

// send title props to children component
const Home: NextPage<IProps> = ({ pokemons }) => {
  return (
    <Layout title="Pokemons list">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<IPokemonListReponse>(
    "/pokemon?limit=151"
  );

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
