import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEndPoints } from './redux/slice/userSlice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchEndPoints());
  }, [dispatch]);

  console.log(state.user.data.greeting);

  if (state.user.isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="App">
      <h1>Greetings fetching from databases</h1>
      <br />
      <h1>{state.user.data.greeting}</h1>
    </div>
  );
}

export default App;
