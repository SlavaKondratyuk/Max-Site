import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect}
    from 'react-router-dom';
import Header from './components/Header/NavMenu'
import About from './components/About'
import Price from './components/Price'
import HowWeWork from './components/HoWeWork'
import Gallery from './components/Galeria'
import Footer from './components/Footer'


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* Обертка для всего что использует роутинг */}
                <Router>
                    <div>

                        {/* Изменяющаяся часть роутера */}
                        <Switch>

                            {/* В зависимости от пути, отрисует компонент */}
                            <Route path="/about" component={About} />
                            <Route path="/price" component={Price} />
                            <Route path="/work" component={HowWeWork} />
                            <Route path="/gallery" component={Gallery} />

                            {/* Redirect */}
                            <Redirect to="/about"/>
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>

        );
    }
};

export default App;