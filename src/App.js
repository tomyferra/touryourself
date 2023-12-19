
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import Links from '../src/components/Links'
import './App.css';
import { useEffect, useState } from 'react';
import PlacesDataService from './services/places-services';



function App() {


  const [places,setPlaces] = useState([]);
  const [allPlaces,setallWines] = useState([]);
  const [totalVotes,settotalVotes] = useState(0);
  const [IsLoading,setIsLoading] = useState(true);
  let votes = 0;

  //mongodb call
  useEffect(() => {
    async function loadPlaces(){
      setIsLoading(true);
      PlacesDataService.getAll()
        .then(response => {
          setPlaces(response.data);
          votes=0;
          setallWines(response.data);
          for (var i = 0; i < response.data.length; i++) {
            votes = response.data[i].Totalqualifications + votes;
          }
          settotalVotes(votes);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          alert(error);
        });
    }
    setIsLoading(false);
    loadPlaces();
  }, []);




  return (
    <div className="App mt-auto d-flex flex-column min-vh-100">
      <header className="App-header">
        <Navbar />
        <Hero IsLoading={IsLoading} placesCount={allPlaces.length} totalVotes={totalVotes} />
        <Links />
      </header>
    </div>
  );
}

export default App;
