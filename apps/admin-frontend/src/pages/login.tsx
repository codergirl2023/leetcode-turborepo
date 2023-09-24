import { useSetRecoilState } from "recoil";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Login } from "ui";
import { Alert } from "@mui/material";

export default function LoginPage() {
    const router = useRouter()
    const [failMsg, setFailMsg] = useState(null);
    const handleLogin = (email: string, password: string) => {
        axios
            .post('/api/admin/login', {}, {
                headers: {
                    email: email,
                    password: password
                }
            })
            .then(() => {
                
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