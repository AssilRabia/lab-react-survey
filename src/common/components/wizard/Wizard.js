/**
 * Class Header
 * @class Header
 * @classdesc Represent the map component
 * @extends Component
 * @author clenon <code@carloslenon.com>
 * 
 */
//core dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles, Button, Zoom, Grow } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import RestoreIcon from '@material-ui/icons/Restore';
import Quiz from './../quiz/Quiz';
import Counter from './../counter/Counter';
import ProgressBar from './../progress/ProgressBar';
import surveysData from './surveys.json';
import Header from "../header/Header";

const styles = theme => ({
    grid: {
        padding: 10,
        width: 'auto',
        margin: 0,
        marginTop: '3%'
    },
    button: {
        margin: theme.spacing.unit,
        opacity: 0.6
    },
});

class Wizard extends Component {

	constructor(props){
        super(props);
        	    
		this.state = {            
            survey: surveysData[0],
            answer: '',
            summary: [],
            showSummary: false,
            step: 0
        };
    }

    handleChange = (_cntx) => {        
        this.setState({answer: _cntx.target.value});
    }

    nextSurvey = () => {
        this.setState((prevState) => {
            const counter = prevState.step + 1;

            if(prevState.answer !== '') {
            }

            return {
                step: counter,
                survey: surveysData[counter],
                answer: '',
                summary: prevState.answer !== '' ? [...this.state.summary, {
                    id: prevState.survey.id,
                    question: prevState.survey.question,
                    answer: prevState.answer 
                }] : this.state.summary
            }
        })
    }
    
    backSurvey = () => {
        this.setState((prevState) => {
            const counter = prevState.step - 1,
                surveyFromSurveys = surveysData[counter];
            let surveisReduced = prevState.summary.filter(item => item.id !== surveyFromSurveys.id);
            let survey = prevState.summary.filter(item => item.id === surveyFromSurveys.id)[0];
                        
            return {
                step: counter,
                survey: surveysData[counter],
                answer: survey !== undefined ? survey.answer : '',
                summary: surveisReduced
            }
        })
    }

    cleanSurvey = () => {
        this.setState({ 
            step: 0,            
            answer: '',
            survey: surveysData[0], 
            summary: []
        });
    }

	render() {
        const { classes } = this.props, 
            { answer, step, summary, survey } = this.state;
		return (
		    <div>
                <Header appName="Survey" />
                <Grid container justify="center" spacing={0} className={'default-transition ' + classes.grid}>
                    <Grid item xs={10} sm={8} md={6} lg={6} className="default-transition">
                        <Grid container justify="center" spacing={0} className="default-transition">
                            <Grid item xs={12} sm={12} md={3} lg={2} className="align-vrt-midl default-transition">
                                <Counter number={survey.id} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} lg={10} className="default-transition">
                                <ProgressBar total={surveysData.length - 1} data={summary} />
                                <Quiz summary={summary} data={survey} answer={answer} handleChange={this.handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className="default-transition txt-right m-t-10">
                                {
                                    step > 0 && step < surveysData.length - 1 ?
                                        <Zoom in={true} style={{ transitionDelay: true ? 300 : 50 }}>
                                            <Button
                                                variant="fab"
                                                mini
                                                color="primary"
                                                aria-label="Back"
                                                className={classes.button}
                                                onClick={this.backSurvey}>
                                                <NavigateBeforeIcon />
                                            </Button>
                                        </Zoom>: null
                                }
                                {
                                    step === surveysData.length - 1 ?
                                        <Zoom in={true} style={{ transitionDelay: true ? 300 : 50 }}>
                                            <Button
                                                variant="fab"
                                                mini
                                                color="secondary"
                                                aria-label="Back"
                                                className={classes.button}
                                                onClick={this.cleanSurvey}>
                                                <RestoreIcon />
                                            </Button>
                                        </Zoom>: null
                                }
                                {
                                    step !== surveysData.length - 1 ?
                                        <Grow in={true} style={{ transitionDelay: true ? 300 : 50 }}>
                                            <Button
                                                variant="fab"
                                                mini
                                                color="secondary"
                                                aria-label="Next"
                                                className={classes.button}
                                                onClick={this.nextSurvey}>
                                                <NavigateNextIcon />
                                            </Button>
                                        </Grow>: null
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

		);
	}
}

Wizard.propTypes = {
	classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Wizard);

