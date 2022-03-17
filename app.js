const app = Vue.createApp({
    data(){
        return {
            title: "Coordinates Of The Box",
            coords: {
                x:0,
                y:0,
            },
        };

        },
        methods: {
            kordinatlar(event){
                console.log(event.x, event.y);
                this.coords={
                    x: event.x,
                    y: event.y,
                }
            }
    }
}).mount("#app");