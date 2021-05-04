import React, { useEffect, useState } from "react";
import { authService, dbService } from "../fbase";
import { useHistory } from "react-router-dom";
import "./Profile.scss";

const Profile = ({ refreshUser, userObj }) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const history = useHistory();

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    // const getMyNweets = async () => {
    //     const nweets = await dbService
    //         .collection("nweets")
    //         .where("creatorId", "==", userObj.uid)
    //         .orderBy("createAt")
    //         .get();

    //     console.log(nweets.docs.map((doc) => doc.data()));
    // };

    // useEffect(() => {
    //     getMyNweets();
    // }, []);

    const onChange = (e) => {
        const {
            target: { value },
        } = e;

        setNewDisplayName(value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
            refreshUser();
        }
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input
                    onChange={onChange}
                    type="text"
                    autoFocus
                    placeholder="Display Name"
                    value={newDisplayName}
                    className="formInput"
                />
                <input
                    type="submit"
                    value="Update Profile"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }}
                />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>
        </div>
    );
};

export default Profile;
