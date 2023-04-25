import { createSlice } from '@reduxjs/toolkit'
import AudioArray from '../../components/Audio/AudioArray'

const initialState = {
    value: AudioArray,

    currentSong: null,
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
        },
        forwardItem: (state, action) => {
            const currentIndex = initialState.value.findIndex(
                (song) => song === action.payload
            );

            if (currentIndex === -1) {
                return;
            }


            const nextIndex = (currentIndex + 1) % initialState.value.length;

            state.currentSong = state.value[nextIndex];
        },
        backwordItem: (state, action) => {
            const currentIndex = initialState.value.findIndex(
                (song) => song === action.payload
            );

            if (currentIndex === -1) {
                return;
            }


            const previousInd = (currentIndex - 1) % initialState.value.length;

            state.currentSong = state.value[previousInd];
        },
    }
})

export const { changeMusic, changeList, forwardItem, backwordItem } = AudioSlice.actions
export default AudioSlice.reducer