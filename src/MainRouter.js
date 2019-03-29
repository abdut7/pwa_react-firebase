import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ResponsiveDrawer from './ResponsiveDrawer'

import Signin from './Signin'
import  ExamApplication from  './ExamApplication'
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
                {/*<Route exact path="/" component={Home}/>*/}
                {/*<Route path="/users" component={Users}/>*/}
                <Route path="/xamapply" component={ExamApplication}/>
                <Route path="/signin" component={Signin}/>
                {/*<PrivateRoute path="/user/edit/:userId" component={EditProfile}/>*/}
                {/*<Route path="/user/:userId" component={Profile}/>*/}
            </Switch>
        </div>)
    }
}

export default MainRouter
