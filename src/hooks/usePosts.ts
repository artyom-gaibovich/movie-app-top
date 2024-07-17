import {useMemo} from "react";


console.log()
/*
export const useSortedPosts = (Movies.tsx, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...Movies.tsx.sort((a,b) => a[sort].localeCompare(b[sort]))]
        }
        return Movies.tsx
    }, [sort, Movies.tsx])
    return sortedPosts
}

export const usePosts = (Movies.tsx, sort, query) => {
    const sortedPosts = useSortedPosts(Movies.tsx, sort)

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()  ))
    }, [query, sortedPosts])

    return sortedAndSearchPosts
}*/
