import React from "react";
import ReactDOM from "react-dom";
import { IndexLink } from 'react-router';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundPosition: 0
        }
    }
    componentDidMount() {
        this.changeImage();
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    changeImage() {
        this.interval = setInterval(() => {
            this.setState({
                backgroundPosition: this.state.backgroundPosition > 3 ? 0 : this.state.backgroundPosition + 1
            });
        }, 5000);
    }
    render() {
        const active = {
            color: '#2F4F4F'
        };
        const background = {
            backgroundPosition: Math.floor(this.state.backgroundPosition * (-25)) + '%' + ' 0'
        }
        return <div style={background} className='application'>
            <nav>
                <div className='container'>
                    <div className='logo'>
                        <IndexLink to='/'>
                            <h1>Weather APP</h1>
                        </IndexLink>
                        <IndexLink to='/'>
                            <img src='./img/logo.png' />
                        </IndexLink>
                    </div>
                    <div className='menu'>
                        <IndexLink activeStyle={active} to='/weather'>
                            <h1>
                                Check weather for city
                                </h1>
                        </IndexLink>
                        <IndexLink activeStyle={active} to='/info'>
                            <h1>
                                Information
                                </h1>
                        </IndexLink>
                    </div>
                </div>
            </nav>
            {this.props.children}
            <footer>
                <div className='container'>
                    <h4>Jakub Stępiński 2017</h4>
                </div>
            </footer>
        </div>;
    }
}
module.exports = Template;