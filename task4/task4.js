// ─── Display BOM Info (window width & height) ─────────────────────────────────
function showBOMInfo() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var bomDiv = document.getElementById("bom-info");
    bomDiv.innerHTML =
        "<h3>Browser Window Info (BOM)</h3>" +
        "<p>Window Width: <strong>" + width + "px</strong></p>" +
        "<p>Window Height: <strong>" + height + "px</strong></p>";
}

// ─── Create a Single Colored Box ──────────────────────────────────────────────
function createBox(colorName) {
    var colorInput = colorName.trim();

    if (colorInput === "") {
        return null; // skip empty inputs
    }

    var box = document.createElement("div");

    // Set inline background color using the typed color name
    box.style.backgroundColor = colorInput;
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.display = "inline-block";
    box.style.margin = "8px";
    box.style.border = "2px solid black";
    box.style.textAlign = "center";
    box.style.verticalAlign = "middle";
    box.style.lineHeight = "150px";
    box.style.fontWeight = "bold";

    // Validate: if the browser doesn't recognise the color, the computed style stays transparent
    var testEl = document.createElement("div");
    testEl.style.backgroundColor = colorInput;
    document.body.appendChild(testEl);
    var computed = window.getComputedStyle(testEl).backgroundColor;
    document.body.removeChild(testEl);

    if (computed === "rgba(0, 0, 0, 0)" || computed === "") {
        // Invalid color — show warning box
        box.style.backgroundColor = "#f0f0f0";
        box.textContent = '"' + colorInput + '" is not a valid color';
    } else {
        box.textContent = colorInput;
    }

    return box;
}

// ─── Add All Three Boxes ──────────────────────────────────────────────────────
function addBoxes() {
    var colors = [
        document.getElementById("color1").value,
        document.getElementById("color2").value,
        document.getElementById("color3").value
    ];

    var container = document.getElementById("box-container");

    var addedAny = false;

    for (var i = 0; i < colors.length; i++) {
        if (colors[i].trim() !== "") {
            var box = createBox(colors[i]);
            if (box !== null) {
                container.appendChild(box);
                addedAny = true;
            }
        }
    }

    if (!addedAny) {
        alert("Please enter at least one color name.");
    }

    // Update BOM info on every add
    showBOMInfo();
}

// ─── Clear All Boxes ──────────────────────────────────────────────────────────
function clearBoxes() {
    document.getElementById("box-container").innerHTML = "";
    document.getElementById("color1").value = "";
    document.getElementById("color2").value = "";
    document.getElementById("color3").value = "";
    showBOMInfo();
}

// ─── Init — show BOM info on page load ───────────────────────────────────────
showBOMInfo();

// Update BOM info whenever the window is resized
window.onresize = function () {
    showBOMInfo();
};
