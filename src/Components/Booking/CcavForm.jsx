import React from "react";
import { API_URL } from "../../config";

function CcavForm({ click }) {
  return (
    <div>
      <form
        method="POST"
        name="customerData"
        action={`${API_URL}/ccav/ccavRequestHandler`}
      >
        <table width="40%" height="100" border="1" align="center">
          <caption>
            <font size="4" color="blue">
              <b>Integration Kit</b>
            </font>
          </caption>
        </table>
        <table width="40%" height="100" border="1" align="center">
          <tr>
            <td>Parameter Name:</td>
            <td>Parameter Value:</td>
          </tr>
          <tr>
            <td colSpan="2">Compulsory information</td>
          </tr>
          <tr>
            <td>Merchant Id</td>
            <td>
              <input
                type="text"
                name="merchant_id"
                id="merchant_id"
                value="2779245"
              />
            </td>
          </tr>
          <tr>
            <td>Order Id</td>
            <td>
              <input type="text" name="order_id" value="" />
            </td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>
              <input type="text" name="currency" value="INR" />
            </td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>
              <input type="text" name="amount" value="1.00" />
            </td>
          </tr>
          <tr>
            <td>Redirect URL</td>
            <td>
              <input
                type="text"
                name="redirect_url"
                value={`${API_URL}/ccav/ccavResponseHandler`}
              />
            </td>
          </tr>
          <tr>
            <td>Cancel URL</td>
            <td>
              <input
                type="text"
                name="cancel_url"
                value={`${API_URL}/ccav/ccavResponseHandler`}
              />
            </td>
          </tr>
          <tr>
            <td>Language</td>
            <td>
              <input type="text" name="language" id="language" value="EN" />
            </td>
          </tr>
          <tr colSpan="2">Billing information(optional):</tr>
          <tr>
            <td>Billing Name</td>
            <td>
              <input type="text" name="billing_name" value="Peter" />
            </td>
          </tr>
          <tr>
            <td>Billing Address:</td>
            <td>
              <input type="text" name="billing_address" value="Santacruz" />
            </td>
          </tr>
          <tr>
            <td>Billing City:</td>
            <td>
              <input type="text" name="billing_city" value="Mumbai" />
            </td>
          </tr>
          <tr>
            <td>Billing State:</td>
            <td>
              <input type="text" name="billing_state" value="MH" />
            </td>
          </tr>
          <tr>
            <td>Billing Zip:</td>
            <td>
              <input type="text" name="billing_zip" value="400054" />
            </td>
          </tr>
          <tr>
            <td>Billing Country:</td>
            <td>
              <input type="text" name="billing_country" value="India" />
            </td>
          </tr>
          <tr>
            <td>Billing Tel:</td>
            <td>
              <input type="text" name="billing_tel" value="9876543210" />
            </td>
          </tr>
          <tr>
            <td>Billing Email:</td>
            <td>
              <input
                type="text"
                name="billing_email"
                value="testing@domain.com"
              />
            </td>
          </tr>
          <tr colSpan="2">Shipping information(optional):</tr>
          <tr>
            <td>Shipping Name</td>
            <td>
              <input type="text" name="delivery_name" value="Sam" />
            </td>
          </tr>
          <tr>
            <td>Shipping Address:</td>
            <td>
              <input type="text" name="delivery_address" value="Vile Parle" />
            </td>
          </tr>
          <tr>
            <td>Shipping City:</td>
            <td>
              <input type="text" name="delivery_city" value="Mumbai" />
            </td>
          </tr>
          <tr>
            <td>Shipping State:</td>
            <td>
              <input type="text" name="delivery_state" value="Maharashtra" />
            </td>
          </tr>
          <tr>
            <td>Shipping Zip:</td>
            <td>
              <input type="text" name="delivery_zip" value="400038" />
            </td>
          </tr>
          <tr>
            <td>Shipping Country:</td>
            <td>
              <input type="text" name="delivery_country" value="India" />
            </td>
          </tr>
          <tr>
            <td>Shipping Tel:</td>
            <td>
              <input type="text" name="delivery_tel" value="0123456789" />
            </td>
          </tr>
          <tr>
            <td>Merchant Param1</td>
            <td>
              <input
                type="text"
                name="merchant_param1"
                value="additional Info."
              />
            </td>
          </tr>
          <tr>
            <td>Merchant Param2</td>
            <td>
              <input
                type="text"
                name="merchant_param2"
                value="additional Info."
              />
            </td>
          </tr>
          <tr>
            <td>Merchant Param3</td>
            <td>
              <input
                type="text"
                name="merchant_param3"
                value="additional Info."
              />
            </td>
          </tr>
          <tr>
            <td>Merchant Param4</td>
            <td>
              <input
                type="text"
                name="merchant_param4"
                value="additional Info."
              />
            </td>
          </tr>
          <tr>
            <td>Merchant Param5</td>
            <td>
              <input
                type="text"
                name="merchant_param5"
                value="additional Info."
              />
            </td>
          </tr>
          <tr>
            <td>Promo Code:</td>
            <td>
              <input type="text" name="promo_code" value="" />
            </td>
          </tr>
          <tr>
            <td>Customer Id:</td>
            <td>
              <input type="text" name="customer_identifier" value="" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" id="checkoutClick" value="Checkout" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default CcavForm;
