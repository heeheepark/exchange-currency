// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 3. 환율정보 들고오기
// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 5. 금액을 입력하면 환전이 된다.
// 6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
// 7. 숫자를 한국어로 읽는 법
// 8. 반대로 밑의 박스에서 숫자를 바꿔도 위의 박스에 환율이 적용이 된다.

let currencyRatio = {
  USD: {
    KRW: 1299.54,
    USD: 1,
    JPY: 134.43,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00077,
    JPY: 0.1,
    unit: "원",
  },
  JPY: {
    KRW: 9.67,
    USD: 0.0074,
    JPY: 1,
    unit: "엔",
  },
};
// {} 객체: 어떤 값에 대해서 여러가지 정보가 필요할 때 객체를 주로 씀

let fromCurrency = "KRW";
let toCurrency = "KRW";

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1. 버튼을 가져온다.
    //2. 버튼의 값을 바꾼다.
    document.getElementById("from-button").textContent = this.textContent;
    //3, 선택된 currency 값을 변수에 저장해준다.
    fromCurrency = this.textContent;
    document.getElementById("from-unit").textContent = currencyRatio[fromCurrency]['unit'];
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    
    document.getElementById("to-unit").textContent = currencyRatio[toCurrency]['unit'];
    convert();
  })
);
// 각각의 메뉴들에 이벤트를 더해준다. 클릭하면 함수에 있는 내용이 실행되도록

function convert() {
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

  let numbers = [
    numbering(amount % 1 )
  ]

  document.getElementById("to-input").value = convertedAmount;
  document.getElementById("from-unit").textContent = amount + currencyRatio[fromCurrency]['unit'];
  document.getElementById("to-unit").textContent = convertedAmount + currencyRatio[toCurrency]['unit'];
}

function reConvert() {
  let reAmount = document.getElementById("to-input").value;
  let reConvertedAmount = reAmount * currencyRatio[toCurrency][fromCurrency];

  document.getElementById("from-input").value = reConvertedAmount;
  document.getElementById("to-unit").textContent = reAmount + currencyRatio[toCurrency]['unit'];
  document.getElementById("from-unit").textContent = reConvertedAmount + currencyRatio[fromCurrency]['unit'];
}
