Vue.createApp({
    data() {
        return {
            word: "anders",
            counter: 0,
        }
    },
    methods: {
        addOne() {
            this.counter += 1
        }
    }
}).mount("#app")