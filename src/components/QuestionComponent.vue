<template>
  <div>
    <h2 class="text-xl font-medium mb-4">{{ currentQuestion.text }}</h2>
    <div class="flex flex-col space-y-4">
      <button
        v-for="answer in currentQuestion.answers"
        :key="answer.id"
        :class="{
          'bg-white text-gray-800 border-red-500 hover:bg-red-500 hover:text-white':
            selectedAnswer === answer.id,
          'bg-red-500 text-white hover:bg-red-600 hover:border-red-600':
            selectedAnswer !== answer.id,
        }"
        class="inline-flex items-center justify-center h-16 rounded-md border-2 border-transparent transition-colors duration-150 text-lg font-medium focus:outline-none focus:shadow-outline-red"
        @click="$emit('selectAnswer', answer.id)"
      >
        {{ answer.text }}
      </button>
      <button
        type="button"
        @click="$emit('nextQuestion')"
        :disabled="disabled"
        class="inline-block px-6 py-3 font-medium leading-5 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
      >
        {{ buttonLabel }}
      </button>

    </div>
  </div>
</template>

<script setup>
defineProps({
  currentQuestion: {
    type: Object,
    required: true,
  },
  selectedAnswer: {
    type: String,
    default: null,
  },
  buttonLabel: {
    type: String,
    default: "Next",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
