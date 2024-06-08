import { Header } from "@/layout/Header.tsx";
import { Nav } from "@/layout/Navigation.tsx";

function App() {
  return (
    <div className="bg-primary-500 flex max-h-screen flex-col">
      <Header />
      <div className="flex-grow-1 grid grid-cols-[auto,1fr] overflow-auto ">
        <Nav />
      </div>
    </div>
  );
}

export default App;
