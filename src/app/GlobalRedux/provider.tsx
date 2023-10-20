'use client';

import { Provider } from 'react-redux'
import { store } from './store';
import { useEffect } from 'react';

export function Providers({children} : any){


    // useEffect(() => {
    //     const savedState = localStorage.getItem('reduxState');
    //     if (savedState) {
    //       const initialState = JSON.parse(savedState);
    //       store.dispatch({ type: 'HYDRATE', payload: initialState });
    //     }
    //     // Save state to localStorage
    //     localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    //     console.log(store.getState())

    //   }, [store]);

    
    
      
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}