<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
  >
    <div class="bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Personality Test</h1>
      <p v-if="currentQuestion" class="text-lg mb-8">
        Answer the following questions to determine your personality trait.
      </p>
      {{ personalityTrait }}
      <question
        v-if="currentQuestion"
        :currentQuestion="currentQuestion"
        :selectedAnswer="selectedAnswer"
        @selectAnswer="selectedAnswer = $event"
        @nextQuestion="nextQuestion"
        :disabled="selectedAnswer === null"
      />
      <result
        v-else
        :personalityTrait="personalityTrait"
        @resetTest="resetTest"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import Result from "./ResultComponent.vue";
import Question from "./QuestionComponent.vue";

const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const questions = ref(null);
const introvertCount = ref(0);
const extrovertCount = ref(0);
const personalityTrait = ref("");
onMounted(async () => {
  const response = await axios.get("../../src/assets/questions.json");
  questions.value = response.data.questions;
});

const currentQuestion = computed(() => {
  return questions.value ? questions.value[currentQuestionIndex.value] : null;
});

function calculatePersonalityTrait(introvertCount, extrovertCount) {
  return introvertCount > extrovertCount ? "Introvert" : "Extrovert";
}

function nextQuestion() {
  const selected = currentQuestion.value.answers.find(
    (answer) => answer.id === selectedAnswer.value
  );

  if (selected.score === "Introvert") {
    introvertCount.value++;
  } else if (selected.score === "Extrovert") {
    extrovertCount.value++;
  }
  currentQuestionIndex.value++;
  selectedAnswer.value = null;
  if (currentQuestionIndex.value === questions.value.length) {
    personalityTrait.value = calculatePersonalityTrait(
      introvertCount.value,
      extrovertCount.value
    );
  }
}

function resetTest() {
  currentQuestionIndex.value = 0;
  introvertCount.value = 0;
  extrovertCount.value = 0;

  selectedAnswer.value = null;
  personalityTrait.value = "";
}
</script>
<style>
/* Disable button styles */
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
