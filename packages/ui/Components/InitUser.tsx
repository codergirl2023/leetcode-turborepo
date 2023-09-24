import { userState } from "store/src";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from "react";

export function InitUser() {
    const setUser = useSetRecoilState(userState);
    const init = async () => {
        try {
            const response = await axios.get('/api/users/me', {
            })
            console.log("user appbar =",response.data.username)
            if (response.data.username) {
                setUser({
                    isLoading: false,
                    username: response.data.username
                })
            } else {
                setUser({
                    isLoading: false,
                    username: null
                })
            }
        } catch (e) {
            setUser({
                isLoading: false,
                username: null
            })
        }
    };

    useEffect(() => {
        init();
    }, []);

    return <></>
}