import styled from "styled-components";
export const S_FooterWeb = styled.div`
  padding: 50px 160px;
  width: 100%;
  background: #0097fe;
  margin-top: 200px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  span {
    display: block;
    color: #f1f1f1;
    margin-bottom: 10px;
  }
  h1 {
    font-weight: 500;
    font-size: 24px;
    color: #f1f1f1;
  }
  .footItem {
    padding: 0 10px;
  }
  .wrapEmail {
    width: 453px;
    input {
      width: 453px;
      height: 51px;
      border: 1px solid #ffffff;
      border-radius: 11px;
      padding: 0 30px;
      color: #fff;
    }
  }
`;
