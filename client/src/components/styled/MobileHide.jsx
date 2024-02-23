import styled from 'styled-components';

export const MobileHide = styled.div`
  @media only screen and (max-width: ${(props) => props.maxWidth ? props.maxWidth + 'px' : '992px'}) {
    display: ${(props) => props.disabled ? 'block' : 'none'};
  }
`