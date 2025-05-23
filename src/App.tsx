import { Header } from "./components/Header";
import { HeroSection } from "./components/Layout/HeroSection";
import Group from "./assets/Group.svg";
function App() {
  return (
    <main className="flex flex-col h-screen bg-dark-bg text-text font-family">
      <Header />
      {/* Group.svg de background */}
      {/* <div className="relative w-full h-full"> */}
      {/* <div className="absolute left-[10%]"> */}
      <img
        src={Group}
        alt="background"
        className="absolute left-[10%] top-[-20%] w-[470px] h-[660px]"
      />
      <img
        src={Group}
        alt="background"
        className="absolute right-[10%] top-[150px] w-[470px] h-[660px] rotate-180"
      />
      {/* </div> */}
      {/* </div> */}
      <div className="flex flex-col p-4">
        <HeroSection />
      </div>
      <section>{/* TODO: Add projects carousel */}</section>
      <section>{/* TODO: Add about me information */}</section>
      <section>{/* TODO: Add Professional experience information */}</section>
    </main>
  );
}

export default App;
