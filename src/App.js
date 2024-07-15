import React from 'react';
import Header from './view/components/global/header';
import Auth from './view/pages/auth';
import LoadingWrapper from './view/components/shared/LoadingWrapper';
import { db, auth, doc, getDoc, onAuthStateChanged } from './services/firebase/firebase';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      isAuth: false,
      userProfileInfo: {
        firstName: '',
        lastName: '',
        headline: '',
        email: ''
      },

    }

  }

  componentDidMount() { 
    this.setState({
      loading: true
    });
    
    onAuthStateChanged(auth, (user) => { 
      this.setState({
        loading: false
      });

      if (user) {
          this.setState({
            isAuth: true
          });

          const { uid } = user;
          const ref = doc(db, 'registerUsers', uid);

          getDoc(ref).then((userData) => {
            if (userData.exists()) {
              this.setState({
                userProfileInfo: userData.data() 
              })
            }
          })
      } else {

      }

    })
  }

  render() {
    const { userProfileInfo, loading, isAuth } = this.state;

    return (
      <LoadingWrapper loading={loading} fullScreen>
        <div>
          <Header 
            isAuth={isAuth} 
            userProfileInfo={userProfileInfo} 
          />
          <Auth />
        </div>
      </LoadingWrapper>
    )
  }
}



export default App;



