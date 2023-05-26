import React from 'react'
import { Input } from '@catena-network/catena-ui-module'
import { Button } from '@catena-network/catena-ui-module'

const VoiceMatter = (props) => {
    const { title, description } = props
    const changeHandler = (i, e) => {
        console.log(i.target.value);
    };

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M46.118 57.0642C50.1498 57.0645 54.1045 55.9611 57.5524 53.874C61.0004 51.7868 63.8097 48.7957 65.675 45.2256C67.5404 41.6556 68.3905 37.6431 68.1329 33.6244C67.8752 29.6056 66.5198 25.7342 64.2139 22.4309C61.9079 19.1276 58.7397 16.5188 55.0534 14.8878C51.3671 13.2569 47.3038 12.6663 43.305 13.1801C39.3062 13.694 35.5249 15.2927 32.372 17.8026C29.2191 20.3124 26.8152 23.6373 25.4215 27.4161C26.699 27.7919 27.8606 28.4843 28.7983 29.4289C31.8483 31.1153 36.5323 32.3665 41.0528 29.7553C41.9349 28.7641 43.0515 28.0094 44.3006 27.5599C45.5497 27.1103 46.8916 26.9804 48.2039 27.1819C49.5162 27.3833 50.7572 27.9098 51.8135 28.7132C52.8698 29.5167 53.7079 30.5715 54.2513 31.7815C54.7947 32.9915 55.0261 34.3181 54.9244 35.6404C54.8227 36.9626 54.3912 38.2384 53.6691 39.3513C52.9471 40.4642 51.9575 41.3789 50.7908 42.0117C49.624 42.6446 48.3172 42.9756 46.9894 42.9745C45.2652 42.967 43.5875 42.4148 42.1966 41.3969C39.0921 39.8737 33.5367 38.4593 28.0903 41.2881C27.2978 41.9106 26.3912 42.3726 25.4215 42.6481C26.9811 46.8768 29.8015 50.526 33.5023 53.1038C37.203 55.6816 41.6062 57.0638 46.118 57.0642Z" fill="#FF6969" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7564 27.4705C42.9663 22.6169 39.5236 18.5472 35.0313 15.9741C30.539 13.4009 25.2836 12.4885 20.1855 13.3966C15.0874 14.3047 10.4717 16.9755 7.14682 20.941C3.82198 24.9066 2 29.9141 2 35.0865C2 40.2589 3.82198 45.2665 7.14682 49.232C10.4717 53.1976 15.0874 55.8683 20.1855 56.7764C25.2836 57.6845 30.539 56.7721 35.0313 54.199C39.5236 51.6259 42.9663 47.5561 44.7564 42.7025C43.828 42.4334 42.9593 41.9903 42.1966 41.3969C39.0921 39.8737 33.5367 38.4593 28.0903 41.2881C26.6984 42.3952 24.9677 42.9907 23.1885 42.9745C22.1442 42.9745 21.1102 42.7691 20.1455 42.37C19.1807 41.9708 18.3041 41.3858 17.5657 40.6483C16.8273 39.9107 16.2416 39.0352 15.842 38.0715C15.4423 37.1079 15.2367 36.0751 15.2367 35.0321C15.2367 33.9891 15.4423 32.9563 15.842 31.9927C16.2416 31.0291 16.8273 30.1535 17.5657 29.416C18.3041 28.6784 19.1807 28.0934 20.1455 27.6943C21.1102 27.2951 22.1442 27.0897 23.1885 27.0897C24.2329 27.0831 25.268 27.2868 26.2319 27.6887C27.1957 28.0906 28.0686 28.6825 28.7983 29.4289C31.8483 31.1153 36.5323 32.3665 41.0528 29.7553C42.0528 28.6671 43.3346 27.8763 44.7564 27.4705Z" fill="#18FFFF" />
                    </svg>
            <span>{title}</span>
            <div className='content_description'>{description}</div>
            <div>
                <Input
                    type={"default"}
                    icon={false}
                    label={"EMAIL"}
                    subLabel={""}
                    placeholder={"Enter"}
                    // value={""} 
                    onChange={changeHandler}
                    customStyles={{ width: "500px" }}
                />
            </div>
            <div>
                <Input
                    type={"default"}
                    icon={false}
                    label={"Name"}
                    subLabel={""}
                    placeholder={"Enter"}
                    // value={""} 
                    onChange={changeHandler}
                    customStyles={{ width: "500px" }}
                />
            </div>

            <div>
                <Input
                    type={"textarea"}
                    label={"Make a suggestion"}
                    // onChange={(e) => console.log(e.target.value)}
                    // value={'sad'}
                    // readOnly={true}
                    name={"textarea input"}
                    rows={10}
                    cols={20}
                    // disabled={true}
                    placeholder={"Please describe your feedback in detail with corresponding screenshots"}
                    // autoFocus={true}
                    // emptyFieldErr={true}
                    resize={"both"}
                />
                <label>Limit: 1000 characters</label>
            </div>
            <div>
                <Button
                    label={"Button"}
                    size={"btn-lg"}
                    type={"btn-primary"}
                    arrow={"arrow-right"}
                    element={"button"}
                    disabled={true}
                    onClick={() => setToggle((prevState) => !prevState)}
                />
            </div>
        </div>
    )
}

export default VoiceMatter
