import React from 'react';
import AlertCircleOutline from '../assets/SVGR/AlertCircleOutline';
import Button from './Buttons/Button';
import CloseButton from './Buttons/CloseButton';

const ConfirmModal = (props) => {
    const day = {
        dateStyle: 'short',
        timeStyle: 'short',
    };
    
    return (
        <>
            {props.cancelShow ? (
                <div className="cancel-modal-background">
                    <div className="cancel-modal">
                        <CloseButton onClick={props.onClose} />
                        <div className='cancel-modal-content'>
                            <div className="cancel-modal-title">
                                <AlertCircleOutline className="cancel-warning" />
                                <h4>Cancel Lesson</h4>
                            </div>
                            <p role="paragraph">
                                Are you sure you want to cancel your lesson with
                                <span>
                                    {` ${props.booking.studentId.name.first} `}
                                </span>
                                on{' '}
                                <span>
                                    {` ${new Date(
                                        props.booking.date
                                    ).toLocaleString('en-GB', day)}`}
                                </span>
                                ? <br />
                                This action cannot be reversed.
                            </p>
                        </div>
                        <hr />
                        <div className="modal-btns">
                            <Button
                                label="Close"
                                variant="secondary"
                                onClick={props.onClose}
                            />
                            <Button
                                label="Cancel Lesson"
                                variant="error-primary"
                                onClick={props.cancelLesson}
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default ConfirmModal;
