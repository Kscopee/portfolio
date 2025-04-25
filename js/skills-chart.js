document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("skillsPieChart").getContext("2d");

  // create gradient for design segment
  const designGradient = ctx.createLinearGradient(0, 0, 300, 300);
  designGradient.addColorStop(0, "#d7f205");
  designGradient.addColorStop(1, "#c4dd04");

  // create gradient for coding segment
  const codingGradient = ctx.createLinearGradient(0, 0, 300, 0);
  codingGradient.addColorStop(0, "#262626");
  codingGradient.addColorStop(1, "#3f3f3f");

  // store initial data for animation
  const initialData = {
    design: { percent: 60, details: "UI/UX Design & Visual Design" },
    coding: { percent: 40, details: "Frontend Development" },
  };

  // store chart instance for potential future interactions
  window.skillsChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Design", "Coding"],
      datasets: [
        {
          data: [initialData.design.percent, initialData.coding.percent],
          backgroundColor: [designGradient, codingGradient],
          borderWidth: 0,
          borderRadius: 5,
          hoverOffset: 15,
          hoverBorderWidth: 2,
          hoverBorderColor: "#d7f205",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      layout: {
        padding: 0,
      },
      plugins: {
        legend: {
          position: "bottom",
          display: true,
          align: "center",
          labels: {
            color: "#000000",
            font: {
              size: 14,
              weight: "bold",
              family: "'Tahoma', sans-serif",
            },
            padding: 20,
            usePointStyle: true,
            pointStyle: "circle",
            filter: function (legendItem, data) {
              return true; // always show all legend items
            },
          },
        },
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          titleColor: "#d7f205",
          bodyColor: "#ffffff",
          titleFont: {
            size: 16,
            weight: "bold",
          },
          bodyFont: {
            size: 14,
          },
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function (context) {
              const value = context.parsed;
              const label = context.label;
              const details =
                label === "Design"
                  ? initialData.design.details
                  : initialData.coding.details;
              return [`${value}% - ${label}`, details];
            },
          },
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
        duration: 2000,
        easing: "easeInOutQuart",
      },
    },
  });

  // handle window resize
  window.addEventListener("resize", () => {
    window.skillsChart.resize();
  });
});
