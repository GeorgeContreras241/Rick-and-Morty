import { useEffect, useState } from "react"
import axios from "axios"
const url = "https://rickandmortyapi.com/api/character"


function App() {
  const [personajes, setPerdonajes] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    apiCall()
  }, [])

  const apiCall = async () => {
    try{
      const response = await axios.get(url)
      setPerdonajes(response.data.results)
    } catch (error){
      setError(error)
    } finally {
      setisLoading(false)
    }
  }


  return (
    <div className="container">
      <div className="title">
        <h1 className="title__h1">Personajes Rick y Morty</h1>
      </div>
      <div className="container__card">
        {personajes && personajes.map((item) => (
          <div key={item.id} className="card">
            <div className="card__img">
              <img src={item.image} alt="" />
            </div>
            <div className="info">
              <div className="info__name">
                <h3>{item.name}</h3>
                <p>{item.status}-{item.species}</p>
              </div>
              <div className="info__origin">
                <span>Last known location:</span>
                <p>{item.origin.name}</p>
              </div>
              <div className="info__gender">
                <span>First seen in:</span>
                <p>{item.location.name}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  )
}

export default App
