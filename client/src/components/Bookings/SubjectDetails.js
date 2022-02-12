import React, { useState } from 'react';
import ChevronDown from '../../assets/SVGR/ChevronDown';
import ChevronUp from '../../assets/SVGR/ChevronUp';
import OpenLink from '../../assets/SVGR/OpenLink';
import TextLink from '../Buttons/TextLink';

const SubjectDetails = (props) => {
    const [isActive, setIsActive] = useState('true');
    return (
        <>
            <div className="accordion-item">
                <div
                    className="subject-dtls-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <h5>Subject Details</h5>

                    {isActive ? <ChevronDown /> : <ChevronUp />}
                </div>
                {isActive ? (
                    <div className="subject-dtls">
                        <p className="dtl-title">Subject</p>
                        <p className="dtl-content">
                            {props.student.subject
                                ? props.student.subject
                                : 'n/a'}
                        </p>
                        <p className="dtl-title">Tier</p>
                        <p className="dtl-content">
                            {props.student.tier ? props.student.tier : 'n/a'}
                        </p>
                        <p className="dtl-title">Current grade</p>
                        <p className="dtl-content">
                            {props.student.grade.current
                                ? props.student.grade.current
                                : 'n/a'}
                        </p>
                        <p className="dtl-title">Target grade</p>
                        <p className="dtl-content">
                            {props.student.grade.target
                                ? props.student.grade.target
                                : 'n/a'}
                        </p>
                        <p className="dtl-title">Exam board</p>
                        <TextLink
                            className="dtl-content"
                            href="https://qualifications.pearson.com/en/home.html"
                            text={
                                props.student.examBoard
                                    ? props.student.examBoard
                                    : 'n/a'
                            }
                            icon={<OpenLink />}
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default SubjectDetails;
