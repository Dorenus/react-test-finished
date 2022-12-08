import { useEffect, useState } from 'react';
import './App.css';
import Jokes from './components/Jokes';


function App() {

  <button>Get jokes</button>

  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setJokes(result.jokes);
        },
        (error) => {}
      );
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <ul>

           {jokes?.map(joke => (
          <Jokes key={joke.id} joke={joke}/>))
          }

        </ul>      
      </header>
    </div>
  );
}

export default App;
