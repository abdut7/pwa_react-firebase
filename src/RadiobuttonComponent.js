import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'sem1',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Semester</FormLabel>
          <RadioGroup
            aria-label="Semester"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="sem1" control={<Radio />} label="Semester 1" />
            <FormControlLabel value="sem2" control={<Radio />} label="Semester 2" />
            <FormControlLabel value="sem3" control={<Radio />} label="Semester 3" />
            <FormControlLabel value="sem4" control={<Radio />} label="Semester 4" />
            <FormControlLabel value="sem5" control={<Radio />} label="Semester 5" />
            <FormControlLabel value="sem6"   disabled control={<Radio />} label="Semester 6" />
  
          </RadioGroup>
        </FormControl>
        
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
