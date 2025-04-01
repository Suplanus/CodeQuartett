Photostack.prototype._addNavigation = function () {
    // add nav dots
    this.nav = document.createElement("nav");
    var inner = "";
  
    for (var i = 0; i < this.itemsCount; ++i) {
      inner += "<span></span>";
    }
  
    this.nav.innerHTML = inner;
    this.el.appendChild(this.nav);
    this.navDots = [].slice.call(this.nav.children);
  
    var self = this;
  
    // Add click event listeners to the navigation dots
    this.navDots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        self._navigateTo(index);
      });
    });
  
    // Rotate the first image (you should define the CSS class for initial rotation)
    var images = this.el.querySelectorAll(".photostack > figure > div");
    if (images.length > 0) {
      images[0].classList.add("rotate-initial"); // Define the CSS class for initial rotation
    }
  
    var nextButton = document.getElementById("nextButton");
    var backButton = document.getElementById("backButton");
  
    function nextNavigate(condition) {
      if (condition === "double-click") {
        return;
      } else {
        self._navigate("next");
      }
    }
    function backNavigate(condition) {
      if (condition === "double-click") {
        return;
      } else {
        self._navigate("prev");
      }
    }
  
    // Add click event listeners to the next and back buttons
    nextButton.addEventListener("dblclick", function () {
      nextNavigate("double-click"); 
    });
    nextButton.addEventListener("click", function () {
      nextNavigate("click");
    });
  
    backButton.addEventListener("dblclick", function () {
      backNavigate("double-click");
    });
  
    backButton.addEventListener("click", function () {
      backNavigate("click");
    });
  };
  