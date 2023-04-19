import { configureStore } from '@reduxjs/toolkit'
import AudioSlice from '../AudioSlice/AudioSlice'
const store = configureStore({
    reducer: { AudioSlice: AudioSlice }
})
export default store