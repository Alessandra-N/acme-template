const app = new Vue ({
    el: "#app",

    data: {
        nav_links: [
            "Home",
            "About",
            "Shop",
            "Donate",
            "Contact",
        ],

        support_actions: [
            {
                number: "01",
                name: "Shop Products",
                img: "shop.webp",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore aut minima aliquam, pariatur voluptatum eum ea consequuntur recusandae saepe.",
            },
            {
                number: "02",
                name: "Donate",
                img: "donate.webp",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore aut minima aliquam, pariatur voluptatum eum ea consequuntur recusandae saepe.",
            },
            {
                number: "03",
                name: "Buy gift cards",
                img: "buy.webp",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore aut minima aliquam, pariatur voluptatum eum ea consequuntur recusandae saepe.",
            }
        ]
    },

    mounted() {
        
    },

})