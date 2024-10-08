import { Toaster } from "@/components/ui/toaster"

import Home from "./Pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App dark:bg-neutral-900 bg-slate-100">
      <Header />
      <Home />
      <Toaster />
    </div>
  );
}
export default App;
