import { Routes, Route } from 'react-router-dom'
import { LayoutDefault } from './layout/LayoutDefault'
import { Home } from './pages/Home'


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<LayoutDefault />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}