import styled, {css} from 'styled-components'

const HomepageCss = css`
    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 20px 80px;
    ${'' /* margin-top: ${props => props.mt}; */}
`

export const HomePageContainer = styled.div`
   ${HomepageCss}
`
