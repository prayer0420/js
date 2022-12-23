const body = document.body;

function handleResize() {
  const innerWidth = window.innerWidth;
  if (innerWidth > "1000") {
    body.classList.add("bigScreen");
    body.classList.remove("mediumScreen");
    body.classList.remove("smallScreen");
  } else if (innerWidth <= 1140 && innerWidth >= 700) {
    body.classList.add("smallScreen");
    body.classList.remove("bigScreen");
    body.classList.remove("mediumScreen");
  } else {
    body.classList.add("mediumScreen");
    body.classList.remove("bigScreen");
    body.classList.remove("smallScreen");
  }
}

window.addEventListener("resize", handleResize);
