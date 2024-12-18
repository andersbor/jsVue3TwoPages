Vue.createApp({
    data() {
        return {
            word: "page two",
            counter: 0,
        }
    },
    methods: {
        save(word) {
            this.words.push(word)
        },
        clear() {
            this.words = []
            this.message = null
        },
        show() {
            if (this.words == null || this.words.length == 0) {
                this.message = "empty"
            }
            else {
                this.message = this.words.toString()
            }
        }
    }
}).mount("#app")