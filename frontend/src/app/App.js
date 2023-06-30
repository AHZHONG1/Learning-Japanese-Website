
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "../style/App.css"

import { NavBar } from '../components'
import { Home, Vocab, Grammar, Dev, VocabLearn, VocabQuiz, DevVocab, DevAdd } from '../pages'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/vocab" element={<Vocab />}></Route>
                <Route exact path="/vocab/learn" element={<VocabLearn />}></Route>
                <Route exact path="/vocab/quiz" element={<VocabQuiz />}></Route>
                <Route exact path="/grammar" element={<Grammar />}></Route>
                <Route exact path="/dev" element={<DevVocab />}></Route>
                <Route exact path="/dev/view" element={<DevVocab />}></Route>
                <Route exact path="/dev/add" element={<DevAdd />}></Route>
            </Routes>
        </Router>
    )
}

export default App