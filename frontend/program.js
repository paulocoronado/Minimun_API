const API_URL = "http://127.0.0.1:8000/sum";

      function toNumber(value) {
        // Convierte "3,5" a "3.5" por si el usuario usa coma
        const n = Number(String(value).replace(",", "."));
        return n;
      }

      async function sumar() {
        const aRaw = document.getElementById("a").value;
        const bRaw = document.getElementById("b").value;

        const a = toNumber(aRaw);
        const b = toNumber(bRaw);

        if (Number.isNaN(a) || Number.isNaN(b)) {
          document.getElementById("out").textContent = "Ingresa números válidos.";
          return;
        }

        const url = `${API_URL}?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}`;

        const res = await fetch(url);
        const data = await res.json();

        document.getElementById("out").textContent = `Resultado: ${data.sum}`;
      }

      document.getElementById("btn").addEventListener("click", sumar);