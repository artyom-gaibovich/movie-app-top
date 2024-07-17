import React from 'react';
import styles from './CommentItem.module.css';
import cn from 'classnames';
import {CommentItemProps} from "./CommentItem.props";

const CommentItem = ({ comment, className, ...props }: CommentItemProps): JSX.Element => {
    const { name, email, body } = comment;
    return (
        <div className={cn(styles.comment, className)} {...props}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <span className={styles.name}>{name}</span>&nbsp;&nbsp;
                    <span className={styles.email}>({email})</span>
                </div>
                <div className={styles.body}>{body}</div>
            </div>
        </div>
    );
};


export default CommentItem;
