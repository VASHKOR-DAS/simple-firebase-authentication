// import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './Firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  // user er data peteo pari abr na o pete pari, tai ata 1ta state a rakhbo
  const [user, setUser] = useState({})

  const provider = new GoogleAuthProvider();


  //signInBtn even handler
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setUser(user)
    })
    .catch( error => {
      console.error('error: ', error);
      // error hole kono kichui set krbona
    })
  }

  //signOutBtn even handler
  const handleGoogleSignOut = () => {
    signOut(auth)
    .then( () => {

      // signIn korle amader state a user ase, sei user signOut a click korle state ta k empty object (user k remove) kore dao 
      setUser({});
    })

    .catch( () => {
      
      //kono error holeo seta empty object hye jabe
      setUser({});
    })
  }


  return (
    <div className='App'>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <button onClick={handleGoogleSignOut}>Google Sign Out</button>
      
      {/* user info */}
      <div>
        <h3>User name: {user.displayName}</h3>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" srcSet=''/>
      </div>
    </div>
  );
}

export default App;
