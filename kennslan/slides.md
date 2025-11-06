---
options:
  end_slide_shorthand: true
---

# Kynning

- Hæ :)

---

# Planið í dag

1. Þessi kynning
2. Hópaverkefni
   1. Hönnun
   2. Útfærsla
3. Skoða vefsíður/kóðann hjá öðrum

## Þið kunnið

1. Að búa til vefsíðu með HTML og CSS
2. Grunnforritun í Javascript

---

# Gagnvirkni (e. interactivity)

```html
<body class="container">
  <div class="color-area">
    <div id="color-text">RGB (0, 0, 0)</div>
  </div>
  <button id="red-button">RAUÐUR</button>
  <button id="green-button">GRÆNN</button>
  <button id="blue-button">BLÁR</button>
  <script src="main.js"></script>
</body>
```

```Javascript
const redB = document.getElementById("red-button");

const greenB = document.querySelector("#green-button");

const blueB = document.body.getElementsByTagName("button")[2];

const colorA = document.getElementsByClassName("color-area")[0];

```

---

# Event Listeners

```Javascript
function updateBackgroundColor() {
  colorA.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  rbgText.textContent = `RBG (${red}, ${green}, ${blue})`;
}
redB.addEventListener("click", function () {
  red = (red + inc) % 255;
  updateBackgroundColor();
});

greenB.addEventListener("click", function () {
  green = (green + inc) % 255;
  updateBackgroundColor();
});

blueB.addEventListener("click", function () {
  blue = (blue + inc) % 255;
  updateBackgroundColor();
});
```

---

# Event Object

```Javascript
<button>Click me any way you want</button>
<script>
  let button = document.querySelector("button");
  button.addEventListener("mousedown", event => {
    if (event.button == 0) {
      console.log("Left button");
    } else if (event.button == 1) {
      console.log("Middle button");
    } else if (event.button == 2) {
      console.log("Right button");
    }
  });
</script>
```

```Javascript
    event => {
        // kóði
    }

    function(event) {
        // kóði
    }
```

---

# Key Events

```Javascript
<p>This page turns violet when you hold the V key.</p>
<script>
  window.addEventListener("keydown", event => {
    if (event.key == "v") {
      document.body.style.background = "violet";
    }
  });
  window.addEventListener("keyup", event => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });
</script>
```

---

# Events

- Scroll
- Klukkur
- Músahrefing
- Lyklaborðið
- og meira

---

# Hópaskipting

- Forritunarpar (e. Pair programming)
  - að forrita : sjá um útfærsluna
    - passa að leiðbeinandinn skilur
  - að leiðbeina : fara yfir : plana næstu skref
    - Spurja, ekki skipa fyrir

- Hugsa upphátt
- Virða hlutverkin, ekki taka lyklaborðið af manneskjunni að forrita
  - Skiptum á c.a korters fresti ( ég held utan um tímann )
- Be nice

---

# Dæmi af verkefni

- https://github.com/koltepri/web_RBG_takkar
  - glærurnar eru líka hérna

---

# Skoða hjá hinum hópunum

- Virkni
- Skemmtilegt
- Skýrt / Auðskiljanlegt?
  - breytunöfnin
- Athugasemdir(e. comments), of mikið?, of lítið?

- https://tinyurl.com/58xdyrxm (sameiginlegt docs skjal)
