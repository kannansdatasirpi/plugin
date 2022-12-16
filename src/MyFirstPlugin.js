import MyHeader from './components/MyHeader.vue'
export default {
    install: (app) => {
        /*  app is the result of createApp()
        options is user options passed in
        */
       app.component('my-header', MyHeader)

    //   
    }
}