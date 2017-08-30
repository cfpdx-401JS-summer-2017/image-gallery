import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            url: ''
        };
    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        let { title, description, url } = this.state;
        this.props.onSave({ title, description, url });
        this.setState({
            title: '',
            description: '',
            url: ''
        })
    }

    resetBunny = () => {
        this.setState({
            title: '',
            description: '',
            url: ''
        });
    }

    render() {

        const { title, description, url } = this.state;

        if(this.props.addBunny) {
            return (
                <section>
                <h4> Add new bunbun </h4>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        this.handleSubmit();
                    }}
                    onReset={event => {
                        event.preventDefault();
                        this.resetBunny();
                    }}
                    >
                    <label>
                        title:
                    <input name="title" value={title}
                            onChange={({ target }) => {
                                this.handleChange(target.name, target.value)
                            }} />
                    </label>
                    <label>
                        description:
                    <input name="description" value={description}
                            onChange={({ target }) => {
                                this.handleChange(target.name, target.value)
                            }} />
                    </label>
                    <label>
                        url:
                    <input name="url" value={url}
                            onChange={({ target }) => {
                                this.handleChange(target.name, target.value)
                            }} />
                    </label>
                    <button type="reset" > Reset </button>
                    <button type="submit"> Save </button>
                </form>
            </section>
        )
    }
        return <div></div>
    }
}