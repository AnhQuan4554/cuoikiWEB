import styled from "styled-components";
export const S_NewProduct = styled.div`
  padding: 0 160px;
  margin-bottom: 46px;
  position: relative;
  h1 {
    margin: 80px 0 80px 0;
    text-align: center;
    color: #0379ca;
    /* font-family: 'Open Sans'; */
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
  }

  .NewProduct_sort {
    background: linear-gradient(
      180deg,
      #0097fe 0%,
      rgba(0, 151, 254, 0.87) 100%
    );
    border-radius: 12px;
    padding: 0 150px;
    .ant-breadcrumb {
      ol {
        height: 72px;
        justify-content: space-between;
        align-items: center;
        color: #000;
        li {
          .ant-breadcrumb-link {
            justify-content: center;
          }
          .btnSort {
            color: #000;
            font-weight: 500;
            font-size: 18px;
            &.active {
              color: #1890ff;
            }
          }
          // của riêng cái drop
          span {
            width: 134px;
            height: 36px;
            border-radius: 6px;
            display: flex;
            background-color: #fff;
            align-items: center;
            justify-content: space-between;
            margin-left: 40px;
          }
        }
      }
    }
  }
`;

export const S_storeProduct = styled.div`
  position: relative;
  margin-top: 30px;
  .btnNewProduct {
    justify-content: end;
    display: flex;
    margin-right: 22px;
    img {
      &:first-child {
        width: 56px;
        height: 56px;
      }
      &:last-child {
        width: 56px;
        height: 56px;
      }
    }
  }
`;
export const S_ItemProduct = styled.div`
  width: 262px;
  min-height: 300px;
  background: #ffffff;
  box-shadow: 0px 1px 13px 9px rgba(0, 151, 254, 0.1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .imgProduct {
      transform: scale(1.2);
      transition: all 0.4s linear;
    }
  }
  .imgCart {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 10px;
    right: 12px;
  }
  .imgProduct {
    width: 262px;
    height: 205px;
    border-radius: 12px;
  }
  .inforProduct {
    .inforName {
      margin-top: 10px;
      font-size: 16px;
      font-weight: 600;
      color: #0379ca;
      display: block;
      align-items: center;
      text-align: center;
    }
    .inforPrice {
      font-size: 16px;
      font-weight: 600;
      color: #0097fe;
      display: block;
      align-items: center;
      text-align: center;
    }
    .inforDescribe {
      color: #b8b8b8;
      display: block;
      text-align: center;
    }
  }
  .addProduct {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 45px;
  }
`;
export const S_SaleGoodProduct = styled.div`
  padding: 0 160px;
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: #0379ca;
  }
  .btnSale {
    width: 94px;
    height: 45px;
    position: absolute;
    z-index: 10;
    top: 24px;
    left: 3px;
  }
  .btnNewProduct {
    justify-content: end;
    display: flex;
    margin-right: 22px;
    img {
      &:first-child {
        width: 56px;
        height: 56px;
      }
      &:last-child {
        width: 56px;
        height: 56px;
      }
    }
  }
`;
export const S_Detail = styled.div`
  background: #f5f5f7;
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: center;
  .productDetail {
    background: #ffffff;
    border-radius: 32px;
    width: 520px;
    height: 640px;
    padding: 50px;
    .imgShowing {
      width: 100%;
      height: 381px;
      border-radius: 12px;
      margin-bottom: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .choseProduct {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 88px;
      width: 100%;
      img {
        height: 100%;
        border: 3px solid #d5eeff;
        border-radius: 12px;
      }
    }
  }
  .inforProductDetail {
    width: 517px;
    margin-left: 30px;
    background: #ffffff;
    border-radius: 32px;
    padding: 30px;
    h2 {
      color: #0379ca;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
    }
    .star {
      height: 21px;
      width: 222px;
    }
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #0379ca;
    }
    .ram {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ramItem {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: #ffffff;
        border: 2px solid #e9e9e9;
        border-radius: 8px;
        padding: 4px 20px;
        &.active {
          img {
            display: block;
          }
          border-color: #0097fe;
        }
        img {
          display: none;
          position: absolute;
          top: -7px;
          right: -7px;
        }
      }
    }
    .color {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .colorItem {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border: 2px solid #e9e9e9;
        border-radius: 8px;
        padding: 4px 20px;
        &.active {
          img {
            display: block;
          }
          border-color: #0097fe;
        }
        span {
          &:first-child {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background-color: red;
            margin-right: 20px;
          }
        }
        img {
          display: none;
          position: absolute;
          top: -7px;
          right: -7px;
        }
      }
    }
    .priceText {
      width: 100%;
      margin-top: 30px;
      span {
        display: block;
        color: #0097fe;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
      }
    }
    .btn {
      margin-top: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        padding: 6px 20px;
        color: #fff;
        background: #0379ca;
        border-radius: 12px;
        height: 48px;
        width: 188px;
        border: none;
        font-weight: 400;
        font-size: 20px;
      }
    }
    .inforDetail {
      margin-top: 50px;
      width: 100%;
      padding: 50px;
      align-items: center;
      display: flex;
      flex-direction: column;

      font-weight: 400;

      border: 2px solid #e9e9e9;
      border-radius: 12px;
      p {
        color: #989797;
        font-size: 16px;
      }
    }
  }
`;
export const S_HoangDuong = styled.div`
  .title3 {
    margin-top: 40px;
    /* background-color: red; */
  }
  .rightProduct_info-choose {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 192px;
    justify-content: space-around;
    border: 1.5px solid #9899a1;
    border-radius: 16px;
  }
  .rightProduct_info-amount {
    display: flex;
    justify-content: space-evenly;
  }
  .amountNumber {
    font-size: 40px;
    font-weight: 600 !important;
    margin: 0;
    font-size: 24px !important;
  }
  .minusButton {
    width: 32px;
    height: 32px;
    object-fit: cover;
    padding: 0px;
    background-color: #f3f3f3;
    border-radius: 50%;
    border: 1px solid #f4f4f4;
  }
  .addButton {
    width: 32px;
    height: 32px;
    object-fit: cover;
    padding: 0px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 1px solid #f4f4f4;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }
  .resumeLine {
    width: 100%;
    height: 3px;
    background-color: #9899a1;
    opacity: 0.3;
    margin-top: 36px;
  }

  .resumePrice {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .resumePrice {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .resumePrice-title {
    font-size: 20px;
    color: #9899a1;
  }
  .resumePrice-price {
    font-size: 40px;
    color: #0097fe;
  }

  .purchaseButton-buy {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    width: 100%;
    height: 60px;
    background-color: #0097fe;
    border: none;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .purchaseButton-buy:hover {
    background-color: #0379ca;
    transition: all 0.25s ease;
  }
  .purchaseButton-addToCast {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    color: #0097fe;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border: 2px solid #0097fe;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }

  .name {
    font-size: 24px;
    font-weight: 500;
    color: #0097fe;
    margin-bottom: 0;
  }

  .cast {
    width: 28px;
    height: 28px;
    object-fit: cover;
    text-align: center;
    margin-left: 8px;
  }

  .banner {
    width: 100%;
    height: 106px;
    object-fit: cover;
    border-radius: 4px;
    margin-top: 32px;
  }

  .bottomFeedback {
    margin: 36px 0 80px 0;
    display: flex;
  }
  .bottomFeedback-vote {
    display: flex;
    align-items: center;
    margin: 24px 0 24px 0;
    gap: 12px;
  }
  .bottomFeedback-votebar {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 12px;
    justify-content: space-between;
  }
  .bottomFeedback-review {
    margin-right: 72px;
  }

  .voteBar {
    width: 280px;
    height: 12px;
    border-radius: 6px;
    background-image: linear-gradient(90deg, #0097fe 60%, #e6e6e6 40%);
  }

  .voteLevel {
    font-weight: 600;
    font-size: 16px;
    color: #0097fe;
  }

  .bar {
    width: 548px;
  }

  .imageItem {
    margin-right: 32px;
    margin-bottom: 24px;
  }
`;
export const S_bottom = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f7;

  .circularProgress {
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 50%;
    background: conic-gradient(#0097fe 340deg, #dcdcdc 20deg);
  }
  .circularProgress::before {
    content: "";
    width: 180px;
    height: 180px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    transform: translate(5%, 5%);
  }
  .circularProgress-value {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: bold;
    color: #0097fe;
    transform: translateY(60%);
    z-index: 10;
  }
  .bottomFeedback {
    background-color: #fff;
    margin: 36px 0 80px 0;
    display: flex;
    width: 100%;
    /* height: 100%; */
    padding: 50px 100px;
  }
  .bottomFeedback-vote {
    display: flex;
    align-items: center;
    margin: 24px 0 24px 0;
    gap: 12px;
  }
  .bottomFeedback-votebar {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 12px;
    justify-content: space-between;
  }
  .bottomFeedback-review {
    margin-right: 72px;
  }

  .voteBar {
    width: 280px;
    height: 12px;
    border-radius: 6px;
    background-image: linear-gradient(90deg, #0097fe 60%, #e6e6e6 40%);
  }

  .voteLevel {
    font-weight: 600;
    font-size: 16px;
    color: #0097fe;
  }

  .bar {
    width: 548px;
  }

  .imageItem {
    margin-right: 32px;
    margin-bottom: 24px;
  }
`;
