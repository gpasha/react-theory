import { source } from 'axe-core'
import React from 'react'

export default class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{color: 'red'}}>Something went wrong</h1>
        }
        else {
            return this.props.children
        }
    }
}