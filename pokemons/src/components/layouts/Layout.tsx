import Head from "next/head";
import { Button } from "@nextui-org/react";

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

      {/* navbar */}

      <main>
        {children}
        <Button color="primary">{title}</Button>
      </main>
    </>
  );
}
