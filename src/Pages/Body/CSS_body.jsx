import styled from "styled-components";
export const S_NewProduct = styled.div`
  padding: 0 160px;
  margin-bottom: 46px;
  position: relative;
  h1 {
    margin: 80px 0 80px 0;
    text-align: center;
  }
  background-color: green;

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
  background-color: red;
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
  height: 300px;
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
  background-color: #ccc;
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
