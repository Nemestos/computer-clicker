export var minions =[
    {
        id: 1,
        name: "Hard drive",
        cost: 50,
        gps: 0.1,
        owned: 0,
        ownedText:"Quantity",
        temp:20,
        capacities: [
            {
                name:"Capacity",
                value:1.0,
                type:"MB",
                price:10.0,
            }
        ]
    },
    {
        id: 2,
        name: "Motherboard",
        cost: 150,
        gps: 0.5,
        owned: 0,
        ownedText: "Quantity",
        temp:30,
        capacities: [
            {
                name:"Supported os",
                value:"Hannah montana linux",
                type:"",
                price:500.0,
            }
        ]
    },
    {
        id: 3,
        name: "CPU",
        cost: 500,
        gps: 1,
        owned: 0,
        ownedText: "Cores",
        temp: 45,
        capacities: [
            {
                name:"Speed",
                value:1,
                type:"MHz",
                price:5,
            }
        ]
    },
    {
        id: 4,
        name: "GPU",
        cost: 1000,
        gps: 3,
        owned: 0,
        ownedText: "Quantity",
        temp: 50,
        capacities: [
            {
                name:"VRAM",
                value:4,
                type:"GB",
                price:250,
            }
        ]
    },
    {
        id: 5,
        name: "RAM",
        cost: 75,
        gps: 1.25,
        owned: 0,
        ownedText: "Quantity",
        temp: 25,
        capacities: [
            {
                name:"Capacity",
                value:1,
                type:"MB",
                price:50,
            }
        ]
    },
]
class GameState{
    constructor() {
        this.golds = 0;
        this.gps = 1;
    }
}

export {GameState}