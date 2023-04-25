import { createSlice } from '@reduxjs/toolkit'
import AudioArray from '../../components/Audio/AudioArray'

const initialState = {
    value: AudioArray,


}

const AudioList = createSlice({
    name: "AudioList",
    initialState,
    reducers: {
        changeList: (state, action) => {
            state.value = action.payload
        },

    }
})

export const { changeList } = AudioList.actions
export default AudioList.reducer