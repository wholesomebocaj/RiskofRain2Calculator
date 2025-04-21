// Shared item data and inventory logic for all survivors

export const damageItems = {
    crowbar: {
      name: "Crowbar",
      icon: "../images/Item_Icons/Crowbar.png",
      effect: "+75% vs full health (additive after first stack)",
      multiplier: 1.75,
      stackBehavior: "crowbar-style",
    },
    armorPiercing: {
      name: "Armor-Piercing Rounds",
      icon: "../images/Item_Icons/Armor-Piercing_Rounds.png",
      effect: "+20% vs bosses",
      multiplier: 1.2,
      stackBehavior: "multiplicative",
    },
    focusCrystal: {
      name: "Focus Crystal",
      icon: "../images/Item_Icons/Focus_Crystal.png",
      effect: "+20% within 13m",
      multiplier: 1.2,
      stackBehavior: "multiplicative",
    },
    delicateWatch: {
      name: "Delicate Watch",
      icon: "../images/Item_Icons/Delicate_Watch.png",
      effect: "+20% (breaks at 25% HP)",
      multiplier: 1.2,
      stackBehavior: "multiplicative",
    },
    shapedGlass: {
      name: "Shaped Glass",
      icon: "../images/Item_Icons/Shaped_Glass.png",
      effect: "Double damage, halve HP",
      multiplier: 2.0,
      stackBehavior: "multiplicative",
    },
    runaldsBand: {
      name: "Runald’s Band",
      icon: "../images/Item_Icons/Runald's_Band.png",
      effect: "250% bonus on high-damage hits (slows)",
      multiplier: 2.5,
      stackBehavior: "bonus", // custom behavior
    },
    
    kjarosBand: {
      name: "Kjaro’s Band",
      icon: "../images/Item_Icons/Kjaro's_Band.png",
      effect: "300% bonus on high-damage hits (burns)",
      multiplier: 3.0,
      stackBehavior: "bonus", // custom behavior
    },
    
      
  };
  
  export let selectedDamageItems = {};
  
  // Item multiplier calculation
  export function calculateItemMultiplier(item, count) {
    if (!count || count <= 0) return 1;
  
    if (item.stackBehavior === "crowbar-style") {
      return 1.75 + 0.75 * (count - 1);
    }
  
    return Math.pow(item.multiplier, count);
  }
  
  // Renders the item grid for selection
  export function initDamageItemGrid() {
    const container = document.getElementById("damage-item-grid");
    container.innerHTML = "";
  
    Object.entries(damageItems).forEach(([id, item]) => {
      const count = selectedDamageItems[id]?.count || 0;
      const tile = document.createElement("div");
      tile.className = `damage-item-tile ${count ? "active" : ""}`;
      tile.innerHTML = `
        <img src="${item.icon}" alt="${item.name}" />
        ${count > 0 ? `<span class="item-count">${count}</span>` : ""}
        <div class="item-tooltip">
          <h4>${item.name}</h4>
          <p>${item.effect}</p>
          ${item.stackable ? "<p>Click to add stacks</p>" : ""}
        </div>
      `;
  
      tile.addEventListener("click", () => {
        if (!selectedDamageItems[id]) {
          selectedDamageItems[id] = { count: 1, item };
        } else {
          selectedDamageItems[id].count += 1;
        }
        updateDamageItemDisplay();
        initDamageItemGrid();
      });
  
      container.appendChild(tile);
    });
  }
  
  // Renders the active item list with quantity controls
  export function updateDamageItemDisplay() {
    const container = document.getElementById("selected-damage-items");
    const activeItems = Object.entries(selectedDamageItems)
      .filter(([_, data]) => data.count > 0)
      .map(([id, data]) => ({
        ...data.item,
        count: data.count,
        id,
      }));
  
    if (activeItems.length === 0) {
      container.innerHTML = "<p>No damage items selected</p>";
      return;
    }
  
    container.innerHTML = `
      <h4>Active Damage Buffs</h4>
      <div class="active-damage-items">
        ${activeItems
          .map(
            (item) => `
          <div class="active-damage-item" data-id="${item.id}">
            <img src="${item.icon}" alt="${item.name}" style="width:30px;height:30px;">
            <span>${item.name} (${item.effect})</span>
            <div class="selected-item-controls">
              <button class="decrease-item">-</button>
              <span class="selected-item-count">${item.count}</span>
              <button class="increase-item">+</button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  
    document.querySelectorAll(".increase-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const itemId = e.target.closest(".active-damage-item").dataset.id;
        selectedDamageItems[itemId].count += 1;
        updateDamageItemDisplay();
        initDamageItemGrid();
      });
    });
  
    document.querySelectorAll(".decrease-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const itemId = e.target.closest(".active-damage-item").dataset.id;
        selectedDamageItems[itemId].count -= 1;
        if (selectedDamageItems[itemId].count <= 0) {
          delete selectedDamageItems[itemId];
        }
        updateDamageItemDisplay();
        initDamageItemGrid();
      });
    });
  }
  