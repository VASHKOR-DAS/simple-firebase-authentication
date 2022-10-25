// import logo from './logo.svg';
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './Firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  // user er data peteo pari abr na o pete pari, tai ata 1ta state a rakhbo
  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  //googleSignInBtn event handler
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  //googleSignOutBtn event handler
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

  // githubSigIn event handler
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const user = result.user
      console.log(user);
    })

    .catch( error => {
      console.error ('error: ', error);
    })

  }




  return (
    <div className='App'>

      {/* condition ? true : false */}

      {/*Toggle SingIn/SignOut button 
      Jodi user er email thake (tar mane user loging ase) tobe signOut button dekhabo
      nahole signIn button dekhabo */}
      { user.email ?
      <button onClick={handleGoogleSignOut}>Google Sign Out</button>
      :
      <>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        <button onClick={handleGithubSignIn}>Github Sign In</button>
      </>
      }

      {/* user info */}

      {/*Conditional Rendering
      user er email jodi amader kase thake tobe amra nicher div ta dekhabo*/}
      {user.email && <div>
        <h3>User name: {user.displayName}</h3>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" srcSet=''/>
      </div>}



    </div>
  );
}

export default App;