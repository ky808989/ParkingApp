import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    renderImg() {
        switch (this.props.auth) {
            case null:
                return <img className="activator" src='' />;
            case false:
                return <img className="activator" src='' />;
            default:
                return <div className="profileImg" style={{ padding: '5px', margin: '0 20px 20px 0' }}><img style={{ height: '50px', width: '50px' }} className="activator" src={this.props.auth.photo} /></div>;
        }
    }
    renderContent() {
        switch (this.props.auth) {
            case null:
                return '';
            case false:
                return '';
            default:
                return this.props.auth.user_name;
        }
    }
    render() {
        console.log(this.props.auth);
        return (

            <div className="dashboard-div" style={{ height: '70px', width: '300px' }} >
               
                    <div className="card horizontal">
                        <div className="card-image waves-effect waves-block waves-light">
                            {this.renderImg()}
                        </div>
                        <div className="card-content ">
                            <span className="card-title activator grey-text text-darken-4">{this.renderContent()}<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
                );
    }
}


// find value from state
function mapStateToProps({auth}) {
    //drog piece info from state
    return {auth};
}

export default connect(mapStateToProps)(Dashboard);
