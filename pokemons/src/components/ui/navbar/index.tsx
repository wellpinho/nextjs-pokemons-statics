import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import styles from "./styles.module.scss";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        // imagens devem ser dentro do projeto se for de url precisa de request api
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="Icon from app"
        width={70}
        height={70}
      />
      <h2>P</h2>
      <h3>okemons</h3>

      <Spacer css={{ flex: 1 }} />

      <p>Favorites</p>
    </div>
  );
}
