import styled from "styled-components";

export const Header = styled.header`
  height: 580px;
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 112px;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.36;
  letter-spacing: 0.1em;
  color: rgba(157, 164, 189, 0.6);

  &:before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    background-color: currentColor;
    margin-right: 20px;
  }
`;

export const CompanyName = styled.p`
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.16;
  letter-spacing: 0.05em;
`;

export const HeaderText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.62;
  letter-spacing: 0.02em;
`;
