import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes,setJokes] = useState([])


  // load API response from backend using axios
  useEffect(() => {

    axios.get('/api/v1/jokes')
      .then((response) => {
          setJokes(response.data)
          console.log(response);
      })
      .catch((err) => {
          console.error(err);
      })
  },[])

  return (
    <>
      <div>
        <h1>Chai and fullstack</h1>
        <p>JOKES : {jokes.length}</p>


        {jokes.map((joke) => (
            <div key={joke.text}>
              <h3>{joke.text}</h3>
              </div>
        ))}
       </div>
    </>
  )
}

export default App
