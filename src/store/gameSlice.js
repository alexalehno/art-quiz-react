import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk(
  'game/fetchData',

  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://raw.githubusercontent.com/alexalehno/image-data/master/data.json');

      if (!response.ok) {
        throw new Error('Server error!');
      }

      const data = await response.json();

      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const gameSlice = createSlice({
  name: 'game',

  initialState: {
    data: [],
    status: null,
    error: null,
    answeredQuestionsInCategory: [],
    passedCaterogies: [],
    rightNumInCategory: null,
    totalNumInCategory: null,
    type: null,
    category: null,
    options: [],
    currentQuestion: 0,
    lastQuestion: null,
    isRight: null,
    pathname: '',
    isPassedCaterogy: false,
    isAnswered: false,
    isQuit: false,

    settings: {
      volume: 0,
      isTimeGame: false,
      timeToAnswer: 5,
    },

    defaultSettings: {
      volume: 0,
      isTimeGame: false,
      timeToAnswer: 5,
    },
    
    timeout: 5,
  },

  reducers: {
    setTime(state, action) {
      state.timeout = action.payload.timeout;
    },

    saveSettings(state, action) {
      state.settings = { ...action.payload };
    },

    getLocalStorage(state, action) {
      let path = localStorage.getItem('pathname');
      let cats = localStorage.getItem('categories');
      let settings = localStorage.getItem('settings');

      if (cats) {
        state.passedCaterogies = JSON.parse(localStorage.getItem('categories'));
      }

      if (path) {
        state.pathname = path;
      }

      if (settings) {
        state.settings = JSON.parse(localStorage.getItem('settings'));
      }
    },

    setLocalStorage(state, action) {
      localStorage.setItem('pathname', state.pathname);
      localStorage.setItem('categories', JSON.stringify(state.passedCaterogies));
      localStorage.setItem('settings', JSON.stringify(state.settings));
    },

    setOptions(state, action) {
      state.options = action.payload.options;
    },

    setCurrentQuestion(state, action) {
      let { category, type } = action.payload;

      if (category === '0') {
        category = 1;
      }

      state.type = type;
      state.category = Number(category);
      state.currentQuestion = type === 'artist' ? (category - 1) * 10 : (category - 1) * 10 + 120;
      state.lastQuestion = state.currentQuestion + 9;
    },

    resetCategoryInfo(state, action) {
      state.rightNumInCategory = null;
      state.totalNumInCategory = null;
      state.answeredQuestionsInCategory = [];
    },

    setPathname(state, action) {
      state.pathname = action.payload.pathname;
    },

    setAnswer(state, action) {
      state.isRight = action.payload.isRight;
    },

    addQuestion(state, action) {
      const { data, currentQuestion, answeredQuestionsInCategory, isRight } = state;

      const answeredQuestion = {
        ...data[currentQuestion],
        isRight,
      }

      state.answeredQuestionsInCategory = [...answeredQuestionsInCategory, answeredQuestion];
    },

    nextQuestion(state, action) {
      state.currentQuestion += 1;
    },

    getResultCategory(state, action) {
      const { answeredQuestionsInCategory } = state;

      state.rightNumInCategory = answeredQuestionsInCategory.filter(el => el.isRight).length;
      state.totalNumInCategory = answeredQuestionsInCategory.length;
    },

    addCategory(state, action) {
      const { type, category, rightNumInCategory, totalNumInCategory, answeredQuestionsInCategory, passedCaterogies } = state;

      const filteredCaterogies = passedCaterogies.filter(item =>
        (item.type !== type && item.category !== category)
        || (item.type !== type && item.category === category)
        || (item.type === type && item.category !== category)
      )

      const passedCaterogy = {
        type: type,
        category: category,
        right: rightNumInCategory,
        total: totalNumInCategory,
        questions: [...answeredQuestionsInCategory],
      }

      state.passedCaterogies = [...filteredCaterogies, passedCaterogy];
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

  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },

    [fetchData.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    },

    [fetchData.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});


export const {
  setCurrentQuestion,
  setAnswer,
  nextQuestion,
  resetCategoryInfo,
  setPathname,
  addQuestion,
  getResultCategory,
  addCategory,
  handleQuestionWindow,
  handleCategoryWindow,
  handleQuitWindow,
  setOptions,
  getLocalStorage,
  setLocalStorage,
  setTime,
  saveSettings
} = gameSlice.actions;
