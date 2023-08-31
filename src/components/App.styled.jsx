import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 380px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 20px;
  }

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1280px;
  }
`;
