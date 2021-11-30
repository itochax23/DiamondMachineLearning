function getData() {
  const shape = document.getElementById("shape").value;
  const cut = document.getElementById("cut").value;
  const color = document.getElementById("color").value;
  const clarity = document.getElementById("clarity").value;
  const carat = +document.getElementById("carat").value;
  const price = +document.getElementById("price").value;
  const report = document.getElementById("report").value;

  return {
    shape,
    cut,
    color,
    clarity,
    carat,
    price,
    report,
  };
}

async function submit() {
  const response = await fetch('/predict', {
    method: 'POST',
    body: JSON.stringify(getData()),
  });
  const dataBack = await response.text();
  alert(dataBack);
}

