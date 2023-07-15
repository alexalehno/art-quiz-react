import { createSlice } from '@reduxjs/toolkit';


export const gameSlice = createSlice({
  name: 'game',

  initialState: {
    type: '',
    category: 1,
    currentQuestion: 0,
    lastQuestion: null,
    completedQuestions: [],
    completedCaterogies: [],
    isAnswered: false,
    isPassedCaterogy: false,
    isQuit: false,
    pathname: '',
  },

  reducers: {
    setCurrentQuestion(state, action) {
      const { category, type } = action.payload;

      state.type = type;
      state.category = category;
      state.currentQuestion = type === 'artist' ? (category - 1) * 10 : (category - 1) * 10 + 120;
      state.lastQuestion = state.currentQuestion + 9;
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
      const { type, category, completedCaterogies } = state;

      const filteredCaterogies = completedCaterogies.filter(item =>
        !(item.type === type && item.category === category)
      )

      state.completedCaterogies = [...filteredCaterogies, action.payload.category];
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
