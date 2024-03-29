import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import Nweet from "../components/Nweet";
import NweetFactory from "../components/NweetFactory";
import "../styles/common.scss";

const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        const getData = dbService
            .collection("nweets")
            .orderBy("createAt", "desc")
            .onSnapshot((snapshot) => {
                const nweetArray = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNweets(nweetArray);
            });

        return () => getData();
    }, []);

    return (
        <div className="container">
            <NweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
