import { useState } from "react";
import { Button, Link, TextField, Typography, Alert } from "@mui/material";
import '../assets/static/Login.css'
import Image from 'next/image';

export function Login(props: {
    onClick: (username: string, password: string) => void
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
           
            <div className="bodyComplete">
                <div className={"bodyLogin"}>

                    <div className={"loginContainer"} >
                        <div className={"logo"}>
                            <Image src={"/leetcodeLogo.png"} alt={"logo"} width={40} height={40} />
                        </div>
                        <div>
                            <Typography >Leetcode</Typography>
                        </div>
                        <div className={"textfield"}>
                            <TextField autoFocus={true} size={"small"} required={true} fullWidth variant={"outlined"} label={"Username"} onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className={"textfield"}>
                            <TextField required size={"small"} fullWidth variant={"outlined"} label={"Password"} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className={"loginButton"}>
                            <Button variant={"contained"} fullWidth onClick={() => {
                                props.onClick(username, password)
                            }
                            }>Sign In</Button>
                        </div>

                        <div className={"forgot-password"}>

                            <Typography>Forgot Password?</Typography>

                            <Link href={"/signup"} underline={"none"}>Sign Up</Link>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}