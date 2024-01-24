import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <header>
      <nav>
        <Link href={'/'}>Inicio</Link>
        <Link href={'#'}>Projetos</Link>
        <Link href={'#'}>Sobre mim</Link>

      </nav>

    </header>
  );
}
