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

  // Function to get responsive font and padding sizes
  function getResponsiveSizes() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 480) {
      return {
        titleSize: 12,
        bodySize: 10,
        padding: 8,
      };
    } else if (windowWidth <= 768) {
      return {
        titleSize: 14,
        bodySize: 12,
        padding: 10,
      };
    } else {
      return {
        titleSize: 16,
        bodySize: 14,
        padding: 12,
      };
    }
  }

  // Function to calculate tooltip box width based on window size
  function getTooltipBoxWidth() {
    if (window.innerWidth <= 480) {
      return 120;
    } else if (window.innerWidth <= 768) {
      return 160;
    }
    return 200;
  }

  const responsiveSizes = getResponsiveSizes();

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
            size: responsiveSizes.titleSize,
            weight: "bold",
          },
          bodyFont: {
            size: responsiveSizes.bodySize,
          },
          padding: responsiveSizes.padding,
          displayColors: false,
          position: "nearest",
          xAlign: "center",
          yAlign: "center",
          caretSize: 0,
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
            // limit text length for small screens
            afterBody: function (context) {
              const windowWidth = window.innerWidth;
              if (windowWidth <= 480) {
                return ""; // remove any additional text on smallest screens
              }
              return null; // use default behavior for larger screens
            },
          },
          // ensure tooltip stays within the chart boundaries
          boxPadding: 3,
          boxWidth: getTooltipBoxWidth(),
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
    // update chart sizes
    window.skillsChart.resize();

    // update tooltip responsive properties
    const newSizes = getResponsiveSizes();
    window.skillsChart.options.plugins.tooltip.titleFont.size =
      newSizes.titleSize;
    window.skillsChart.options.plugins.tooltip.bodyFont.size =
      newSizes.bodySize;
    window.skillsChart.options.plugins.tooltip.padding = newSizes.padding;
    window.skillsChart.options.plugins.tooltip.boxWidth = getTooltipBoxWidth();

    window.skillsChart.update();
  });
});
