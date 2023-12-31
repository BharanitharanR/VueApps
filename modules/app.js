
const app = Vue.createApp({
    data() {
        return {
        fanFavorite: false,
        title: "Mahabaratham",
        author: "Veda Vyasar",
        age: 9090000000,
        eventType: null,
        coordinatesX: 0,
        coordinatesY: 0,
        books: [{title: "Mahabaratham",author:" Veda Vyasar",age:909309090909090,icon: "./assets/Mahabaratham.png"},
                {title: "Ramayanam",author:" Valmiki",age:100000000000000000000, fanFavourite: true,icon: "./assets/Ramayanam.png"},
                {title: "Bagavad Gita",author:" Bagavan Krishnar",age:909309090909090,fanFavourite: true,icon: "./assets/Mahabaratham.png"}
             ],
        showBooks: false
        }
    },
    methods: {
        toggleBooks() {
            console.log("checkbox changed");
            this.showBooks = !this.showBooks;
        },
        updateAuthorTitleAge(author,title,age) {
            this.author = author;
            this.title = title;
            this.age = age;

        },
        changeTheBook(title)
        {
            if(title !== "Ramayanam")
            {
                title = "Ramayanam";
                author = "Valmiki";
                age = 50000000000;

            } else {
                author =  "Vedav Vyasar";
                age = 10000000;
                title = "Mahabratham"
            }
            this.fanFavorite = !this.fanFavorite;
            this.updateAuthorTitleAge(author,title,age);
        },
        eventDetails(e)
        {
            this.eventType = e.type;
            if(this.eventType === "mousemove")
            {
                this.coordinatesX = e.clientX;
                this.coordinatesY = e.clientY;
            }
        },
        toggleFav(book)
        {
           book.fanFavourite = !book.fanFavourite;
        }
    },
    computed: {
        filterFavouriteBooks() {
            return this.books.filter((book) => book.fanFavourite)
        }
    }
    
}
);
app.mount("#app")