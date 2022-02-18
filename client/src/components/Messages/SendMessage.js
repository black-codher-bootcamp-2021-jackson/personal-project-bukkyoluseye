import React, {useState} from "react"
import Attach from "../../assets/SVGR/Attach";
import Images from "../../assets/SVGR/Images";
import PaperPlane from "../../assets/SVGR/PaperPlane"

const SendMessage = () => {
    const [value, setValue] = useState('')
    return (
        <div className="send-message">
            <div className="send-message-input-div">
                <input
                    className="send-message-input"
                    placeholder="Send a message"
                    onChange={(e) => setValue(e.target.value)}
                    // defaultValue={props.value ? props.value : ''}
                ></input>
                <PaperPlane
                    className={
                        value.length === 0
                            ? 'inactive-send send-icon'
                            : 'active-send send-icon'
                    }
                />
            </div>
            <div className="send-extra-icons">
                <Images />
                <Attach />
            </div>
        </div>
    );
}

export default SendMessage