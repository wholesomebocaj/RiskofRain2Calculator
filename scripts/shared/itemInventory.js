// Shared item data and inventory logic for all survivors

export const defaultDamageIcon = "../images/Item_Icons/Item_Scrap,_White.png";

export const damageItems = {
    crowbar: {
        name: "Crowbar",
        icon: "../images/Item_Icons/Crowbar.png",
        effect: "+75% vs full health",
        multiplier: 1.75,
        stackBehavior: "crowbar-style",
        stackable: true,
    },
    armorPiercing: {
        name: "Armor-Piercing Rounds",
        icon: "../images/Item_Icons/Armor-Piercing_Rounds.png",
        effect: "+20% vs bosses",
        multiplier: 1.2,
        stackBehavior: "additive",
        stackable: true,
    },
    focusCrystal: {
        name: "Focus Crystal",
        icon: "../images/Item_Icons/Focus_Crystal.png",
        effect: "+20% damage within 13m",
        multiplier: 1.2,
        stackBehavior: "additive",
        stackable: true,
    },
    delicateWatch: {
        name: "Delicate Watch",
        icon: "../images/Item_Icons/Delicate_Watch.png",
        effect: "+20% damage (breaks below 25% HP)",
        multiplier: 1.2,
        stackBehavior: "additive",
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
        multiplier: 1.1,
        stackBehavior: "additive",
        stackable: true,
    },
    harvestersScythe: {
        name: "Harvester's Scythe",
        icon: "../images/Item_Icons/Harvester's_Scythe.png",
        effect: "+5% critical strike chance",
        multiplier: 1.05,
        stackBehavior: "additive",
        stackable: true,
    },
    laserScope: {
        name: "Laser Scope",
        icon: "../images/Item_Icons/Laser_Scope.png",
        effect: "Critical strikes deal +100% damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    triTipDagger: {
        name: "Tri-Tip Dagger",
        icon: "../images/Item_Icons/Tri-Tip_Dagger.png",
        effect: "10% chance on hit to bleed for 240% damage",
        multiplier: 1.1,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    shatteringJustice: {
        name: "Shattering Justice",
        icon: "../images/Item_Icons/Shattering_Justice.png",
        effect: "After 5 hits, reduce enemy armor by 60",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    chargedPerforator: {
        name: "Charged Perforator",
        icon: "../images/Item_Icons/Charged_Perforator.png",
        effect: "10% chance on hit to call lightning for 500% damage",
        multiplier: 1.5,
        stackBehavior: "additive",
        stackable: true,
    },
    gasoline: {
        name: "Gasoline",
        icon: "../images/Item_Icons/Gasoline.png",
        effect: "Kills ignite enemies for 150% burn damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    ukulele: {
        name: "Ukulele",
        icon: "../images/Item_Icons/Ukulele.png",
        effect: "25% chance on hit to fire chain lightning for 80% damage",
        multiplier: 1.2,
        stackBehavior: "additive",
        stackable: true,
    },
    willOWisp: {
        name: "Will-o'-the-wisp",
        icon: "../images/Item_Icons/Will-o'-the-wisp.png",
        effect: "On kill, spawn a lava pillar for 350% damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    stickyBomb: {
        name: "Sticky Bomb",
        icon: "../images/Item_Icons/Sticky_Bomb.png",
        effect: "5% chance on hit to attach a 180% damage bomb",
        multiplier: 1.09,
        stackBehavior: "additive",
        stackable: true,
    },
    soldiersSyringe: {
        name: "Soldier's Syringe",
        icon: "../images/Item_Icons/Soldier's_Syringe.png",
        effect: "+15% attack speed",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    predatoryInstincts: {
        name: "Predatory Instincts",
        icon: "../images/Item_Icons/Predatory_Instincts.png",
        effect: "+5% critical strike chance",
        multiplier: 1.05,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    atgMissile: {
        name: "ATG Missile Mk. 1",
        icon: "../images/Item_Icons/AtG_Missile_Mk._1.png",
        effect: "10% chance on hit to fire a missile for 300% damage",
        multiplier: 1.3,
        stackBehavior: "additive",
        stackable: true,
    },
    berzerkersPauldron: {
        name: "Berzerker's Pauldron",
        icon: "../images/Item_Icons/Berzerker's_Pauldron.png",
        effect: "Kill 4 enemies in 1s to gain +100% attack speed",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    brilliantBehemoth: {
        name: "Brilliant Behemoth",
        icon: "../images/Item_Icons/Brilliant_Behemoth.png",
        effect: "All attacks explode for 60% damage",
        multiplier: 1.6,
        stackBehavior: "additive",
        stackable: true,
    },
    electricBoomerang: {
        name: "Electric Boomerang",
        icon: "../images/Item_Icons/Electric_Boomerang.png",
        effect: "15% chance on hit to fire a 120% damage boomerang",
        multiplier: 1.15,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    frostRelic: {
        name: "Frost Relic",
        icon: "../images/Item_Icons/Frost_Relic.png",
        effect: "On kill, spawn an ice storm dealing damage over time",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    h3ad5tV2: {
        name: "H3AD-5T v2",
        icon: "../images/Item_Icons/H3AD-5T_v2.png",
        effect: "Landing produces a huge area damage explosion",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    happiestMask: {
        name: "Happiest Mask",
        icon: "../images/Item_Icons/Happiest_Mask.png",
        effect: "Chance to spawn a ghost for 1500% damage on kill",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    littleDisciple: {
        name: "Little Disciple",
        icon: "../images/Item_Icons/Little_Disciple.png",
        effect: "Fire a tracking wisp that deals 300% damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    nkuhanasOpinion: {
        name: "N'kuhana's Opinion",
        icon: "../images/Item_Icons/N'kuhana's_Opinion.png",
        effect: "Store healing to fire a skull for damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    resonanceDisc: {
        name: "Resonance Disc",
        icon: "../images/Item_Icons/Resonance_Disc.png",
        effect: "Launch a disk for massive damage after kills",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    runicLens: {
        name: "Runic Lens",
        icon: "../images/Item_Icons/Runic_Lens.png",
        effect: "3% chance on hit to call a meteor strike",
        multiplier: 1.15,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    sentientMeatHook: {
        name: "Sentient Meat Hook",
        icon: "../images/Item_Icons/Sentient_Meat_Hook.png",
        effect: "20% chance on hit to fire homing hooks for 100% damage",
        multiplier: 1.2,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    unstableTeslaCoil: {
        name: "Unstable Tesla Coil",
        icon: "../images/Item_Icons/Unstable_Tesla_Coil.png",
        effect: "Shock nearby enemies for 200% damage every 0.5s",
        multiplier: 1.2,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    wakeOfVultures: {
        name: "Wake of Vultures",
        icon: "../images/Item_Icons/Wake_of_Vultures.png",
        effect: "Gain elite power for extra damage after kills",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    warHorn: {
        name: "War Horn",
        icon: "../images/Item_Icons/War_Horn.png",
        effect: "Equipment grants +70% attack speed for 8s",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    warbanner: {
        name: "Warbanner",
        icon: "../images/Item_Icons/Warbanner.png",
        effect: "Raise attack speed by 30% during Teleporter event",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    brainstalks: {
        name: "Brainstalks",
        icon: "../images/Item_Icons/Brainstalks.png",
        effect: "Elite kills make skills have 0.5s cooldown",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    ceremonialDagger: {
        name: "Ceremonial Dagger",
        icon: "../images/Item_Icons/Ceremonial_Dagger.png",
        effect: "On kill, fire 3 daggers for 150% damage each",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    halcyonSeed: {
        name: "Halcyon Seed",
        icon: "../images/Item_Icons/Halcyon_Seed.png",
        effect: "Summon Aurelionite during the Teleporter event",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    miredUrn: {
        name: "Mired Urn",
        icon: "../images/Item_Icons/Mired_Urn.png",
        effect: "Tethers nearby enemies to deal damage over time",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    moltenPerforator: {
        name: "Molten Perforator",
        icon: "../images/Item_Icons/Molten_Perforator.png",
        effect: "10% chance on hit to call 3 magma balls for 300% each",
        multiplier: 1.9,
        stackBehavior: "additive",
        stackable: true,
    },
    networkedSuffering: {
        name: "Networked Suffering",
        icon: "../images/Item_Icons/Networked_Suffering.png",
        effect: "Spread enemy damage globally for extra damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    orphanedCore: {
        name: "Orphaned Core",
        icon: "../images/Item_Icons/Orphaned_Core.png",
        effect: "Summon a pet that deals 400% damage on impact",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    oldGuillotine: {
        name: "Old Guillotine",
        icon: "../images/Item_Icons/Old_Guillotine.png",
        effect: "Instantly kill elites below 13% health",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    shatterspleen: {
        name: "Shatterspleen",
        icon: "../images/Item_Icons/Shatterspleen.png",
        effect: "+5% critical chance; crits bleed for 240% damage",
        multiplier: 1.05,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    singularityBand: {
        name: "Singularity Band",
        icon: "../images/Item_Icons/Singularity_Band.png",
        effect: "Hits over 400% damage spawn a black hole",
        multiplier: 1.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    needletick: {
        name: "Needletick",
        icon: "../images/Item_Icons/Needletick.png",
        effect: "10% chance on hit to collapse an enemy for 400% damage",
        multiplier: 1.4,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
    },
    lostSeersLenses: {
        name: "Lost Seer's Lenses",
        icon: "../images/Item_Icons/Lost_Seer's_Lenses.png",
        effect: "0.5% chance to instantly kill a non-boss enemy",
        multiplier: 1.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    plasmaShrimp: {
        name: "Plasma Shrimp",
        icon: "../images/Item_Icons/Plasma_Shrimp.png",
        effect: "While shielded, hit enemies fire a missile for 40% damage",
        multiplier: 1.4,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    polylute: {
        name: "Polylute",
        icon: "../images/Item_Icons/Polylute.png",
        effect: "25% chance to fire lightning for 60% damage",
        multiplier: 1.15,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
    },
    voidsentFlame: {
        name: "Voidsent Flame",
        icon: "../images/Item_Icons/Voidsent_Flame.png",
        effect: "On hit at full health, spawn a lava pillar for 260% damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    essenceOfHeresy: {
        name: "Essence of Heresy",
        icon: "../images/Item_Icons/Essence_of_Heresy.png",
        effect: "Replace Special with Ruin, detonate for bonus damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    visionsOfHeresy: {
        name: "Visions of Heresy",
        icon: "../images/Item_Icons/Visions_of_Heresy.png",
        effect: "Replace Primary with Hungering Gaze",
        multiplier: 1.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    leafClover: {
        name: "57 Leaf Clover",
        icon: "../images/Item_Icons/57_Leaf_Clover.png",
        effect: "Roll random effects one extra time for favorable outcomes",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    ocularHUD: {
        name: "Ocular HUD",
        icon: "../images/Item_Icons/Ocular_HUD.png",
        effect: "+100% crit chance for 8s on use",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    preonAccumulator: {
        name: "Preon Accumulator",
        icon: "../images/Item_Icons/Preon_Accumulator.png",
        effect: "Deals massive damage per second and explodes on contact",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    royalCapacitor: {
        name: "Royal Capacitor",
        icon: "../images/Item_Icons/Royal_Capacitor.png",
        effect: "Call down a lightning strike for 3000% damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    sawmerang: {
        name: "Sawmerang",
        icon: "../images/Item_Icons/Sawmerang.png",
        effect: "Throw 3 blades for 3x400% damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    theCrowdfunder: {
        name: "The Crowdfunder",
        icon: "../images/Item_Icons/Crowdfunder.png",
        effect: "Fire a continuous barrage of bullets",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    volcanicEgg: {
        name: "Volcanic Egg",
        icon: "../images/Item_Icons/Volcanic_Egg.png",
        effect: "Become a fireball that deals 500% impact damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    helfireTincture: {
        name: "Helfire Tincture",
        icon: "../images/Item_Icons/Helfire_Tincture.png",
        effect: "Ignite enemies for damage every second",
        multiplier: 1.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
        special: true,
    },
    spinelTonic: {
        name: "Spinel Tonic",
        icon: "../images/Item_Icons/Spinel_Tonic.png",
        effect: "+100% damage for 20 seconds",
        multiplier: 2.0,
        stackBehavior: "additive",
        isDLC: true,
        stackable: true,
    },
    molotov6Pack: {
        name: "Molotov (6-Pack)",
        icon: "../images/Item_Icons/Molotov_6-Pack.png",
        effect: "Throw 6 molotovs for fire damage",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
    superMassiveLeech: {
        name: "Super Massive Leech",
        icon: "../images/Item_Icons/Super_Massive_Leech.png",
        effect: "Heal for 20% of the damage you deal",
        multiplier: 1.0,
        stackBehavior: "additive",
        stackable: true,
        special: true,
    },
};

export let selectedDamageItems = {};
let showDlcItems = false;
let sortOrder = "alphabetical";
let searchQuery = "";

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
      <label>
        Search
        <input type="search" id="damage-item-search" placeholder="Search items" />
      </label>
      <label>
        Sort by
        <select id="damage-item-sort">
          <option value="alphabetical">Alphabetical</option>
          <option value="damage">Damage %</option>
        </select>
      </label>
    `;
    container.parentElement.insertBefore(filter, container);

    const toggle = filter.querySelector("#include-dlc-items-toggle");
    const searchInput = filter.querySelector("#damage-item-search");
    const sortSelect = filter.querySelector("#damage-item-sort");

    toggle.addEventListener("change", (event) => {
        showDlcItems = event.target.checked;
        initDamageItemGrid();
    });

    searchInput.addEventListener("input", (event) => {
        searchQuery = event.target.value.trim().toLowerCase();
        initDamageItemGrid();
    });

    sortSelect.addEventListener("change", (event) => {
        sortOrder = event.target.value;
        initDamageItemGrid();
    });
}

// Item multiplier calculation
export function calculateItemMultiplier(item, count) {
    if (!count || count <= 0) return 1;

    if (item.stackBehavior === "crowbar-style") {
        return 1.75 + 0.75 * (count - 1);
    }

    if (item.stackBehavior === "additive") {
        return 1 + (item.multiplier - 1) * count;
    }

    return Math.pow(item.multiplier, count);
}

// Renders the item grid for selection
export function initDamageItemGrid() {
    const container = document.getElementById("damage-item-grid");
    if (!container) return;
    ensureDlcToggle(container);
    container.innerHTML = "";

    const visibleItems = Object.entries(damageItems)
        .filter(([, item]) => showDlcItems || !item.isDLC)
        .filter(([, item]) => {
            if (!searchQuery) return true;
            const needle = searchQuery;
            return (
                item.name.toLowerCase().includes(needle) ||
                item.effect.toLowerCase().includes(needle)
            );
        });

    const sortedItems = [...visibleItems].sort(([idA, itemA], [idB, itemB]) => {
        if (sortOrder === "damage") {
            const delta = itemB.multiplier - itemA.multiplier;
            return delta !== 0 ? delta : itemA.name.localeCompare(itemB.name);
        }
        return itemA.name.localeCompare(itemB.name);
    });

    sortedItems.forEach(([id, item]) => {
        const count = selectedDamageItems[id]?.count || 0;
        const icon = item.icon || defaultDamageIcon;
        const tile = document.createElement("div");
        tile.className = `damage-item-tile ${count ? "active" : ""}`;
        tile.innerHTML = `
        <img src="${icon}" alt="${item.name}" onerror="this.src='${defaultDamageIcon}'" />
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
            icon: data.item.icon || defaultDamageIcon,
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
