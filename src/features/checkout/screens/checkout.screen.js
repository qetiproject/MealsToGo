import React from "react";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
