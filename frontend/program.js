async function sumar() {
  let api_url = "http://127.0.0.1:8000/sum";
  let number_1 = document.getElementById("number_1").value;
  let number_2 = document.getElementById("number_2").value;
  api_url = api_url + "?" + "number_1="+number_1+ "&"+"number_2="+number_2

  const response = await fetch(api_url);
  const data = await response.json();
  document.getElementById("div_display").textContent = `Resultado: ${data.sum}`;
}

document.getElementById("btn_result").addEventListener("click", sumar);