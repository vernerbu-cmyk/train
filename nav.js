(function () {

  const btn = document.createElement("button");

  btn.textContent = "← В меню";

  /* стиль */
  btn.style.position = "fixed";
  btn.style.top = "10px";
  btn.style.left = "10px";
  btn.style.zIndex = "9999";

  btn.style.height = "44px";
  btn.style.padding = "0 14px";

  btn.style.border = "none";
  btn.style.borderRadius = "12px";

  btn.style.background = "linear-gradient(135deg,#FF8C00,#ff6a00)";
  btn.style.color = "white";

  btn.style.fontSize = "18px";
  btn.style.fontWeight = "700";

  btn.style.cursor = "pointer";

  btn.style.display = "flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.lineHeight = "1";

  /* ВАЖНО: переход в меню */
  btn.onclick = () => {
    window.location.href = "https://vernerbu-cmyk.github.io/train/";
  };

  document.body.appendChild(btn);

})();