import React, { Component } from 'react';

class TypeWriter extends Component {
    state = {
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 180
    }

    componentDidMount() {
        this.handleTyping();
    }

    handleTyping = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;    // 0 % 10 = 0, 1 % 10 = 1, 11 % 10 = 1
        const fullText = dataText[i];           // placeholder for full text from array
        const typeSpeed = 180, 
              deleteSpeed = 30;

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),         // substring keeps replacing "text" with a chunk of characters instead of one by one character
            typingSpeed: isDeleting ? deleteSpeed : typeSpeed
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true }), 300);     // *500* setting this timeout for too long causes a display bug, words being skipped or state for delete was not set fast enough
        }
        else if (isDeleting && text === '') {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });
        } 
        else { /* Do nothing when above conditions is not met, and continue with the 1st setState to either remove or add to text... */ }

        setTimeout(this.handleTyping, typingSpeed);
    };

    render() {
        return (
            <h1>
                { this.props.heading } 
                <span style={{color: '#0376dd'}}>{ this.state.text }</span>
                <span id="cursor"></span>
            </h1>
        );
    }
}

export default TypeWriter;