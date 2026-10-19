import { BottomNav, Header } from '@/components'
import { Toaster } from '@/components/ui/toaster'

import Home from './Pages/Home'

function App() {
  return (
    <div className='App dark:bg-[#0B0B0B] bg-slate-100 pb-16 sm:pb-0'>
      <Header />
      <Home />
      <BottomNav />
      <Toaster />
    </div>
  )
}
export default App
