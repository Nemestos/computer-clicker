export var defaultMinions = [
  {
    id: 1,
    name: "Hard drive",
    cost: 50,
    gps: 0.1,
    owned: 0,
    temp: 20,
    capacities: [
      {
        name: "Capacity",
        structure: "$owned",
        value: "",
        type: "MB",
        price: 10.0,
      },
    ],
  },
  {
    id: 2,
    name: "Motherboard",
    cost: 150,
    gps: 0.5,
    owned: 1,
    temp: 30,
    capacities: [
      {
        name: "Supported os",
        structure: "",
        value: "Hannah montana linux",
        type: "",
        price: 500.0,
      },
    ],
  },
  {
    id: 3,
    name: "CPU",
    cost: 500,
    gps: 1,
    owned: 1,
    temp: 45,
    capacities: [
      {
        name: "Speed",
        structure: "",
        value: 1,
        type: "MHz",
        price: 5,
      },
    ],
  },
  {
    id: 4,
    name: "GPU",
    cost: 1000,
    gps: 3,
    owned: 0,
    temp: 50,
    capacities: [
      {
        name: "Capacity",
        structure: "$owned",
        value: "",
        type: "GB",
        price: 500,
      },
      {
        name: "VRAM",
        structure: "",
        value: 4,
        type: "GB",
        price: 150,
      },
    ],
  },
  {
    id: 5,
    name: "RAM",
    cost: 75,
    gps: 1.25,
    owned: 0,
    temp: 25,
    capacities: [
      {
        name: "Capacity",
        structure: "$owned",
        value: "",
        type: "MB",
        price: 50,
      },
    ],
  },
];

export var defaultClicker = [
  {
    id: 1,
    name: "note-bloc",
    gain: 1,
    cost: 0,
    owned: 1,
    image: "",
  },
  {
    id: 2,
    name: "EMACS",
    gain: 2,
    cost: 200,
    owned: 0,
    image: "",
  },
  {
    id: 3,
    name: "VIM",
    gain: 4,
    cost: 500,
    owned: 0,
    image: "",
  },
  {
    id: 4,
    name: "Notepad++",
    gain: 6,
    cost: 1000,
    owned: 0,
    image: "",
  },
  {
    id: 5,
    name: "Visual Studio Code",
    gain: 8,
    cost: 3000,
    owned: 0,
    image: "",
  },
];
class GameState {
  constructor() {
    this.golds = 0;
    this.gps = 1;
    this.minions = defaultMinions;
    this.clicker = defaultClicker;
  }
}

export { GameState };
