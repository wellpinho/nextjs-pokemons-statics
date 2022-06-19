import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/layouts";
import { pokemonApi } from "../api";
import { IPokemonListReponse, SmallPokemon } from "../interfaces";
import Image from "next/image";

import styles from "../../styles/home.module.scss";
interface IProps {
  pokemons: SmallPokemon[];
}

// send title props to children component
const Home: NextPage<IProps> = ({ pokemons }) => {
  return (
    <Layout title="Pokemons list">
      <div className="container">
        <div className="row">
          <h2 className={styles.h2}>List of Pokemons</h2>
          {pokemons.map((item) => {
            return (
              <div className="mb-4 col" key={item.id}>
                <div className="card-group">
                  <div className={styles.card}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      width="150"
                      height="150"
                    />
                    <div className={styles.cardBottom}>
                      <h6>{item.name}</h6>
                      <h6>#{item.id}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
