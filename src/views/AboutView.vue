<template>
    <div class="container mx-auto mt-5 min-h-[80vh]">
    <h2 class="text-2xl ms-5 font-bold mb-5 before:content-['|'] before:text-primary before:mr-2 my-5">About</h2>
    <div class="grid grid-cols-2 gap-4" >
        <div class=" mx-auto">
           <img src="/img/product2.jpg " alt="" class="w-full h-full object-cover">
        </div>
        <div class=" mx-auto flex items-center text-lg/relaxed">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam commodi optio quam voluptatum nemo tempora dolore mollitia et provident voluptates ullam illum explicabo rem quasi, illo earum, dolor nobis sed. Libero nihil exercitationem id consectetur ea sapiente eum eaque cupiditate, incidunt facere odio. Eaque officia dolore odio repellendus vel vitae!</p>
        </div>
    </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted } from 'vue';


onMounted(() => {
    console.log('AboutView mounted');
});
onUnmounted(() => {
    console.log('AboutView unmounted');
});
</script>