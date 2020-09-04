import React, {useState} from 'react'
import tw, {styled} from "twin.macro"

import {AppBar} from '@material-ui/core'



const Header = tw.header`bg-gray-700 w-full h-16 flex flex-row justify-center items-center`

const Search = tw.div`flex flex-row rounded w-56 h-10 overflow-hidden shadow`

const CityInput = tw.input`appearance-none py-2 px-3`

const SearchBtn = tw.div`bg-gray-800 w-full h-full flex flex-row justify-center items-center`


export default function Navbar({fetchWeather}) {
  
  const [city, setCity]  = useState('London')
  return (
    <div>
     <Header>
       <Search>
        <CityInput placeholder="Enter a city here" value={city} onChange={e => setCity(e.target.value)}/>
        <SearchBtn onClick={()=>fetchWeather(city)}>
        <svg viewBox="0 0 20 20" fill="white" class="search w-6 h-6"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </SearchBtn >
        </Search>
    </Header>
    </div>
  )
}
