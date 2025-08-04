import Nav from "./components/Nav";
import CardTwo from "./home/cardTwo";
import Hero from "./home/hero";
import CardThree from "./home/cardThree";
import Spline from '@splinetool/react-spline/next';


export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Nav className="fixed right-0 top-0 z-50" />
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <Hero />
          <Spline
           className="absolute inset-0 md:-top-24 -z-20"
           scene="https://prod.spline.design/cV2-clwFjWSOxbGh/scene.splinecode" 
          /> 
          <CardTwo />
       	  <CardThree />
	</div>
      </div>
    </>
  );
}
