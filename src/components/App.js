import React, { Component } from 'react';
import Projects from './Projects';
import Socials from './Socials';
import profile from '../assets/TechPortrait.png';
import Title from './Title';
import Jokes from './Jokes';

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    state = { displayBio: false };

    //constructor() {
    //    super();
    //    this.state = { displayBio: false };

    //    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    //}

    // readMore() {
    //     //console.log('readMore this', this);
    //     this.setState({ displayBio: true});
    // }

    // showLess() {
    //     this.setState({ displayBio: false });
    // }

    toggleDisplayBio = () => { //Class property and initializer
        this.setState({ displayBio: !this.state.displayBio });
        //this.state.displayBio = !this.state.displayBio; //DO NOT DIRECTLY CHANGE STATE!
    }

    render() {
        // const bio = this.state.displayBio ? (
        //     <div>
        //         <p>I live in Corvallis, Oregon and I code every day.</p>
        //         <p>My favorite language is JavaScript.</p>
        //     </div>
        // ) : null;

        return (
            <div>
                <img src={profile} alt='Profile' className='profile' />
                <h1>Hello!</h1>
                <p>My namie is Daniel</p>
                <Title />
                <p>I am looking to work on impactful projects.</p>
                {
                this.state.displayBio ? 
                (
                    <div>
                        <p>I live in Corvallis, Oregon and I code every day.</p>
                        <p>My favorite language is JavaScript.</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )
                }
                <hr />
                <Projects />
                <hr />
                <Socials />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;