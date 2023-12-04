import logo from './logo.svg';
import './App.css';
import IteamDeleter from './Components/IteamDeleter';
import Button from './Components/Button';

function App() {
  return (
    <section>
    {/* here is the  Deleter component*/}
    < IteamDeleter/>
    {/* here we are Creating the buttons and reusing them for the multiple buttons by passing props */}
    <Button type="submit" title=" Ramkumar"/>
    <Button type="submit" title="Login"/>

    {/* */}
    {/* */}
    </section>
  );
}

export default App;
