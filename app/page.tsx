import { About } from "./_Components/IndexPages/About";
import { Header } from "./_Components/NavBar/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <About />
      </main>
      <footer></footer>
    </div>
  );
}
