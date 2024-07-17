import React from 'react';
import {PaginationProps} from "./Pagination.props";
import {getPagesArray} from "../../utils/getPageCount";
import Button from "../Button/Button";

const Pagination = ({totalPages, page, changePage} : PaginationProps) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div>
            <div style={{marginTop: "20px", display: "flex", justifyContent : "center"}}>
                {pagesArray.map((page: number) => {
                    return <Button key={page} onClick={() => changePage(page)}>{page}</Button>
                })}
            </div>
        </div>
    );
};

export default Pagination;