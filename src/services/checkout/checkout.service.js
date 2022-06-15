import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51LAqxvIkjbUYZrPqgjebGNlXN5002Zbv5ndAwODB2g22C3IIHm39IhanjV81vnvXuKBOxznLLroQNwUJmWz9sICH00hjanaBYT"
);
export const cardTokenRequest = (card) => stripe.createToken({ card });
