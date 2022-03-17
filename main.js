let totalabono = 0;
let cableabono = 0;
let netabono = 0;
let hdabono = 0;
let futbolabono = 0;
let hboabono = 0;
let adultoabono = 0;

document.addEventListener("click", (evt) => {
  if (evt.target.matches("#cable-btn")) {
    if (document.querySelector("#totalcable").textContent === "Cable $1900") {
      document.querySelector("#totalcable").textContent = "";
      cableabono = 0;
      document.querySelector("#cable-btn").classList.remove("active");
    } else {
      let cableBtn = (document.querySelector("#totalcable").textContent =
        "Cable $1900");
      cableabono = 1900;
      document.querySelector("#cable-btn").classList.add("active");
      document.querySelector("#cable-40").classList.remove("active");
      document.querySelector("#cable-30").classList.remove("active");
      document.querySelector("#cable-20").classList.remove("active");
    }
  }
  if (evt.target.matches("#cable-40")) {
    document.querySelector("#totalcable").textContent = `Cable $${
      1900 * 0.6
    } 40%`;
    cableabono = 1900 * 0.6;
    document.querySelector("#cable-btn").classList.add("active");
    document.querySelector("#cable-40").classList.add("active");
    document.querySelector("#cable-20").classList.remove("active");
    document.querySelector("#cable-30").classList.remove("active");
  }
  if (evt.target.matches("#cable-30")) {
    document.querySelector("#totalcable").textContent = `Cable $${
      1900 * 0.7
    } 30%`;
    cableabono = 1900 * 0.7;
    document.querySelector("#cable-btn").classList.add("active");
    document.querySelector("#cable-30").classList.add("active");
    document.querySelector("#cable-20").classList.remove("active");
    document.querySelector("#cable-40").classList.remove("active");
  }
  if (evt.target.matches("#cable-20")) {
    document.querySelector("#totalcable").textContent = `Cable $${
      1900 * 0.8
    } 20%`;
    cableabono = 1900 * 0.8;
    document.querySelector("#cable-btn").classList.add("active");
    document.querySelector("#cable-20").classList.add("active");
    document.querySelector("#cable-40").classList.remove("active");
    document.querySelector("#cable-30").classList.remove("active");
  }
  if (evt.target.matches("#internet50-btn")) {
    if (document.querySelector("#totalnet").textContent === "Internet $2600") {
      document.querySelector("#totalnet").textContent = "";
      netabono = 0;
      document.querySelector("#internet50-btn").classList.remove("active");
    } else {
      document.querySelector("#totalnet").textContent = "Internet $2600";
      document.querySelector("#internet50-btn").classList.add("active");
      document.querySelector("#internet50-40").classList.remove("active");
      document.querySelector("#internet50-30").classList.remove("active");
      document.querySelector("#internet50-20").classList.remove("active");
      netabono = 2600;
    }
  }
  if (evt.target.matches("#internet50-40")) {
    document.querySelector("#totalnet").textContent = `Internet $${
      2600 * 0.6
    } 40%`;
    document.querySelector("#internet50-btn").classList.add("active");
    document.querySelector("#internet50-40").classList.add("active");
    document.querySelector("#internet50-30").classList.remove("active");
    document.querySelector("#internet50-20").classList.remove("active");
    netabono = 2600 * 0.6;
  }
  if (evt.target.matches("#internet50-30")) {
    let net30 = parseFloat(2600 * 0.7).toFixed(0);
    document.querySelector("#totalnet").textContent = `Internet $${net30} 30%`;
    document.querySelector("#internet50-btn").classList.add("active");

    document.querySelector("#internet50-40").classList.remove("active");
    document.querySelector("#internet50-30").classList.add("active");
    document.querySelector("#internet50-20").classList.remove("active");
    netabono = parseInt(net30);
  }
  if (evt.target.matches("#internet50-20")) {
    document.querySelector("#totalnet").textContent = `Internet $${
      2600 * 0.8
    } 20%`;
    document.querySelector("#internet50-btn").classList.add("active");

    document.querySelector("#internet50-40").classList.remove("active");
    document.querySelector("#internet50-30").classList.remove("active");
    document.querySelector("#internet50-20").classList.add("active");
    netabono = 2600 * 0.8;
  }

  if (evt.target.matches("#hd-btn")) {
    if (document.querySelector("#totalhd").textContent === "HD $500") {
      document.querySelector("#totalhd").textContent = "";
      document.querySelector("#hd-btn").classList.remove("active");
      document.querySelector("#hd-40").classList.remove("active");
      document.querySelector("#hd-30").classList.remove("active");
      document.querySelector("#hd-20").classList.remove("active");
      hdabono = 0;
    } else {
      document.querySelector("#totalhd").textContent = "HD $500";
      document.querySelector("#hd-btn").classList.add("active");
      document.querySelector("#hd-40").classList.remove("active");
      document.querySelector("#hd-30").classList.remove("active");
      document.querySelector("#hd-20").classList.remove("active");
      hdabono = 500;
    }
  }
  if (evt.target.matches("#hd-40")) {
    document.querySelector("#totalhd").textContent = `HD $${500 * 0.6} 40%`;
    hdabono = 500 * 0.6;
    document.querySelector("#hd-btn").classList.add("active");

    document.querySelector("#hd-40").classList.add("active");
    document.querySelector("#hd-30").classList.remove("active");
    document.querySelector("#hd-20").classList.remove("active");
  }
  if (evt.target.matches("#hd-30")) {
    document.querySelector("#totalhd").textContent = `HD $${500 * 0.7} 30%`;
    document.querySelector("#hd-btn").classList.add("active");

    document.querySelector("#hd-40").classList.remove("active");
    document.querySelector("#hd-30").classList.add("active");
    document.querySelector("#hd-20").classList.remove("active");
    hdabono = 500 * 0.7;
  }
  if (evt.target.matches("#hd-20")) {
    document.querySelector("#totalhd").textContent = `HD $${500 * 0.8} 20%`;
    document.querySelector("#hd-btn").classList.add("active");

    document.querySelector("#hd-40").classList.remove("active");
    document.querySelector("#hd-30").classList.remove("active");
    document.querySelector("#hd-20").classList.add("active");
    hdabono = 500 * 0.8;
  }

  if (evt.target.matches("#futbol-btn")) {
    if (document.querySelector("#totalfutbol").textContent === "Futbol $1120") {
      document.querySelector("#totalfutbol").textContent = "";
      document.querySelector("#futbol-btn").classList.remove("active");
      futbolabono = 0;
    } else {
      document.querySelector("#totalfutbol").textContent = "Futbol $1120";
      document.querySelector("#futbol-btn").classList.add("active");

      futbolabono = 1120;
    }
  }
  if (evt.target.matches("#hbo-btn")) {
    if (document.querySelector("#totalhbo").textContent === "HBO $630") {
      document.querySelector("#totalhbo").textContent = "";
      document.querySelector("#hbo-btn").classList.remove("active");
      hboabono = 0;
    } else {
      document.querySelector("#totalhbo").textContent = "HBO $630";
      document.querySelector("#hbo-btn").classList.add("active");
      hboabono = 630;
    }
  }
  if (evt.target.matches("#adulto-btn")) {
    if (document.querySelector("#totaladultos").textContent === "Adulto $300") {
      document.querySelector("#totaladultos").textContent = "";
      document.querySelector("#adulto-btn").classList.remove("active");
      adultoabono = 0;
    } else {
      document.querySelector("#totaladultos").textContent = "Adulto $300";
      document.querySelector("#adulto-btn").classList.add("active");
      adultoabono = 300;
    }
  }

  console.log("total", "cable", "net", "hd", "hbo", "futbol", "adulto");
  totalabono =
    cableabono + netabono + hdabono + hboabono + futbolabono + adultoabono;
  console.log(
    totalabono,
    cableabono,
    netabono,
    hdabono,
    hboabono,
    futbolabono,
    adultoabono
  );
  totales();
});

let totales = () => {
  document.querySelector("#total").textContent = `Totales $${totalabono}`;
};
