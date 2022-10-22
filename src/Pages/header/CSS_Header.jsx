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
