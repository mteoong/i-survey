import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a> </li>
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits }</li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ];
            }
    }xs
    
    render() {
        return (
            <nav className="indigo lighten-1" style={{padding: "0px 20px"}}>
                <div className="new-wrapper">
                    <Link
                        to={this.props.auth ? "/surveys" : "/"}
                        className="left brand-logo"
                    > 
                        I-Survey 
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Header);