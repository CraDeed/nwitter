import React, { useEffect, useState } from "react";
import { authService, dbService } from "../fbase";
import { useHistory } from "react-router-dom";
import "./Profile.scss";
import Nweet from "../components/Nweet";

const Profile = ({ refreshUser, userObj }) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const [myNweets, setMyNweets] = useState([]);

    const history = useHistory();

    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    useEffect(() => {
        const getMyNweets = async () => {
            const nweets = await dbService
                .collection("nweets")
                .where("creatorId", "==", userObj.uid)
                .orderBy("createAt")
                .get();

            const nweetArray = nweets.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMyNweets(nweetArray);
        };
        getMyNweets();
    }, [userObj.uid]);

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
                    value="Change NickName"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }}
                />
            </form>
            <div style={{ marginTop: 30 }}>
                {myNweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
            <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </span>
        </div>
    );
};

export default Profile;
