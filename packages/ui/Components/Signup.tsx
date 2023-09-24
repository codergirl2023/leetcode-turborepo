import { useState } from "react";
import { Button, Link, TextField, Typography, Alert } from "@mui/material";
import '../assets/static/Signup.css'
import Image from 'next/image';

export function Signup(props: {
    onClick: (fullName: string, username: string, password: string) => void
}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    return (
        <>
            
            <div className={"bodySignup"}>
                <div className={"signupContainer"}>
                    <div className={"logo"}>
                        <Image src={"/leetcodeLogo.png"} alt={"logo"} width={40} height={40}/>
                    </div>
                    <div>
                        <Typography>Leetcode</Typography>
                    </div>
                    <div className={"textfield"}>
                        <TextField autoFocus={true} required={true} size={"small"} variant={"outlined"} label={"First Name"} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} margin={"dense"} fullWidth={true}
                        />
                    </div>
                    <div className={"textfield"}>
                        <TextField required size={"small"} fullWidth variant={"outlined"} label={"Last Name"} onChange={(e) => {
                            setLastName(e.target.value)
                        }} margin={"dense"} />
                    </div>
                    <div className={"textfield"}>
                        <TextField required size={"small"} variant={"outlined"} label={"Username"} onChange={(e) => {
                            setUsername(e.target.value)
                        }} margin={"dense"} />
                    </div>
                    <div className={"textfield"}>
                        <TextField required size={"small"} fullWidth variant={"outlined"} label={"Password"}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} margin={"dense"} />
                    </div>

                    <div className={"button"}>
                        <Button variant={"contained"} onClick={() => {
                            setFullName(firstName + " " + lastName);
                            
                            props.onClick(fullName, username, password);
                        }} fullWidth>Sign Up</Button>
                    </div>
                    <div className={"signin"}>

                        <Typography>Have an account?</Typography>
                        <Link href={"/login"} underline={"none"}>Sign In</Link>

                    </div>

                </div>
            </div>
        </>
    );
}