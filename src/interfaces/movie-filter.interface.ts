
export type SortableKeys = "title" | "director" | "rating"; // Добавьте сюда все нужные ключи
export interface IMovieFilter {
    sort : SortableKeys
    query :string
}