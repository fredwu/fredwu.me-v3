import styled from 'styled-components'

import quotes from '../img/quotes.svg'

export default styled.blockquote`
  display: inline-block;
  padding: 2.5rem;
  font-size: 2rem;
  color: #333;
  line-height: 2.8rem;
  background: url(${quotes}) top 20px left no-repeat;
`
