import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducer/themeReducer';
import filmredus from './reducer/listReducer';


const store = configureStore({
    reducer :{
      theme : themeReducer,
      film: filmredus
    }, 
  });

export default store