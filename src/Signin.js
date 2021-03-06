import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import  fire from './config/firbase'
import  { Redirect } from 'react-router-dom'

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
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: '',
            regno:'',
            password:'',
            redirect:false

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }
    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {

var p=''
        const userRef=fire.database().ref(this.state.value);
        userRef.child('password').once( 'value').then(  (snapshot)=>{
            p=snapshot.val();

                 if(this.state.password==p){
                   let r=this.state.regno;
                     sessionStorage.setItem('loginstatus', 1);
                    sessionStorage.setItem('regno',r);
                   
                      alert('Log in success ' );
                      this.setState({ redirect:true})
                 }else{
                     alert('UserName or Password Incorrect' );
                 }
        })



        event.preventDefault();
    }

    renderRedirect=()=>{
       if(this.state.redirect){
           return <Redirect to='/'/>
       }

    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }
    render() {


    const { classes } = this.props;


    return (
        <main className={classes.main}>
        {this.renderRedirect()}
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                   Student Sign in
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="text">Register Number</InputLabel>
                        <Input type="text" value={this.state.value} onChange={this.handleChange} autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                       onClick={this.handleSubmit}
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </form>
            </Paper>
        </main>
    );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
