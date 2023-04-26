import { createSlice } from '@reduxjs/toolkit'
import AudioArray from '../../components/Audio/AudioArray'

const initialState = {
    value: AudioArray,

    currentTrack: 0,
    isPlaying: false

}

const AudioSlice = createSlice({
    name: "AudioSlice",
    initialState,
    reducers: {
        changeMusic: (state, action) => {
            state.value = action.payload``
        },
        nextItem(state) {

            state.currentTrack = (state.currentTrack + 1) % state.value.length;
            console.log('state.currentTrack', state.currentTrack)
            state.isPlaying = true;
        },

        prevItem(state) {
            state.currentTrack = state.currentTrack === 0 ? state.value.length - 1 : state.currentTrack - 1;
            state.isPlaying = true;
        },
        setCurrentItem: (state, action) => {
            state.currentTrack = action.payload
            state.isPlaying = true
        },
        setIsplaying: (state, action) => {
            state.isPlaying = action.payload
        }
    }
})

export const { changeMusic, nextItem, prevItem, setCurrentItem, setIsplaying } = AudioSlice.actions
export default AudioSlice.reducer

// className={`${!isNext() && 'cursor-disabled'}`}
