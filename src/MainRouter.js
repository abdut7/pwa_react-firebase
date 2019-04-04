import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ResponsiveDrawer from './ResponsiveDrawer'
import Home from './Home'
import Signin from './Signin'
import Resuts from './Result'
import  ExamApplication from  './ExamApplication'
import HallTicket from './HallTicket'
class MainRouter extends Component {
    // Removes the server-side injected CSS when React component mounts
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        return (<div>
            <ResponsiveDrawer/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/result" component={Resuts}/>
                <Route path="/xamapply" component={ExamApplication}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/hallticket" component={HallTicket}/>
             
            </Switch>

        </div>)
    }
}

export default MainRouter
