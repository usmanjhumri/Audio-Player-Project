import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    AudioList: [
        {
            name: "first",
            audiolink: "https://redirector.googlevideo.com/videoplayback?expire=1681799868&ei=ZDg-ZOL5A-TbsAK7lJj4Dw&ip=0.0.0.0&id=a29aec81e5490a39&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&gir=yes&clen=3443184&dur=215.196&lmt=1680554544743133&txp=0011224&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIhAM3StIYM_CpXc0_vrLoxe7yD6i6nF4GSpPzcFquCSpjUAiAIYNKBwVeN3leUpPYkSJI25Cn6lSPj72DAfkuU82G7HQ==",
            description: "this is first audio",
            timeuploaded: "set",
            img: "",
        },
        {
            name: "second",
            audiolink: "https://redirector.googlevideo.com/videoplayback?expire=1681799907&ei=izg-ZK3ELMzXxN8P_p2wuAo&ip=0.0.0.0&id=5b5c134f88b08d85&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&gir=yes&clen=4821614&dur=301.348&lmt=1680554786933176&txp=0011224&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRgIhAObZXV9dCeESFgR9yUvv939NdGfIhBiku6TvklJbi0H0AiEAjxavIH8JVURI6FXSNlcCxaZRxH97HHS4SLZeB77FcWo=",
            description: "this is second audio",
            timeuploaded: "second time for audio",
            img: ""
        },
        {
            name: "third",
            audiolink: "https://redirector.googlevideo.com/videoplayback?expire=1681800021&ei=_Tg-ZIToE7e_mLAPuP6cqAg&ip=0.0.0.0&id=1fb8321c919be0c8&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&gir=yes&clen=3889565&dur=243.095&lmt=1680554565481303&txp=0011224&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgGLWlcbax583fPhfBDlmSB3owc4BdpDyK9SRVQUN2bYoCIQCETEkTR0BCCwupUF981X0WlfMzWdx7KfVJohrYIpu-Rg==",
            description: "this is third audio",
            timeuploaded: "third time for audio",
            img: ""
        },
        {
            name: "fourth",
            audiolink: "https://redirector.googlevideo.com/videoplayback?expire=1681800164&ei=jDk-ZP2qJruBp-oP3PmSyAM&ip=0.0.0.0&id=e02ab37aa71555e7&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&gir=yes&clen=2098610&dur=131.160&lmt=1678379210179159&txp=0011224&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRgIhAKQGPZ9KwfcO59v3b1LyiDpaayHTlDBI4cvfTbdMR22wAiEA54YOsYnororFBNcW2WAqTJZ8epSko7v0XdCy0CyQd9o=",
            description: "this is fourth audio",
            timeuploaded: "fourth time for audio",
            img: ""
        },
        {
            name: "fifth",
            audiolink: "https://redirector.googlevideo.com/videoplayback?expire=1681800252&ei=5Dk-ZOvMFLa5mLAPlNue4A4&ip=0.0.0.0&id=8aacbbdcc60cf636&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&gir=yes&clen=2052634&dur=128.287&lmt=1678379236907963&txp=0011224&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIhAPo-y77Ao73mZg22fQf4Uk19BNFNrjreg09HE8M7s_rcAiBnx4j8XzR_ntxrtoJKipr_kWaFU29POpo4Fl-D9tS0nQ==",
            description: "this is fifth audio",
            timeuploaded: "fifth time for audio",
            img: ""
        },
        {
            name: "sixth",
            audiolink: "https://redirector.googlevideo.com/videoplayback?expire=1681800361&ei=UTo-ZOe9HM-Ap-oP0cKskAk&ip=0.0.0.0&id=ccdf14320ffbab25&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&gir=yes&clen=2425036&dur=151.562&lmt=1678379252782219&txp=0011224&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgYxr8UwWw-kGP4N2p5lHs8Lx20z_aBmTHpm-mTmBnmwUCIQDH3JCoyRRtt-VUc5CYBL-IdXxE9IabXu-VtcUgFssa9g==",
            description: "this is sixth audio",
            timeuploaded: "sixth time for audio",
            img: ""
        }
    ],

    currentIndex: 0,
    isActive: false,
    isPlaying: false,
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    }
})