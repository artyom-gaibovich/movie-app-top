
export type SortableKeys = "title" | "director" | "genre"; // Добавьте сюда все нужные ключи
export interface IMovieFilter {
    sort : string
    query : string
}