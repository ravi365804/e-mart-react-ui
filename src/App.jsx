import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Route,Routes } from 'react-router-dom'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import Books from './stores/components/Books'
import WatchPage from './stores/pages/WatchPage'
import TVPage from './stores/pages/TVPage'
import ComputerPage from './stores/pages/ComputerPage'
import ACPage from './stores/pages/ACPage'
import FurniturePage from './stores/pages/FurniturePage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import BooksPage from './stores/pages/BooksPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import MobileSingle from './singles/MobileSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import WatchSingle from './singles/WatchSingle'
import ACSingle from './singles/ACSingle'
import BooksSingle from './singles/BooksSingle'
import TVSingle from './singles/TVSingle'
import ComputersSingle from './singles/ComputersSingle'
import MensSingle from './singles/MensSingle'
import WomenSingle from './singles/WomenSingle'
import SpeakersSingle from './singles/SpeakersSingle'
import KitchenSingle from './singles/KitchenSingle'
import FridgeSingle from './singles/FridgeSingle'
import UserCart from './stores/UserCart'


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/mobile' element={<MobilePage />} />
      <Route path='/watches' element={<WatchPage />} />
      <Route path='/tvs' element={<TVPage />} />
      <Route path='/computer' element={<ComputerPage />} />
      <Route path='/ac' element={<ACPage />} />
      <Route path='/furniture' element={<FurniturePage />} />
      <Route path='/menfashion' element={<MenPage />} />
      <Route path='/womanfashion' element={<WomanPage />} />
      <Route path='/books' element={<BooksPage />} />
      <Route path='/speaker' element={<SpeakerPage />} />
      <Route path='/kitchen' element={<KitchenPage />} />
      <Route path='/fridge' element={<FridgePage />} />

      <Route path='/kitchen' element={<Kitchen />} />
      <Route path='/books' element={<Books />} />
      <Route path='/mobile/:id' element={<MobileSingle />}/>
      <Route path='/furniture/:id' element={<FurnitureSingle />}/>
      <Route path='/watches/:id' element={<WatchSingle />}/>
      <Route path='/ac/:id' element={<ACSingle />}/>
      <Route path='/books/:id' element={<BooksSingle />}/>
      <Route path='/tvs/:id' element={<TVSingle />}/>
      <Route path='/computers/:id' element={<ComputersSingle />}/>
      <Route path='/menfashion/:id' element={<MensSingle />}/>
      <Route path='/woman/:id' element={<WomenSingle />}/>
      <Route path='/speaker/:id' element= {<SpeakersSingle />}/>
      <Route path='/kitchen/:id' element={<KitchenSingle />}/>
      <Route path='/fridge/:id' element={<FridgeSingle />}/>
      <Route path='/cart' element={<UserCart />}/>
    




      </Routes>
      
    </div>
  )
}

export default App