import {configureStore} from '@reduxjs/toolkit'
import { githubApi } from './github/github.api'


// 2. Регистрация API
export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer
    }
})

