import React from 'react'
import MenuItem from './menu-item.component'
import {connect} from 'react-redux'

class Directory extends React.Component {
    render(){
        return (
            <div className = 'directory-menu'>
                {
                    this.props.directory.map(section => (
                        <MenuItem 
                            key = {section.id} 
                            title = {section.title} 
                            imageUrl = {section.imageUrl}
                            size={section.size}
                            linkUrl = {section.linkUrl}
                        />
                    ))
                }
            </div>
        )
       
    }
}

const mapStateToProps = (state) => ({
  directory: state.directory.sections
})

export default connect(mapStateToProps)(Directory)