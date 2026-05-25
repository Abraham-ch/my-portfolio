import { Header } from '@/components'
import { Toaster } from '@/components/ui/toaster'

import Home from './Pages/Home'

function App() {
  return (
    <div className='App dark:bg-[#0B0B0B] bg-slate-100'>
      <Header />
      <Home />
      <Toaster />
    </div>
  )
}
export default App
