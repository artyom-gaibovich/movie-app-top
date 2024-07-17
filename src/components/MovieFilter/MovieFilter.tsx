import React from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import {MovieFilterProps} from "./MovieFilter.props";


const MovieFilter = ({filter, setFilter} : MovieFilterProps) => {
    return (
        <div>
            <div>
                <Select defaultValue={'Сортировка'}
                          value={filter.sort}
                          setValue={(sort) => setFilter({...filter, sort : sort})}
                          options={[
                              {value : 'title', name : 'По названию'},
                              {value : 'body', name : 'По описанию'},
                          ]}></Select>
            </div>

            <div style={{margin: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Поиск элементов</h2>
                <Input
                    placeholder={filter.query}
                    onChange={e => setFilter({...filter, query : e.target.value})}
                ></Input>
            </div>
        </div>
    );
};

export default MovieFilter;