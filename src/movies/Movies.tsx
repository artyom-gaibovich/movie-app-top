import React, {useState} from 'react';

const Movies = ({...props}: Record<string, any>)   : JSX.Element => {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort : '', query : ''})
    const [isModal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const lastElement= useRef()
    const [fetchPosts, isPostsLoading, errorPosts ] = useFetching(async () => {
        const response = await PostService.getAll(limit,page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })
    useEffect(() => {
        fetchPosts()
    }, [page, limit]);

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    function removePost(post)  {
        setPosts(posts.filter(p => p.id !== post.id ))
    }

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Создать</MyButton>
            <MyModal visible={isModal} setVisible={setModal}>
                <PostForm createPost={createPost}></PostForm>
            </MyModal>
            <hr style={{margin : '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}>

            </PostFilter>
            <MySelect value={limit}
                      defaultValue="Количество фильмов на странице"
                      options={[
                          {value : 5, name :'5'},
                          {value : 10, name :'10'},
                          {value : 20, name :'20'},
                          {value : -1, name : 'Показать всё'}
                      ]}
                      onChange={value => setLimit(value)
                      }></MySelect>
            {errorPosts && <h1>{errorPosts}</h1>}
            {isPostsLoading && <h1>Идет загрузка фильмов...</h1>}

            <PostList remove={removePost}
                      posts={sortedAndSearchPosts}
                      title={'Список фильмов'}>
            </PostList>
            <div ref={lastElement}
                 style={{height : '20px', background: "black"}}></div>
            <Pagination page={page} changePage={changePage} totalPages={totalPages}></Pagination>
        </div>
    );
};

export default Movies;