<template id="result">
  <div class="max-w-lg mx-auto">
    <h2 class="text-3xl font-bold mb-4">
      Your personality trait is:
      <span class="text-indigo-600">{{ personalityTrait }}</span>
    </h2>
    <div class="bg-indigo-100 rounded-lg p-6">
      <p class="text-lg text-indigo-800 mb-4">
        Congratulations on discovering your personality trait! Remember, this is
        just a fun test and doesn't define who you are as a person. Use this
        information to learn more about yourself and grow as an individual.
      </p>
      <button
        type="button"
        @click="$emit('resetTest')"
        class="inline-block px-6 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="mr-2">Try Again</span>
        <i class="fas fa-redo"></i>
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  personalityTrait: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
<!-- Style -->
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");

.fa-arrow-right,
.fa-redo {
  margin-left: 0.5rem;
}

/* New styles */
h2 span {
  font-size: 1.5rem;
}

.bg-indigo-100 {
  background-color: #d6e4ff;
}

.rounded-lg {
  border-radius: 1rem;
}

button:hover,
button:focus {
  transform: translateY(-1px);
}

button:hover {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

button:focus {
  outline: none;
  box-shadow: 0px 0px 0px 3px rgba(79, 70, 229, 0.5);
}
</style>
