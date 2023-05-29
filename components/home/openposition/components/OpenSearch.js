import React from 'react'
import { Button } from '@catena-network/catena-ui-module'
import Feature from '../../careers/components/feature/Feature'

const OpenSearch = ({ title, department, location, }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className='open-positions__filter-container'>
                <div className='open-positions__filter'>
                    <div className='open-positions__filter-ttl'>{department}</div>
                    <div className='open-positions__select-ttl'>
                        <Button
                            label={"User Account"}
                            element={"side-button"}
                            customStyles={{ width: "340px" }}

                        />
                    </div>
                </div>
                <div className='open-positions__filter'>
                    <div className='open-positions__filter-ttl'>{location}</div>
                    <Button
                        label={"Hihi"}
                        size={"btn-lg"}
                        type={"btn-primary"}
                        arrow={"arrow-none"}
                        element={"button"}
                        onClick={() => console.log("hi")}
                        customStyles={{ margin: "0" }}
                    />
                </div>
                <div className='open-positions__filter-clear'>
                    Clear filter
                </div>
            </div>
        </div>
    )
}

export default OpenSearch
