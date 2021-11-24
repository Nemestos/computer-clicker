export const MULTIPLICATOR = 1.15;
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
                id: 1,
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
                id: 1,
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
                id:1,
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
                id:1,
                name: "Capacity",
                structure: "$owned",
                value: "",
                type: "GB",
                price: 500,
            },
            {
                id:2,
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
                id: 1,
                name: "Capacity",
                structure: "$owned",
                value: "",
                type: "MB",
                price: 50,
            },
        ],
    },
];

class GameState {
    constructor() {
        this.golds = 0;
        this.gps = 1;
        this.minions = defaultMinions;
    }
}

export {GameState};
