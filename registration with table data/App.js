import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from "react-tap-event-plugin";


import "./css/App.css";
import Form from "./Form";
import Table from "./Table";
import PopMenu from "./PopMenu";

injectTapEventPlugin();


//Handles Menu Action
function menuHandleTouchTap() {
    console.log('onTouchTap triggered on the Left Menu component');
    this.State.open = true;
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class App extends Component {
    state = {
        data: []
    };
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <AppBar 
                        title={<span style={styles.title}>Sign Up!</span>}
                        onLeftIconButtonTouchTap = {menuHandleTouchTap}
                        iconElementRight={<FlatButton label="Login" />}
                    />
                    <PopMenu
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                    />
                    <Form
                        onSubmit={submission =>
                        this.setState({
                            data: [...this.state.data, submission]
                        })}
                    />
                    <Table
                        data={this.state.data}
                        header={[
                        {
                            name: "First name",
                            prop: "firstName"
                        },
                        {
                            name: "Last name",
                            prop: "lastName"
                        },
                        {
                            name: "Username",
                            prop: "username"
                        },
                        {
                            name: "Email",
                            prop: "email"
                        }
                        ]}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
