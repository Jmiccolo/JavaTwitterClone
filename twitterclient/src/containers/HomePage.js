import React from 'react';
import NavBar from '../components/NavBar';
import Timeline from "./Timeline";
import { Route, Switch } from 'react-router-dom';

const HomePage = ({user}) => {
    return (<>
        <NavBar user={user}/>
        <Switch>
            <Route path="/home"><Timeline /></Route>
            <Route path="/explore"><Timeline/></Route>
            <Route path="/notifications"><Timeline/></Route>
            <Route path="/messages"><Timeline/></Route>
            <Route path="/bookmarks"><Timeline/></Route>
            <Route path="/lists"><Timeline/></Route>
            <Route path={`/${user.handle}`}><Timeline/></Route>
        </Switch>
    </>)
};

export default HomePage;