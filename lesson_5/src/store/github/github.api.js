import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// 1. Создание API
export const githubApi = createApi({
    reducerPath: 'github/api', // КЭШ
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query({      // Любое название запроса query() - запросить, mutation() - обновить
            query: () => ({     // ПАРАМЕТРЫ. Подставляется к базовому URL
                url: 'search/users',    // url - подставляется к запросу
                body: {test: 'test'}        
            })    
        })        
    })
})

export const {useSearchUsersQuery} = githubApi  // Генерация хука