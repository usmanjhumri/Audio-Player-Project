import { createSlice } from '@reduxjs/toolkit'
import AudioArray from '../../components/Audio/AudioArray'

const initialState = {
    value: AudioArray,

    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeAudio: {},
}

const AudioSlice = createSlice({
    name: "AudioSlice",
    initialState,
    reducers: {
        changeMusic: (state, action) => {
            state.value = action.payload
        },
        changeList: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeMusic, changeList } = AudioSlice.actions
export default AudioSlice.reducer