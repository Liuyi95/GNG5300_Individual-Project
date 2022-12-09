import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import DisplayData from './DisplayData';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SignInSide from './Login';
import SignUpSide from './SignUp';
import HomePage from './Homepage/HomePage';
import Albums from './Albums/Albums';
import Account from './Account/Account'


function App() {
  const client =new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql"
  });
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      {/* <header>
        <h1>Hello World</h1>
      </header> */}
      <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/albums" element={<Albums />} />
      </Routes>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/signup" element={<SignUpSide />} />
        <Route path="/account" element={<Account />} />
       
        {/* <Route path="/albums" element={<Albums />} /> */}
        {/* <Route path="/homepage" element={<HomePage />} /> */}
        {/* <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<Error/>} /> */}
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
