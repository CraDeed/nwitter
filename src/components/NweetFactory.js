import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import { dbService, storageService } from "../fbase";
import "./NweetFactory.scss";

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");

    const onSubmit = async (e) => {
        if (nweet === "") {
            return;
        }
        e.preventDefault();
        let attachmentURL = "";
        if (attachment !== "") {
            const attachmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuidv4()}`);

            const response = await attachmentRef.putString(
                attachment,
                "data_url"
            );
            attachmentURL = await response.ref.getDownloadURL();
        }

        const nweetObj = {
            text: nweet,
            createAt: Date.now(),
            creatorId: userObj.uid,
            attachmentURL,
        };

        await dbService.collection("nweets").add(nweetObj);
        setNweet("");
        setAttachment("");
    };

    const onChange = (e) => {
        const {
            target: { value },
        } = e;

        setNweet(value);
    };

    const onFileChange = (e) => {
        const {
            target: { files },
        } = e;

        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };

    const onClearAttachment = () => {
        setAttachment("");
    };

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input
                    className="factoryInput__input"
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input
                    type="submit"
                    value="&rarr;"
                    className="factoryInput__arrow"
                />
            </div>
            <label htmlFor="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
            </label>
            <input
                id="attach-file"
                type="file"
                accept="image/*"
                onChange={onFileChange}
                style={{
                    opacity: 0,
                }}
            />

            {attachment && (
                <div className="factoryForm__attachment">
                    <img
                        src={attachment}
                        style={{
                            backgroundImage: attachment,
                        }}
                        alt={attachment}
                    />
                    <div
                        className="factoryForm__clear"
                        onClick={onClearAttachment}
                    >
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            )}
        </form>
    );
};

export default NweetFactory;
