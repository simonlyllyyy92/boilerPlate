import React from 'react'
import {connect} from 'react-redux'
import {demoAction} from '../redux/reducer1/user.action'

class User extends React.Component {
    updateUser = () => {
        this.props.setUser("updated User")
    }

    render(){
        return (
            <div>
                <h1>{this.props.currentUser}</h1>
                <button onClick = {this.updateUser}>Testing User reducer</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setUser: (user) =>dispatch(demoAction(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)