<template>
  <div class="container">
    <!-- Header -->
    <div class="invoice-header">
      <div class="invoice-logo">
        <div class="logo"><img src="@/assets/image/hal_logo.png" alt="no_img"></div>
      </div>
      <div class="company-detail">
        <div class="invoice-company-name">
          <ul>
            <li>HAL LOGISTICS SOLE CO.,Ltd</li>
            <li>
              Chommany subdistrict, Saysettha district, Vientiane laos republic
            </li>
            <li>LAOS TEL:020 52225559, 020 55488588.</li>
            <li>EMAIL: Sisavanh.hal@gmail.com</li>
          </ul>
        </div>
        <div class="invoice-date">
          <ul>
            <li>INVOICE. : HAL002</li>
            <li>DATE : 17/1/2023</li>
            <li>CURRENCY : LAK</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- line -->
    <div class="line"></div>
    <!-- invoice conten -->
    <div class="invoice-content">
      <div class="bill-detail">
        <p>Bill To:</p>
        <ul>
          <li>SINOTRANS - PLG LAOS LOGISTICS CO.,LTD</li>
          <li>
            BEUNGKHAYONG VILLAGE, SISATTANAK DISTRICT, VIENTIANE CAPITAL, LAO
            PDR
          </li>
          <li>ATTN : MR . HU JIANBO - CHAIRMAN </li>
          <li>Tell: __________</li>
        </ul>
      </div>
      <div class="table-bill">
        <table>
          <tr style="background: #dddddd">
            <th style="border-right: none; width: 20px">No</th>
            <th class="table-th-left">Date</th>
            <th class="table-th-left">Description</th>
            <th class="table-th-left">Qty</th>
            <th class="table-th-left">Amount</th>
            <th style="border-left: none">Total</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
              <td>1/3/2023</td>
              <td>Germany</td>
              <td>5</td>
              <td>200000 kip</td>
              <td>400000 kip</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1/3/2023</td>
              <td>Germany</td>
              <td>5</td>
              <td>200000 kip</td>
              <td>400000 kip</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1/3/2023</td>
              <td>Germany</td>
              <td>5</td>
              <td>200000 kip</td>
              <td>400000 kip</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1/3/2023</td>
              <td>Germany</td>
              <td>5</td>
              <td>200000 kip</td>
              <td>400000 kip</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- footer Invoice -->
      <div class="bill-footer">
        <ul>
          <li>TOTAL ITEM: _____________</li>
          <li>SUB_TOTAL: _____________</li>
          <li>TAX (VAT) % : ____________</li>
          <li>AMOUNT TOTAL: ___________</li>
        </ul>
      </div>
      <!-- line -->
      <div class="line"></div>
    </div>
    <div class="invoice-footer-details">
      <!-- footer details -->
      <div class="footer-details">
        <p>Please Remit Payment to :</p>
        <ul>
          <li>BANQUE POUR LE COMMERCE EXTERIEUR LAO PUBLIC</li>
          <li>NAME ACCOUNT : HOUNGAHLOUN LOGISTICS SOLE CO.,LTD</li>
          <li>NUMBER ACCOUNT : 102-110-00-14486 LAK</li>
        </ul>
      </div>
      <!-- bill-footer-Authorized -->
      <div class="bill-footer-Authorized">
        <ul>
          <li>Authorized by:</li>
        </ul>
      </div>
    </div>
    <!-- footer -->
    <div class="invoice-footer">
      <button class="btn-export">EXPORT</button>
      <button class="btn-cancle">CANCLE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invoice",
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  top: 50px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  font-family: BoonBaan;
  position: relative;
  left: 180px;

  .invoice-header {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;

    .invoice-logo {
      flex: 1;

      .logo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        
      }
    }

    .company-detail {
      flex: 6;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .line {
    width: 100%;
    height: 2px;
    background: #535050;
  }

  .invoice-content {
    display: flex;
    flex-direction: column;

    .bill-detail {
      display: flex;
      margin-top: 20px;
      font-weight: bold;

      ul {
        margin-left: 10px;
      }
    }

    .table-bill {
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        margin-top: 12px;
      }

      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        text-align: center;
      }
    }
    .bill-footer {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      height: 100px;
      font-weight: bold;
    }
  }
}
.table-th-left {
  border-left: none !important;
  border-right: none !important;
}
.invoice-footer-details{
  font-weight: bold;
  .footer-details{
    margin-top: 15px;
  }
  .bill-footer-Authorized {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 90px;
  right: 200px;
}
}

.invoice-footer{
  display: flex;
  justify-content: flex-end;
  .btn-export{
    background: #DF0707;
    border: 1px solid #DF0707;
    border-radius: 4px;
    position: relative;
    right:50px;
    color: white;
    width: 250px;
    height: 40px;
  }
  .btn-cancle{
    border: 1px solid #DF0707;
    border-radius: 4px;
    position: relative;
    // right:300px;
    color: #FF0606;
    width: 250px;
    height: 40px;
  }
}

</style>
