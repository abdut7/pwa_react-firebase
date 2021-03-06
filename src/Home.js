import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Achive from './images/achivements.png'
import Admision from './images/adm1.png'
import Programm from './images/icon-06.jpg'
import IQAc from './images/iqac.png'
import  Salient from './images/Salient-feature.png'
import About from './images/abt-us.png'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

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
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

const cards = [0,1, 2, 3, ];
const contents=['Established as a first grade college in 1948, Farook College underwent an exponential growth in terms of factors such as...',
               'Admission 2019 – 20:  Admission Process to Various UG and PG Programmes Commenced. For online submission: visit  www.farookcollege.in   ',
                'Farook College (Autonomous) is today the biggest residential Post Graduate Institution under the Calicut University. The college has been re-accredited...',
                 'In pursuance of its Action Plan for performance evaluation, assessment and accreditation and quality up-gradation of institutions of higher education,...' ,
                 'The college that attained commendable achievements in various categories during the last years has unique salient features.',
                 'Dedicated to the cause of social uplift through education, Farook College stands unique among the educational institutions of Kerala.  In... '];
const headofcard=['Achievements','Admission','Programmes','IQAC','Salient features','About Us'];
const imagesc=[Achive,Admision,Programm,IQAc,Salient,About]

    function Album(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />

            <main className={classes.main}>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="p" variant="h2" align="center" color="textPrimary" gutterBottom>
                            FAROOK COLLEGE CALICUT
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Farook College, today,is the biggest residential postgraduate institution in Kerala offering 20 undergraduate, 15 postgraduate and Eight Ph.D. programmes.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={16} justify="center">
                                <Grid item>
                                    <Link>
                                        <Button variant="contained" color="primary">
                                            Student Zone
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Contact Us
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map(card => (
                            <Grid item key={card} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        src={imagesc[card]} // eslint-disable-line max-len
                                       component={"img"}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {headofcard[card]}
                                        </Typography>
                                        <Typography>
                                            {contents[card]}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View More
                                        </Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>

                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Album);
