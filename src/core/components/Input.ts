import styled from 'styled-components'
import { colors } from '../constants'

export default styled.input`
  height: 5vh;
  width: 150px;
  padding: 0 10px;
  margin: 0 10px;
  color: ${colors.white};
  font-size: 20px;
  font-weight: 700;
  background-color: ${colors.verySoftBlue};
  border: 2px solid ${colors.veryDarkBlue};
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
`
