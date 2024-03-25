// destrutturazione dell'oggetto Vue che ci consentre di prendere il parametro crateApp
const {createApp} = Vue;

//funzione Create app parametro dell'oggetto Vue alla quale passiamo la funzione data
createApp ({
    //forma contratta di data: function(){}
    data() {
        // ritorna un  oggetto con parametri i dati che usiamo nel DOM
        return {
            message: 'Hello Vue, nice to meet you!',
            src: './img/dragonworld.jpg'
        }
    }
}).mount('#app');