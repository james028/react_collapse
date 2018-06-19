import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Colap from './colap'

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Colap title="review"/>
                        <Colap title="overview"/>
                        <Colap title="features"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
