import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {IMovie} from "../../interfaces/movie.interface";
import {IComment} from "../../interfaces/comment.interface";

export interface CommentItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children? : ReactNode;
    comment: IComment;
}