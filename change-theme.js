<script>
  function changeTheme() {
    const themeInput = document.getElementById("searchIn");
    let themeValue = themeInput.value.trim();
    const themeShortcuts = {
      t1: "theme1",
      t2: "theme2",
      t3: "theme3",
      t4: "theme4",
      t5: "theme5",
      t6: "theme6",
      t7: "theme7",
      t8: "theme8",
      t9: "theme9",
      t10: "theme10"
    };

    const themeNames = {
      "theme1": "#D32F2F",
      "theme2": "#00796B",
      "theme3": "#1565C0",
      "theme4": "#FFC107",
      "theme5": "#C2185B",
      "theme6": "#E64A19",
      "theme7": "#455A64",
      "theme8": "#5D4037",
      "theme9": "#7B1FA2",
      "theme10": "#283593"
    };

    const isNightMode = document.body.classList.contains("drK");
    if (isNightMode) {
      return; // لا تفعل أي شيء في الوضع الليلي
    }

    // Check if the input value is empty
    if (themeValue === "") {
      return;
    }

    // Check if the input value is a shortcut
    if (themeShortcuts.hasOwnProperty(themeValue)) {
      themeValue = themeShortcuts[themeValue];
    } else if (themeValue.match(/^t\d+$/)) {
      const themeNumber = themeValue.slice(1);
      if (themeNumber >= 1 && themeNumber <= 10) {
        themeValue = themeShortcuts[`t${themeNumber}`];
      }
    }

    const themeClasses = Object.values(themeShortcuts);

    // Check if the input value matches any theme class
    if (themeClasses.includes(themeValue)) {
      // Change the meta tag colors
      document.querySelector("meta[name='theme-color']").setAttribute("content", themeNames[themeValue]);
      document.querySelector("meta[name='msapplication-navbutton-color']").setAttribute("content", themeNames[themeValue]);
      document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", themeNames[themeValue]);

      // Remove existing theme classes
      for (let i = 0; i < themeClasses.length; i++) {
        document.body.classList.remove(themeShortcuts[`t${i + 1}`]);
      }

      // Add the new theme class
      document.body.classList.add(themeValue);

      // Save the selected theme to Local Storage
      localStorage.setItem("selectedTheme", themeValue);
    }
  }

  // Restore the selected theme from Local Storage on page load
  document.addEventListener("DOMContentLoaded", function () {
    const isNightMode = document.body.classList.contains("drK");
    if (isNightMode) {
      return; // تجاهل الكود عند الوضع الليلي
    }

    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
      document.getElementById("searchIn").value = selectedTheme;
      changeTheme();
    }
  });

  // Add event listener for input changes
  document.getElementById("searchIn").addEventListener("input", function () {
    changeTheme();
  });
</script>
