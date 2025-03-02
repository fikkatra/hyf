function formatCreditCardNumber(creditCardNumber) {
  if (isNaN(creditCardNumber)) {
    console.error("Please enter a valid number");
    return;
  }

  const creditCardNumberString = creditCardNumber.toString();
  const creditCardNumberArray = creditCardNumberString.split("");
  const formattedCreditCardNumberArray = [];
  for (let i = 0; i < creditCardNumberArray.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      formattedCreditCardNumberArray.push(" ");
    }
    formattedCreditCardNumberArray.push(creditCardNumberArray[i]);
  }
  const formattedCreditCardNumberString =
    formattedCreditCardNumberArray.join("");
  return {
    original: creditCardNumber,
    formatted: formattedCreditCardNumberString,
  };
}

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/
