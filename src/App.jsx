import { useEffect, useState } from 'react'
import { getCharacters } from './services/endPointGet.services'
import { Character, CharacterList } from './components'



const url = "https://rickandmortyapi.com/api/character"


function App() {

  const [characters, setcharacters] = useState([])
  const [loader, setloader] = useState(true)
  const[page, setPage] = useState(1)
  
  useEffect(() => {
    const getData = async () => {
      const data = await getCharacters(page)
      // console.log(data)
      setcharacters(data)
      setloader(false)
    }

    getData()
  }, [page])


  if (loader) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div className='bg-dark text-white' >

        <div className='container'>
        <h1 className='text-center display-1 py-4'> rick And Morty </h1>
        <NavPage page={page} setPage={setPage}/>
        <CharacterList characters={characters} />
      </div>
    </div>
  )
}


function NavPage(props) {
  var count = props.page
  console.log(count)
  return (
      <header className='d-flex justify-content-between '>
          {
            props.page == 1 ? (<h5>Pagina principal</h5>) : (<button onClick={()=>{props.setPage(props.page -1)}} className='btn btn-outline-info'>Atras</button>)
          }
          <button onClick={()=>{props.setPage(props.page + 1)}} className='btn btn-outline-info'>Siguiente</button>
      </header>
  )
}

export default App