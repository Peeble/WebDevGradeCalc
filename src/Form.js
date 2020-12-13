import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { withTheme } from '@material-ui/core'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hw: '',
            exam1: '',
            exam2: '',
            group1: '',
            group2: '',
            total: ''
        }
    }

    

    handleUsernameChange = (event) => {
        this.setState({
            hw: event.target.value
        })
    }
    
    handleExam1 = (event) => {
        this.setState({
            exam1: event.target.value
        })
    }
    handleExam2 = (event) => {
        this.setState({
            exam2: event.target.value
        })
    }
    handleProject1 = event => {
        this.setState({
            group1: event.target.value
        })
    }
    handleProject2 = event => {
        this.setState({
            group2: event.target.value
        })
    }


    handleSubmit = event => {
        //alert(`${this.state.hw*2} ${this.state.exams*2}`);
        let totalgrade = this.state.hw*.25 + this.state.exam1*.10 + this.state.exam2*.10 + this.state.group1*.25 + this.state.group2*.25 + 5
        this.setState({
            total: totalgrade
        })
        event.preventDefault();
    }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}> 
                <div className="element">
                    <label>HW: </label>
                    <TextField color="primary" type="number" variant="outlined" value={this.state.hw} onChange={this.handleUsernameChange} />
                </div>
                <div className="element">
                    <label>Exam 1: </label>
                    <TextField type="number" variant="outlined"  value={this.state.exam1} onChange={this.handleExam1} />
                </div>
                <div className="element">
                    <label>Exam 2: </label>
                    <TextField type="number" variant="outlined"  value={this.state.exam2} onChange={this.handleExam2} />
                </div>
                <div className="element">
                    <label>Group Project 1: </label>
                    <TextField type="number" variant="outlined"  value={this.state.group1} onChange={this.handleProject1} />
                </div>
                <div className="element">
                    <label>Group Project 2: </label>
                    <TextField type="number" variant="outlined"  value={this.state.group2} onChange={this.handleProject2} />
                </div>
                <Button type="submit" color="primary" variant="contained">Submit</Button>
            </form>
            <div>
                <label>{this.state.total}</label>
            </div>
            </div>
        )
    }
}

export default Form