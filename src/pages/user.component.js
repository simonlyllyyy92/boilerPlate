import React from 'react'
import {connect} from 'react-redux'
import {demoAction, sagaAction} from '../redux/userReducer/user.action'

class User extends React.Component {
    updateUser = () => {
        this.props.setUser("updated User")
    }

    sagaUpdateUser = () => {
        this.props.setSagaUser('updated Saga User')
    }

    render(){
        return (
            <div>
                <h1>{this.props.currentUser}</h1>
                <button onClick = {this.sagaUpdateUser}>Testing User reducer</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setUser: (user) =>dispatch(demoAction(user)),
    setSagaUser: (user) => dispatch(sagaAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)