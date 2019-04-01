import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class CheckboxesGroup extends React.Component {
    state = {
        papers:['COMPUTER ORGANISATION AND ARCHITECTURE','JAVA PROGRAMMING','WEB PROGRAMMING USING PHP','PRINCIPLES AND SOFTWARE ENGINEERING','NON CONVENTIONAL ENERGY SOURCES'],
        paperstatus:[],


    };

    handleChange = name => event => {
      console.log(name)

        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { paper1, jason, antoine } = this.state;
        //const error = [paper1, jason, antoine].filter(v => v).length !== 2;

        return (
            <div className={classes.main}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select Papers </FormLabel>
                    <FormGroup>


                        {this.state.papers.map((text, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.papers[index]} onChange={this.handleChange(this.state.papers[index])} value={this.state.papers[index]} />
                                }
                                label={this.state.papers[index]}
                            />
                        ))}


                    </FormGroup>
                    <FormHelperText>Select Papers {this.state.paperstatus[4]}</FormHelperText>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"

                        className={classes.submit}
                    >
                      SAVE
                    </Button>
                </FormControl>

            </div>
        );
    }
}

CheckboxesGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
