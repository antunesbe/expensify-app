// Higher Order Component (HOC) - A component that render another component
// Reuso code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h3>This is private info. Please do not share.</h3>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated
                ?   <WrappedComponent {...props}/>
                :   <p>Please login to see the info</p>
            }

        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="details" />, document.getElementById('app'));
