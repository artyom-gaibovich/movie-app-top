
export type SortableKeys = "title" | "director"; // Добавьте сюда все нужные ключи
export interface IMovieFilter {
    sort : SortableKeys
    query :string
}