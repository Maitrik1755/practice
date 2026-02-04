import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    incrementedBy10: state => {
      state.value += 10
    },
    decrementedBy10: state => {
      state.value -= 10
    },
    setValue0: state => {
      state.value = 0
    }
  }
})

export const { incremented, decremented, incrementedBy10 , decrementedBy10 , setValue0} = counterSlice.actions

export default counterSlice.reducer

