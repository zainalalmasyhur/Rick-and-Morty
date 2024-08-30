// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import CharacterByLocation from './pages/CharacterByLocation';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/locations" element={<CharacterByLocation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
