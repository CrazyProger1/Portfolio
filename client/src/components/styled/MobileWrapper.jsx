import styled from 'styled-components';

export const MobileWrapper = styled.div`
  @media only screen and (min-width: ${(props) => props.minWidth ? props.minWidth + 'px' : '992px'}) {
    display: ${(props) => props.disabled ? 'block' : 'none'};
  }
`
