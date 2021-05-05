import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import { dbService, storageService } from "../fbase";
import "./Nweet.scss";
import ImageZoom from "./ImageZoom";
import Modal from "../utils/Modal";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const [showImageZoom, setShowImageZoom] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const onDeleteClick = async () => {
        // delete nweet
        await dbService.doc(`nweets/${nweetObj.id}`).delete();
        await storageService.refFromURL(nweetObj.attachmentURL).delete();
    };

    const toggleEditing = () => setEditing((prev) => !prev);

    const onSubmit = async (e) => {
        e.preventDefault();

        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });

        setEditing(false);
    };

    const onChange = (e) => {
        const {
            target: { value },
        } = e;

        setNewNweet(value);
    };

    const onZoom = () => {
        setShowImageZoom(true);
    };

    const onClose = () => {
        setShowImageZoom(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="nweet">
            {editing ? (
                <>
                    <form onSubmit={onSubmit} className="container nweetEdit">
                        <input
                            type="text"
                            placeholder="Edit your nweet"
                            value={newNweet}
                            required
                            autoFocus
                            onChange={onChange}
                            className="formInput"
                        />
                        <input
                            type="submit"
                            value="Update Nweet"
                            className="formBtn"
                        />
                    </form>
                    <span onClick={toggleEditing} className="formBtn cancelBtn">
                        Cancel
                    </span>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentURL && (
                        <>
                            <img
                                className="img"
                                onClick={onZoom}
                                src={nweetObj.attachmentURL}
                                alt={nweetObj.attachmentURL}
                            />
                            {showImageZoom && (
                                <ImageZoom
                                    image={nweetObj.attachmentURL}
                                    onClose={onClose}
                                />
                            )}
                        </>
                    )}
                    {isOwner && (
                        <div className="nweet__actions">
                            <span onClick={openModal}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <Modal
                                open={modalOpen}
                                ok={onDeleteClick}
                                close={closeModal}
                                header="Nweet Delete"
                            >
                                정말 삭제하시겠습니까?
                            </Modal>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Nweet;
