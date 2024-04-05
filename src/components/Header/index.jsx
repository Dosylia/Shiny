import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledLogo = styled.img`
  height: 97px;
  width: 260px;
`

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  &:hover {
    cursor: pointer;
  }
`

function Header() {
  return (
    <StyledHeader>
      <div>
        <StyledLogo src={Logo} />
      </div>
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
