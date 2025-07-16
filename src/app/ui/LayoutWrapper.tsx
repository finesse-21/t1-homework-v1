import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  padding: 0 16px;
  padding: 0;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 24px;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.18),
    0 2px 8px rgba(0, 0, 0, 0.12);
`;

export const TitleWrapperContainer = styled.div`
  width: 100%;
  background-color: #102040;
  padding: 32px 24px 0 24px;
  border-radius: 24px 24px 0 0;
  box-sizing: border-box;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 32px auto;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
`;
