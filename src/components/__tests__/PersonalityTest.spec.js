import { describe, it, expect } from 'vitest';
import { mount} from '@vue/test-utils'
import PersonalityTest from '../PersonalityTestComponet.vue'

// Importing the components required by PersonalityTest.vue
import Result from '../ResultComponent.vue'
import Question from '../ResultComponent.vue'


describe('PersonalityTest', () => {
  it('loads questions on mount', async () => {
    const wrapper = mount(PersonalityTest)

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.questions).toEqual(null)
  })

  it('displays the question if there are questions left', async () => {
    const questions = [
      {
        id: 1,
        question: 'Are you an introvert or an extrovert?',
        answers: [
          { id: 1, answer: 'Introvert', score: 'Introvert' },
          { id: 2, answer: 'Extrovert', score: 'Extrovert' }
        ]
      }
    ]
    const wrapper = mount(PersonalityTest, {
      data() {
        return { questions }
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Question).exists()).toBe(true)
  })

  it('displays the result if there are no questions left', async () => {
    const personalityTrait = 'Introvert'
    const wrapper = mount(PersonalityTest, {
      data() {
        return { personalityTrait }
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Result).exists()).toBe(true)
  })

  it("resets the test when reset button is clicked", async () => {
    const wrapper = mount(PersonalityTest);
    await wrapper.vm.$nextTick();
    await wrapper.findComponent(Question).vm.$emit("selectAnswer", 1);
    await wrapper.findComponent(Question).vm.$emit("nextQuestion");
    await wrapper.vm.$nextTick();
  
    await wrapper.findComponent(Result).vm.$emit("resetTest");
    await wrapper.vm.$nextTick();
  
    expect(wrapper.vm.currentQuestionIndex).toBe(0);
  });
})
