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
  box-shadow: 0px 4px 12px 6px rgba(25, 32, 91, 0.15);
  border-radius: 32px 0px 0px 32px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
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
