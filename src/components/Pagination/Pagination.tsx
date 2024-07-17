import React from 'react';
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div>
            <div style={{marginTop: "20px", display: "flex", justifyContent : "center"}}>
                {pagesArray.map(page => {
                    return <MyButton key={page} onClick={() => changePage(page)}>{page}</MyButton>
                })}
            </div>
        </div>
    );
};

export default Pagination;