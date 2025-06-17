import Image from "next/image";
import Link from "next/link";
import Productcart from "./components/Productcart";

export default function Home() {
  return (
    <main>
      <h1 className="HELLO">Hello world</h1>
      <Link href="/user">Users</Link>
      <Productcart />
    </main>
  );
}
