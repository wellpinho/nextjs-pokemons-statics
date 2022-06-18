import type { NextPage } from "next";
import { Button } from "@nextui-org/react";

import { Layout } from "../components/layouts";

// send title props to children component
const Home: NextPage = () => {
  return (
    <Layout title="Pokemons list">
      <h1>Hello world</h1>
      <Button color="success">UI Button</Button>
    </Layout>
  );
};

export default Home;
