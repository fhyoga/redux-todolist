import React from 'react'
import {VisibilityFilters} from '../action/action'

export const Footer = (props)=>{

    return (
        <div>
            <a onClick={()=>props.onSet(VisibilityFilters.SHOW_ALL)}>all</a>
            <a onClick={()=>props.onSet(VisibilityFilters.SHOW_COMPLETED)}>completed</a>
            <a onClick={()=>props.onSet(VisibilityFilters.SHOW_ACTIVE)}>uncompleted</a>
        </div>
    )
}