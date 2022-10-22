import styled from "styled-components";
export const S_NewInfor = styled.div`
  padding: 0 160px;
  width: 100%;
  margin-top: 89px;
  h1 {
    font-weight: 600;
    font-size: 36px;
    color: #0379ca;
    text-align: center;
  }
  .arrangerInfor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .arrangerInfor_item {
      text-align: center;
      width: calc(100% / 3);
      padding: 0 20px;
      .wrapItem {
        position: relative;
        img {
          width: 100%;
        }
        p {
          height: 84px;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(217, 217, 217, 0.03);
          backdrop-filter: blur(152.5px);
          border-radius: 12px;
          margin: 0;
          font-weight: 700;
          font-size: 26px;
          color: #ffffff;
          padding: 0 20px;
        }
      }
    }
  }
`;
