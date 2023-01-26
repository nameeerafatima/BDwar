import {Routes, Route} from 'react-router-dom'
import {Index} from './Components/Index'
import {Dashboard} from './Components/Dashboard'
import {AllJobs} from './Components/AllJobs'
import { AboutUs } from './Components/AboutUs'
import {Contact} from './Components/Contact'
import {LogIn} from './Components/LogIn'
import {SignUp} from './Components/SignUp'
import { Edit } from './Components/Edit'
// import { NewNavbar } from './Components/NewNavbar'
import { Navbar } from './Components/Navbar'
import { SampleFetch } from './Components/SampleFetch'
import { NewDash } from './Components/NewDash'


function App() {
  return (
    <>
    {/* <NewNavbar/> */}
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Index/>}></Route>
      <Route path='/dashboard' element={<NewDash/>}></Route>
      <Route path='/alljobs' element={<AllJobs/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>

      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
    </Routes>
    {/* <SampleFetch/> */}
    </>
  );
}

export default App;