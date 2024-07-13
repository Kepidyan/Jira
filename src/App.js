import React from 'react';
import Header from './view/components/global/header';
import Auth from './view/pages/auth';
import { db, auth, doc, getDoc, onAuthStateChanged } from './services/firebase/firebase';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuth: false,
      firstName: '',
      lastName: '',
      headline: ''
    }

  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {  
      if (user) {
        
          this.setState({
            isAuth: true
          });

          const { uid } = user;
          const ref = doc(db, 'registerUsers', uid);

          getDoc(ref).then((userData) => {
            if (userData.exists()) {
              this.setState({
                ...userData.data()
              })
            }
          })
      } else {
      }


    })
  }

  render() {
    console.log(this.state, '>>>>');
    
    return (
      <div className="App">
        <Header />
        <Auth />
      </div>
    )
  }
}



export default App;



