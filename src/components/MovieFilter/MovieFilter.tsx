import React from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import {MovieFilterProps} from "./MovieFilter.props";
import {SortableKeys} from "../../interfaces/movie-filter.interface";


const MovieFilter = ({filter, setFilter} : MovieFilterProps) => {
    return (
        <div>
            <div>
                <Select defaultValue={'Сортировка'}
                          value={filter.sort}
                          setValue={(sort: SortableKeys) => setFilter({...filter, sort : sort})}
                          options={[
                              {value : 'title', name : 'По названию'},
                              {value : 'director', name : 'По режиссеру'},
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