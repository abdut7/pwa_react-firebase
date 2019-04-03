import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StudentIcon from '@material-ui/icons/Face';
import ParentIcon from '@material-ui/icons/Group';
import TechersIcon from '@material-ui/icons/FaceTwoTone';
import Notification from '@material-ui/icons/NotificationImportant';
//import SigninIcon from '@material-ui/icons/';
import ExamApplyIcon from '@material-ui/icons/SettingsApplications';
import HAlticketIcon from '@material-ui/icons/Dock';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom'
import Home from './Home'
import  Auth from './config/authCheck'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        loginStatus: localStorage.getItem('loginstatus'),
        mobileOpen: false,
        drawerItems:['Home','Student Zone', 'Parent Zone', 'Teachers Zone', 'Notifications'],
        loginItems:['Home','Exame Apply','Result','Hall Ticket','Logout'],
        loginicons:[<HomeIcon/>,<ExamApplyIcon/>,<InboxIcon/>,<HAlticketIcon/>,<MailIcon/>],
        icons:[<HomeIcon/>,<StudentIcon /> ,<ParentIcon/> ,<TechersIcon /> ,<Notification/> ],
        linkto:['/','/signin','/xamapply','/signin','/results']
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                {Auth.isAuth()&&(
                <List>

                    {

                        this.state.loginItems.map((text, index) => (
                        <Link to={this.state.linkto[index]}>
                        <ListItem button key={text}>
                            <ListItemIcon>{this.state.icons[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                        </Link>
                    ))}
                </List>
                )}
                 {!Auth.isAuth()&&(
                <List>

                    {

                        this.state.drawerItems.map((text, index) => (
                        <Link to={this.state.linkto[index]}>
                        <ListItem button key={text}>
                            <ListItemIcon>{this.state.icons[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                        </Link>
                    ))}
                </List>
                )}
                <Divider />
                {


                    /*<List>*/}
                    {/*{['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                        {/*<ListItem button key={text}>*/}
                            {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                            {/*<ListItemText primary={text} />*/}
                        {/*</ListItem>*/}
                    {/*))}*/}
                {/*</List>*/}
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                         Farook College
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                </main>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
