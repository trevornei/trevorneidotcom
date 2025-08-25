import Nav from "./components/Nav";
import CardTwo from "./home/cardTwo";
import Hero from "./home/hero";
import CardThree from "./home/cardThree";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Nav className="fixed right-0 top-0 z-50" />
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <Hero />
          <CardTwo />
       	  <CardThree />
	</div>
      </div>
    </>
  );
}
