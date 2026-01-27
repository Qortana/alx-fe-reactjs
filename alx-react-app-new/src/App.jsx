import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import CounterContext from './components/CounterContext';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
      </CounterContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
