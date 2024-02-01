import styled from 'styled-components'
import { device } from '../components.style/sizes'

export const Container = styled.div`
width: 100%;
max-width: ${props => props.width || '1400px'};
margin: 0 auto;
padding: 0 20px;
@media${device.tablet} {
  padding: 30px;
  
}`