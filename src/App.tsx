import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {StoreType} from "./Redux/state";

type PropsType = {
    store: StoreType
}

function App(props: PropsType) {
    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <SideBar profile={"Profile"} dialogs={"Dialogs"} music={"Music"} news={"News"}/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/profile" render={() => <Profile profilePage={props.store.state.ProfilePage} />}/>
                        <Route path="/dialogs" render={() => <Dialogs dialogPage={props.store.state.DialogsPage}/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        {/*   <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>*/}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;