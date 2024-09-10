import React from 'react'

interface InputProps {
    Class?: string,
    Id?: string,
    Label?: string,
    Placeholder? : string,
}

const Input: React.FC<InputProps> = (props: InputProps) => {
    let className = `${props.Class != null ? props.Class : ""} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;
    return (
        <>
            <div>
                {props.Label && (
                    <label htmlFor={props.Id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.Label}</label>
                )}
                <input type="text" id={props.Id} className={className} placeholder={props.Placeholder} required />
            </div>
        </>
    )
}

export default Input;
