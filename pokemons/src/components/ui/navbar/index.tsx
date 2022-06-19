import NextLink from "next/link";
import { Spacer, Link, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export function Navbar() {
  const { theme } = useTheme();
  return (
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container">
    //     <Link className="navbar-brand" href="/">
    //       <>
    //         <Image
    //           src={
    //             "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    //           }
    //           alt="Icon from app"
    //           width={70}
    //           height={70}
    //         />
    //         <span>Pokemons</span>
    //       </>
    //     </Link>
    //     <button className="btn btn-success">Favorites</button>
    //   </div>
    // </nav>
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="Icon from app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites">
        <Link css={{ paddingRight: "20px" }}>
          <Text color="white">Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
}
