
$("#portfolioNav").on("click", function () {
    console.log("clicking")
const portfolio = document.getElementById("secondRow");
portfolio.scrollIntoView({ block: "end", behavior: "smooth" });
  });