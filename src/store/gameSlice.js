import { createSlice, createSelector } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',

  initialState: {
    currentQuestion: 0,
    completedQuestions: [],
    completedCaterogies: [],
    isAnswered: false,
    isPassedCaterogy: false,
    isQuit: false,
    pathname: '',
  },

  reducers: {
    setCurrentQuestion(state, action) {
      const { type, category } = action.payload;
      state.currentQuestion = type === 'artist' ? (category - 1) * 10 : (category - 1) * 10 + 120;
    },

    setPathname(state, action) {
      state.pathname = action.payload.pathname;
    },

    resetCompletedQuestions(state) {
      state.completedQuestions = [];
    },

    nextQuestion(state) {
      state.currentQuestion += 1;
    },

    addAnswer(state, action) {
      const { completedQuestions } = state;
      state.completedQuestions = [...completedQuestions, action.payload.answer];
    },

    addCategory(state, action) {
      const { completedCaterogies } = state;
      const { type, category, categoryObj } = action.payload;

      const filteredCaterogies = completedCaterogies.filter(item =>
        !(item.type === type && item.category === category)
      )

      state.completedCaterogies = [...filteredCaterogies, categoryObj];
    },

    handleQuestionWindow(state, action) {
      state.isAnswered = action.payload.value;
    },

    handleCategoryWindow(state, action) {
      state.isPassedCaterogy = action.payload.value;
    },

    handleQuitWindow(state, action) {
      state.isQuit = action.payload.value;
    },
  },
});

export const {
  setCurrentQuestion,
  nextQuestion,
  resetCompletedQuestions,
  setPathname,
  addAnswer,
  addCategory,
  handleQuestionWindow,
  handleCategoryWindow,
  handleQuitWindow,
} = gameSlice.actions;

export const selectCaterogiesByType = createSelector(
  [
    (state) => state.game.completedCaterogies,
    (state, type) => type
  ],

  (completedCaterogies, type) => completedCaterogies
    .filter(item => item.type === type)
    .sort((a, b) => a.category - b.category)
)