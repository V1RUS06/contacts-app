import React, {useEffect} from 'react';
import './styles/App.css'
import {AppRouter} from "./router/AppRouter";
import {useActions} from "./hooks/useActions";

function App() {
  const { setIsAuth, updateUserData } = useActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const userId = localStorage.getItem('userId')
      updateUserData(userId)

      setIsAuth(true)
    }

  }, [])

  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
