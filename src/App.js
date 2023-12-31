import React from 'react';
import './App.css';
import Main from './containers/main'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './store/store'

let { store, persistor } = configureStore()

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <Main/>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;