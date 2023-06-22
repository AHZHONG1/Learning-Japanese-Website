
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { Home, Vocab, Grammar, Dev } from '../pages'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/vocab" element={<Vocab />}></Route>
                <Route exact path="/grammar" element={<Grammar />}></Route>
                <Route exact path="/dev" element={<Dev />}></Route>
            </Routes>
        </Router>
    )
}

export default App