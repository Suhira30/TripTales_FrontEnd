
import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
function S() {
async function handleToken(token) {
// console.log(token);
await axios.post("http://localhost:8080/api/v1/subscriptions/charge", "", {         headers: {
  token: token.id,
  amount: 500,
},}).then(() => {
   alert("Payment Success");
   }).catch((error) => {
   alert(error);
   });
}
return (
<div className="App">
<Stripe
stripeKey="pk_test_51PyunwGLTHhXTuKyPNkvnkzgWrWHjUPKuPehbtWR2m5wzTB9o0VqJPFtmothjo9mJo26WHLkugAHbpX6PD0Euizb00kmpPBFt0"
token={handleToken}
/>
</div>
);
}
export default S;