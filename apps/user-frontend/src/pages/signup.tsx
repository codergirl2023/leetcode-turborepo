import { Signup } from "ui";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from 'store/src/'
import { Alert } from "@mui/material";

export default function SignupPage() {
    const router = useRouter()
    const setUser = useSetRecoilState(userState);
    const [failMsg, setFailMsg] = useState<string | undefined>("");

    function handleClick(fullName:string, username:string, password:string) {
      
        axios.post("/api/users/signup", {
            fullName,
            username,
            password
        }, {
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            setUser({ username: username, isLoading: false })
            router.push("/problemSet/all");
        }).catch((e) => {
            // alert(e.response.data.message);
            setFailMsg(e.response.data.message)
        });
    }
    return <div>
        <div className="authentication">
            {failMsg && (<Alert variant="filled" severity="error">{failMsg}</Alert>)}

        </div>
        <Signup onClick={handleClick} />
    </div>
}