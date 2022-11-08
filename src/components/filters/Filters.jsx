import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveFilter } from '../../features/filters/filtersSlice'
import filtersStyles from './filters.module.css'

const Filters = () => {

    const dispatch = useDispatch()
    const { filteredByQuery, filters } = useSelector(store => store.filters)

  return (
    <div>
        {
            filters.map((item, id) => {
                return <button key={id} style={{backgroundColor: filteredByQuery === item && 'rgb(255, 207, 189)'}} className={filtersStyles.button} onClick={() => dispatch(changeActiveFilter(item))}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
            })
        }
    </div>
  )
}

export default Filters