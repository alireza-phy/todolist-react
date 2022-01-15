const data = [{
    id: 1,
    name: "buy list",
    description: 'items need for home',
    items: [
        {
            id: 1,
            title: "milk",
            status: false,
        },
        {
            id: 2,
            title: "cheese",
            status: false,
        },
    ],
},
    {
        id: 2,
        name: "office todo",
        description: 'tomorrow tasks in office',
        items: [
            {
                id: 1,
                title: "call Apple company in 10 o'clock",
                status: false,
            },
            {
                id: 2,
                title: "meeting with marketing team ",
                status: false,
            },
        ],
    },]

export const makeRandomId = () => {
    return parseInt(Math.random() * 10000)
}

export default data