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
export const S_Review = styled.div`
  padding: 0 160px;
  width: 100%;
  margin-top: 50px;
  position: relative;
  /* margin-bottom: 100px; */

  h1 {
    font-weight: 600;
    font-size: 36px;
    color: #0379ca;
    text-align: center;
    margin-bottom: 20px;
  }
  #review1 {
    width: 100%;
  }
  .listReview {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -68px;
    padding: 0 50px;
    .itemReview {
      width: calc(100% / 3 - 50px);
      background-color: #fff;
      box-shadow: 0px 4px 35px 4px rgba(4, 102, 200, 0.1);
      padding: 30px;
      border-radius: 12px;
      .User {
        display: flex;
        align-items: center;
        img {
          width: 56px;
          height: 56px;
          border-radius: 50%;
        }
        .inforUser {
          margin-left: 16px;
          h3 {
            color: #0379ca;
            font-weight: 600;
            font-size: 20px;
            line-height: 150%;
          }
          span {
            color: #4c778f;
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
      .stars {
        margin-top: 22px;
      }
      .textReview {
        margin-top: 10px;
        display: block;
        color: #4d778f;
      }
      .productBuy {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
