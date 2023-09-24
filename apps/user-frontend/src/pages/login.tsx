import { useSetRecoilState } from "recoil";
import { userState } from "store/src";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Login } from "ui";
import { Alert } from "@mui/material";

export default function LoginPage() {
    const router = useRouter()
    const setUser = useSetRecoilState(userState);
    const [failMsg, setFailMsg] = useState(null);
    const handleLogin = (username: string, password: string) => {
        axios
            .post('/api/users/login', {}, {
                headers: {
                    username: username,
                    password: password
                }
            })
            .then(() => {
                setUser({ username: username, isLoading: false });
                router.push("/problemSet/all");
            })
            .catch((error) => {
                setFailMsg(error.response?.data?.message || "An error occurred.");
            });
    };
    return <div>
        <div className="authentication">
            {failMsg && (<Alert variant="filled" severity="error">{failMsg}</Alert>)}

        </div>
        <Login onClick={handleLogin} />


    </div>;
}