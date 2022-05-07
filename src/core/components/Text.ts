import { colors } from 'src/core/constants'
import styled from 'styled-components'

export default styled.p<{ cantSelect: boolean }>`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.white};

  ${(props) => {
    let optionalStyle = ``

    if (props.cantSelect) {
      optionalStyle += `user-select: none;`
    }

    return optionalStyle
  }}
`
