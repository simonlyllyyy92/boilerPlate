import React from 'react'
import Directory from '../component/directory.component'
import Button from 'react-bootstrap/Button';
import {HomePageContainer} from '../styles/styled-components'


const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
      {/* <Button variant="primary">Primary</Button> */}
    </HomePageContainer>
)
}



export default HomePage