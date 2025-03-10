import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>Cabeçalho</header>
      <main className="flex-1">
        <div>Conteúdo</div>  
      </main>
      <footer>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge&challenge=rest-countries-api-with-color-theme-switcher&ref=challenge&ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/josielLima"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josiel Lima
        </a>
        .
      </footer>
    </>
  );
}
