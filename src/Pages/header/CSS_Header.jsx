import styled from "styled-components";
export const S_topHeader = styled.div`
  padding: 0 100px;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .topHeader_search {
    display: flex;
    padding: 0 54px;
    justify-content: space-between;
    align-items: center;
    width: 596px;
    height: 46px;
    border: 1.5px solid #9f57ec;
    border-radius: 24px;
  }
  .Login {
    min-width: 187px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
  }
`;
export const S_navigation = styled.div`
  width: 100%;
  height: 75px;
  padding: 0 350px;
  background: linear-gradient(180deg, #0097fe 0%, #0097fe 100%);
  /* display: flex; */
  /* align-items: center; */
  .ant-breadcrumb {
    span {
      color: #fff;
    }
    ol {
      width: 100%;
      height: 75px;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
export const S_inforExtra = styled.div`
  margin-top: 82px;
  width: 100%;
  padding: 0 160px;
  img {
    max-width: 357px;
    max-height: 151px;
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

export const S_contact = styled.div`
  padding: 0 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 352px;
  min-height: 622px;
  h1 {
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -0.019em;
    color: #0379ca;
  }
  p {
    letter-spacing: -0.019em;
    color: #5c677d;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .wrapInput {
    label {
      color: #0379ca;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
    input {
      margin-top: 12px;
      height: 40px;
      display: block;
      width: 100%;
      border: 1px solid #3498ca;
      border-radius: 6px;
    }
    margin-bottom: 12px;
  }
  button {
    background: #0099f2;
    border-radius: 12px;
    width: 100%;
    height: 54px;
    color: #fff;
    border: none;
    margin-top: 30px;
  }
  img {
    height: 620px;
  }
`;
