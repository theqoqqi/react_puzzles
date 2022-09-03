// import styles from './HackableButton.module.css';
import React from 'react';
import {Button} from 'react-bootstrap';

export default class HackableButton extends React.Component {

    static propTypes = {
        ...Button.propTypes,
    };

    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    componentDidMount() {
        this.initButton();
    }

    initButton() {
        // Если disabled будет назначать React, то onClick не будет работать, если убрать disabled через инспектор.
        if (this.props.disabled) {
            this.ref.current.disabled = true;
        }
    }

    render() {
        let {
            disabled,
            ...buttonProps
        } = this.props;

        return (
            <Button ref={this.ref} {...buttonProps} />
        );
    }
}