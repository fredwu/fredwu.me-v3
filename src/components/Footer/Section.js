import styled from 'styled-components'

export default styled.div`
  padding: 30px 10px !important;

  p:not(.excerpt) {
    margin-bottom: 0.3rem !important;
  }

  .note {
    color: #999;
    font-size: 0.8rem;
  }

  p.excerpt {
    color: #ccc;
    font-size: 0.9rem;
  }
`
