// Shared item data and inventory logic for all survivors

export const damageItems = {
    crowbar: {
        name: "Crowbar",
        icon: "../images/Item_Icons/Crowbar.png",
        effect: "+75% vs full health (additive after first stack)",
        multiplier: 1.75,
        stackBehavior: "crowbar-style",
        stackable: true,
    },
    armorPiercing: {
        name: "Armor-Piercing Rounds",
        icon: "../images/Item_Icons/Armor-Piercing_Rounds.png",
        effect: "+20% vs bosses",
        multiplier: 1.2,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    focusCrystal: {
        name: "Focus Crystal",
        icon: "../images/Item_Icons/Focus_Crystal.png",
        effect: "+20% within 13m",
        multiplier: 1.2,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    delicateWatch: {
        name: "Delicate Watch",
        icon: "../images/Item_Icons/Delicate_Watch.png",
        effect: "+20% (breaks at 25% HP)",
        multiplier: 1.2,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    shapedGlass: {
        name: "Shaped Glass",
        icon: "../images/Item_Icons/Shaped_Glass.png",
        effect: "Double damage, halve HP",
        multiplier: 2.0,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    lensMakersGlasses: {
        name: "Lens-Maker's Glasses",
        icon: "../images/Item_Icons/Lens-Makers_Glasses.png",
        effect: "+10% critical strike chance",
        multiplier: 1,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    harvestersScythe: {
        name: "Harvester's Scythe",
        icon: "../images/Item_Icons/Harvester's_Scythe.png",
        effect: "+15% critical strike chance",
        multiplier: 1,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    laserScope: {
        name: "Laser Scope",
        icon: "../images/Item_Icons/Laser_Scope.png",
        effect: "Critical strikes deal 100% extra damage",
        multiplier: 1,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    triTipDagger: {
        name: "Tri-Tip Dagger",
        icon: "../images/Item_Icons/Tri-Tip_Dagger.png",
        effect: "Critical strikes deal 50% extra damage",
        multiplier: 1,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    shatteringJustice: {
        name: "Shattering Justice",
        icon: "../images/Item_Icons/Shattering_Justice.png",
        effect: "Critical strikes deal 100% more damage",
        multiplier: 1,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    chargedPerforator: {
        name: "Charged Perforator",
        icon: "../images/Item_Icons/Charged_Perforator.png",
        effect: "+80% damage vs low-health enemies",
        multiplier: 1,
        stackBehavior: "multiplicative",
        stackable: true,
    },
    brilliantBehemoth: {
        name: "Brilliant Behemoth",
        icon: "../images/Item_Icons/Brilliant_Behemoth.png",
        effect: "Attacks explode for 100% damage",
        multiplier: 1,
        stackBehavior: "multiplicative",
        isDLC: true,
        stackable: true,
    },
    shatterspleen: {
        name: "Shatterspleen",
        icon: "../images/Item_Icons/Shatterspleen.png",
        effect: "Chance to bleed enemies on hit for extra damage",
        multiplier: 1,
        stackBehavior: "multiplicative",
        isDLC: true,
        stackable: true,
    },
    runaldsBand: {
        name: "Runald’s Band",
        icon: "../images/Item_Icons/Runald's_Band.png",
        effect: "250% bonus on high-damage hits (slows)",
        multiplier: 2.5,
        stackBehavior: "bonus",
        stackable: true,
    },
    kjarosBand: {
        name: "Kjaro’s Band",
        icon: "../images/Item_Icons/Kjaro's_Band.png",
        effect: "300% bonus on high-damage hits (burns)",
        multiplier: 3.0,
        stackBehavior: "bonus",
        stackable: true,
    },
};

export let selectedDamageItems = {};
let showDlcItems = false;

function ensureDlcToggle(container) {
    if (!container || !container.parentElement) return;
    if (container.parentElement.querySelector(".damage-item-filter")) return;

    const filter = document.createElement("div");
    filter.className = "damage-item-filter";
    filter.innerHTML = `
      <label>
        <input type="checkbox" id="include-dlc-items-toggle" />
        Include DLC damage items
      </label>
    `;
    container.parentElement.insertBefore(filter, container);

    const toggle = filter.querySelector("#include-dlc-items-toggle");
    toggle.addEventListener("change", (event) => {
        showDlcItems = event.target.checked;
        initDamageItemGrid();
    });
}

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
    if (!container) return;
    ensureDlcToggle(container);
    container.innerHTML = "";

    const visibleItems = Object.entries(damageItems).filter(
        ([, item]) => showDlcItems || !item.isDLC,
    );

    visibleItems.forEach(([id, item]) => {
        const count = selectedDamageItems[id]?.count || 0;
        const tile = document.createElement("div");
        tile.className = `damage-item-tile ${count ? "active" : ""}`;
        tile.innerHTML = `
        <img src="${item.icon}" alt="${item.name}" />
        ${count > 0 ? `<span class="item-count">${count}</span>` : ""}
        <div class="item-tooltip">
          <h4>${item.name}${item.isDLC ? " • DLC" : ""}</h4>
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
        `,
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
