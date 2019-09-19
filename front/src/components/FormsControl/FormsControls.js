import React from 'react'
import styles from './FormsContols.module.css'

export const MyInput = ({input, meta, ...props}) =>{

    const hasError = meta.touched && meta.error

    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input}{...props} type={'number'}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const MyInputText = ({input, meta, ...props}) =>{

    const hasError = meta.touched && meta.error

    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input}{...props} type={'text'}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}