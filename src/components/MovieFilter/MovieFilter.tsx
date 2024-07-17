import React from "react";
import Select from "../Select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <div>
                <Select defaultValue={'Сортировка'}
                          value={filter.sort}
                          onChange={(sort) => setFilter({...filter, sort : sort})}
           aw               options={[
                              {value : 'title', name : 'По названию'},
                              {value : 'body', name : 'По описанию'},
                          ]}></Select>
            </div>

            <div style={{margin: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Поиск элементов</h2>
                <MyInpput
                    placeholder={filter.query}
                    onChange={e => setFilter({...filter, query : e.target.value})}
                ></MyInpput>
            </div>
        </div>
    );
};