import React, { useState } from 'react'
import ChevronDown from '../../assets/SVGR/ChevronDown'
import ChevronUp from '../../assets/SVGR/ChevronUp'
import OpenLink from '../../assets/SVGR/OpenLink'

const SubjectDetails = (props) => {
    const [isActive, setIsActive] = useState('true')
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
                            props.student.subject.name?
                            props.student.subject.name : "n/a"
                        </p>
                        <p className="dtl-title">Tier</p>
                        <p className="dtl-content">
                            {' '}
                            props.student.subject.tier?
                            props.student.subject.tier : "n/a"
                        </p>
                        <p className="dtl-title">Current grade</p>
                        <p className="dtl-content">
                            props.student.subject.grade.current?
                            props.student.subject.grade.current : "n/a"
                        </p>
                        <p className="dtl-title">Target grade</p>
                        <p className="dtl-content">
                            props.student.subject.grade.target?
                            props.student.subject.grade.target : "n/a"
                        </p>
                        <p className="dtl-title">Exam board</p>
                        <a
                            className="dtl-content text-link"
                            href="https://qualifications.pearson.com/en/home.html"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>
                                props.student.subject.examBoard? props.student.subject.examBoard
                                : "n/a"
                            </p>
                            {/*props.student.subject.examBoard?*/} <OpenLink /> {/*: null*/}
                        </a>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default SubjectDetails
