import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import History from '../pages/History'
import Pending from '../pages/Pending'
import Home from '../pages/Home'
import Order from '../pages/Order'
import Footer from '../components/Footer';
import Admin from '../pages/Admin';
import Terms from '../pages/Terms';
import Contact from '../pages/Contact';
import page404 from '../pages/page404';
function App() {
    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/order" component={Order} />
                <Route path="/history" component={History} />
                <Route path="/admin" component={Admin} />
                <Route path="/pending" component={Pending} />
                <Route path="/terms" component={Terms} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={page404} />
            </Switch>

            <Footer></Footer>
        </Router>

    )
}
export default App