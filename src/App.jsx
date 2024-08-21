import Home from "./Pages/Home";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App dark:bg-neutral-900 bg-slate-100">
      <Analytics />
      <Header />
      <Home />
    </div>
  );
}
export default App;
