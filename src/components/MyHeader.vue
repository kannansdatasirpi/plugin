<template>
    <div id="plugin">
<h1 class="header-title">
    <slot name="title" />
</h1>
<h2 class="title-author">
    <slot name="author" />
</h2>
<h1 id="gal">Photo Gallery</h1>
<main class="container">
   
<Swiper 
:modules="[EffectCube, Pagination]" 
effect="cube" 
:grabCursor="true" 
:loop="true" 
:cubeEffect="{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,}"
    :pagination="{ clickable: true }"
    >
    <SwiperSlide v-for="photo in photos" :key="photo">
    <img :src="photo"/>
    </SwiperSlide>
</Swiper>
</main>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCube, Pagination } from "swiper"
import "swiper/css";
import 'swiper/css/pagination';

const photos = [
require('../assets/photo_1.jpg'),
require('../assets/photo_2.jpg'),
require('../assets/photo_3.jpg'),
require('../assets/photo_4.jpg'),

];
    export default {
        components: {
            Swiper,
            SwiperSlide,

        },
        data() {
            return {
                EffectCube,
                Pagination,
                photos,
            }
        }

    }
</script>

<style>
    html,body {
        font-size: 1.2em ;
        background-color: #fafafa;
    }
    .container {
        max-width: 100px;
        margin: 0 auto;
        padding: 50px 0;
    }
    h1 {
        text-align: center;
        margin-bottom: 30px;
    }
    .swiper {
        width: 400px;
        height: 400px;
        overflow: visible;
    }
    .swiper-slide img {
        width: 100%;
        height:100%
    }
    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #fff ;
        opacity: 1;
        align-items: center;
    }
    .swiper-pagination-bullet-active {
        background-color:aqua;
    }
</style>