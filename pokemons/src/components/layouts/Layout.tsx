import Head from "next/head";
import { Button } from "@nextui-org/react";
import { Navbar } from "../ui/navbar";

import styles from "./styles.module.scss";

interface IChildren {
  children: React.ReactNode;
  title?: string;
}

// child receive from father the value via props
export function Layout({ children, title }: IChildren) {
  return (
    <>
      <Head>
        <title>{title || "Pokemons"}</title>
        <meta name="author" content="Wellington Pinho" />
        <meta
          name="description"
          content={`Informações sobre Pokemons ${title}`}
        />
        <meta
          name="keywords"
          content={`${title}, pokemons, pokemon, pokedex, Pokemon`}
        />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </>
  );
}
