import React, { useState, useEffect } from 'react';
import AsyncSelect, { AriaOnFocus } from 'react-select/async';
import { getAllSubjects } from '../../services/tutorAppService';
import Pill from '../Buttons/Pill';

const SignupForm = () => {
    const [subjects, setSubjects] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [loadOptions, setLoadOptions] = useState([]);
    const [ariaFocusMessage, setAriaFocusMessage] = useState('');

    // const loadOptions = (
    //     inputValue: string,
    //     callback: (options: ColourOption[]) => void
    // ) => {
    //     setTimeout(() => {
    //         callback(filterColors(inputValue));
    //     }, 1000);
    // };

    useEffect(() => {
        async function getSubjects() {
            if (subjects.length === 0 || !subjects) {
                const response = await getAllSubjects();
                setSubjects(response);
            }
        }

        getSubjects();
    }, [subjects]);

    // const onFocus: AriaOnFocus<ColourOption> = ({ focused, isDisabled }) => {
    //     const msg = `You are currently focused on option ${focused.label}${
    //         isDisabled ? ', disabled' : ''
    //     }`;
    //     setAriaFocusMessage(msg);
    //     return msg;
    // };

    const options = subjects.map((subject) => ({
        label: subject.name,
        value: subject._id,
    }));

    const filterOption = (term) => {
        if (options && options.length > 0) {
            return (options
                .map((option) => (option.label.toLowerCase()))
                .filter((option) =>
                    option.includes(term.toLowerCase())
                )
            )
        }
    };


    const onChange = (e) => {
        if (options.length > 0) {
            setSelectedOptions(e.map((e) => e.label));
        }
    };

    const subjectPills = subjects
        .filter((subject) => selectedOptions.includes(subject.name))
        .map((subject) =>
            subject.level.map((level, index) => {
                return <Pill key={`${subject.name} ${index}`} name={level} />;
            })
        );

    const whatLevel = selectedOptions.map((selectedOption, index) => {
        return (
            <div key={index} className="pill-qtn">
                <div className="level-qtn">
                    <p>What level would you like to tutor </p>
                    <span>{selectedOption}</span>
                    <p> in?</p>
                </div>
                <div className="pills">
                    {subjectPills.filter((subjectPill) =>
                        subjectPill[0].key.includes(selectedOption)
                    )}
                </div>
            </div>
        );
    });
    return (
        <form id="signup-extra" >
            <label htmlFor="subject-select">
                What subjects would you like to tutor in? *
            </label>
            <AsyncSelect
                defaultOptions
                // closeMenuOnSelect="false"
                // ariaLiveMessages={{
                //     onFocus,
                // }}
                // getOptionValue={(option) => `${option['id']}`}
                // defaultValue={inputValue}
                // filterOption={filterOption(inputValue)}
                id="subject-select"
                cacheOptions
                isMulti
                isClearable
                isSearchable="true"
                onInputChange={setInputValue}
                onChange={onChange}
            />
            {selectedOptions.length > 0 ? whatLevel : null}
        </form>
    );
};

export default SignupForm;
