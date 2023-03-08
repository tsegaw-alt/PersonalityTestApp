<template>
  <div class="bg-white min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-6xl font-medium text-primary mb-8 text-center">Personality Test</h1>
    <h2 class="text-3xl font-medium text-primary mb-4 text-center">Find out if you're an introvert or an extrovert.</h2>
    <button class="py-3 px-6 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out" @click="startTest">Start Test</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    function startTest() {
      router.push('/test');
    }

    return {
      startTest
    };
  }
};
</script>

<style scoped>
  .bg-primary {
    background-image: linear-gradient(to bottom right, #1c2331, #283348);
    background-color: rgb(17, 24, 39);
  }

  .text-primary {
    color: rgb(17, 24, 39);
  }
</style>
