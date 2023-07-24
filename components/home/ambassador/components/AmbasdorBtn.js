import { useState } from "react";
import { Input, Button } from '@catena-network/catena-ui-module';

import styles from "../css/AmbasdorBtn.module.css";

const AmbasdorBtn = () => {
    const [chng, setChng] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        suggestion: ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        console.log(formData);
        setChng(false);
    }

    return (
        <div className={`${styles.btn} container `}>
            <div className={`${styles.chnBox} ${chng ? styles.active : ""}`}>
                <form >
                    <div>
                        <Input
                            className={styles.llll}
                            type={'default'}
                            icon={false}
                            label={'EMAIL'}
                            subLabel={''}
                            placeholder={'Enter'}
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            customStyles={{ width: '500px' }}
                        />
                    </div>
                    <div>
                        <Input
                            type={'default'}
                            icon={false}
                            label={'Name'}
                            subLabel={''}
                            placeholder={'Enter'}
                            name="name"
                            value={formData.name}
                            onChange={changeHandler}
                            customStyles={{ width: '500px' }}
                        />
                    </div>
                    <div>
                        <Input
                            type={'textarea'}
                            label={'Make a suggestion'}
                            name="suggestion"
                            value={formData.suggestion}
                            onChange={changeHandler}
                            rows={10}
                            cols={20}
                            placeholder={'Please describe your feedback in detail with corresponding screenshots'}
                            resize={'both'}
                        />
                        <label>Limit: 1000 characters</label>
                    </div>
                    <div>
                        <Button
                            label={'Submit'}
                            size={'btn-lg'}
                            type={'btn-primary'}
                            arrow={'arrow-right'}
                            element={'button'}
                            disabled={false}
                            onClick={handleSubmit}
                            className={styles.btnBlu}
                        />
                    </div>
                </form>
            </div>
            {!chng &&
                <Button
                    label={'Apply Now'}
                    size={'btn-lg'}
                    type={'btn-primary'}
                    arrow={'arrow-right'}
                    element={'button'}
                    disabled={false}
                    onClick={() => setChng(true)}
                    className={styles.btnBlu}
                />
            }
        </div>
    );
};

export default AmbasdorBtn;
