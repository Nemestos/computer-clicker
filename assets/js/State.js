export const PRICE_MULT = 1.15;
export const CLICK_MOD = 10;
export const MINIONS_TYPES_MULT = [5, 50, 100, 250, 1000];
export var defaultMinions = [
  {
    id: 1,
    name: "Hard drive",
    cost: 50,
    default_gps: 0.1,
    default_power: 5,
    gps: 0.1,
    owned: 0,
    temp: 20,
    hasPercent: true,
    maxMemory: 10,
    type: "MB",
    capacities: [
      {
        id: 1,
        name: "Quantity",
        structure: "$parent.owned",
        value_type:"one",
        value: "",
        incr: 1,
        price: 10.0,
      },
      {
        id: 2,
        name: "Capacity",
        structure: "$parent.maxMemory",
        value_type:"one",
        value: "",
        incr: 2.5,
        price: 10.0,
      },
    ],
  },
  {
    id: 2,
    name: "Motherboard",
    cost: 150,
    default_power: 20,
    default_gps: 0.5,
    gps: 0.5,
    owned: 1,
    temp: 30,
    hasPercent: false,
    type: "",
    capacities: [
      {
        id: 1,
        name: "Supported os",
        structure: "$this.values",
        value_type: "multiples",
        values: ["Hannah montana linux","Apartheid linux","Ubuntu Satanic edition","Gentoo","Linux from scratch","Temple os","Arch linux epita edition"],
        value: "",
        current_value:0,
        price: 500.0,
      },
    ],
  },
  {
    id: 3,
    name: "CPU",
    cost: 500,
    default_gps: 1,
    default_power: 125,
    gps: 1,
    owned: 1,
    temp: 45,
    hasPercent: true,
    maxMemory: 10,
    type: "Mhz",
    capacities: [
      {
        id: 1,
        name: "Cores",
        structure: "$parent.owned",
        value_type: "one",
        value: "",
        incr: 2,
        price: 300,
      },
      {
        id: 2,
        name: "Speed",
        structure: "$parent.maxMemory",
        value_type: "one",
        value: "",
        type: "MHz",
        incr: 2.75,
        price: 5,
      },
    ],
  },
  {
    id: 4,
    name: "GPU",
    cost: 10,
    default_gps: 3,
    default_power: 250,
    gps: 3,
    owned: 0,
    temp: 50,
    hasPercent: true,
    maxMemory: 2,
    type: "GB",
    capacities: [
      {
        id: 1,
        name: "Quantity",
        structure: "$parent.owned",
        value_type: "one",
        value: "",
        type: "",
        incr: 1,
        price: 500,
      },
      {
        id: 2,
        name: "VRAM",
        structure: "$parent.maxMemory",
        value_type: "one",
        value: "",
        type: "GB",
        incr: 2,
        price: 150,
      },
    ],
  },
  {
    id: 5,
    name: "RAM",
    cost: 75,
    default_gps: 1.25,
    default_power: 25,
    gps: 1.25,
    owned: 0,
    temp: 25,
    hasPercent: true,
    maxMemory: 4,
    type: "MB",

    capacities: [
      {
        id: 1,
        name: "Quantity",
        structure: "$parent.owned",
        value_type: "one",
        value: "",
        type: "",
        incr: 1,
        price: 50,
      },
      {
        id: 2,
        name: "Capacity",
        structure: "$parent.maxMemory",
        value_type: "one",
        value: "",
        type: "MB",
        incr: 4,
        price: 50,
      },
    ],
  },
];

export var defaultClicker = [
  {
    id: 1,
    name: "note-bloc",
    gain: 33333,
    cost: 50,
    owned: 0,
    image: "assets/img/notepad-logo.jpeg",
  },
  {
    id: 2,
    name: "EMACS",
    gain: 2,
    cost: 200,
    owned: 0,
    image: "assets/img/emacs-logo.png",
  },
  {
    id: 3,
    name: "VIM",
    gain: 4,
    cost: 500,
    owned: 0,
    image: "assets/img/vim-logo.png",
  },
  {
    id: 4,
    name: "Notepad++",
    gain: 6,
    cost: 1000,
    owned: 0,
    image: "assets/img/notepad++-logo.png",
  },
  {
    id: 5,
    name: "Visual Studio Code",
    gain: 8,
    cost: 3000,
    owned: 0,
    image: "assets/img/vs-code-logo.png",
  },
];

class GameState {
  constructor() {
    this.golds = 0;
    this.gps = 1;
    this.click_pow = 1;
    this.minions = [...defaultMinions];
    this.clicker = [...defaultClicker];
  }

  getTotalMinion() {
    let total_minions = 0;
    this.minions.forEach((minion) => {
      total_minions += minion.owned;
    });
    return total_minions;
  }

  toJson() {
    return Object.getOwnPropertyNames(this).reduce((a, b) => {
      a[b] = this[b];
      return a;
    }, {});
  }

  apply(data) {
    Object.assign(this, data);
  }

  reset() {
    Object.assign(this, new GameState());
  }
}

export { GameState };
