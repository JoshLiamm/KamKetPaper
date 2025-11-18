
import { Route, Routes } from 'react-router'
import Stop from './Stop'
import App from './App'


export default function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/stop' element={<Stop/>}></Route>
    </Routes>
  )
}
