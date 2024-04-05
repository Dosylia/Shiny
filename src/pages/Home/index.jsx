import styled from 'styled-components'
import Resume from '../../assets/undraw_Resume_re_hkth 1.svg'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const StyledContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const StyledContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  text-align: left;
`

const StyledCTA = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 261px;
  height: 40px;
  background-color: ${colors.primary};
  color: ${colors.backgroundLight};
  border-radius: 30px;
  border: none;
  text-decoration: none;
`

const StyledImage = styled.img`
  width: 541px;
  height: 506px;
`

function Home() {
  return (
    <StyledContainer>
      <StyledContentLeft>
        <StyledH1>
          Repérez vos besoin on s'occupe du reste, avec les meilleurs talents
        </StyledH1>
        <StyledCTA to="freelances">Faire le test</StyledCTA>
      </StyledContentLeft>
      <StyledContentRight>
        <StyledImage src={Resume} />
      </StyledContentRight>
    </StyledContainer>
  )
}

export default Home
