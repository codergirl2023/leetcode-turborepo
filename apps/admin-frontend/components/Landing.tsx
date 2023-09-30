import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRecoilValue } from "recoil";
import { usernameState } from "store/src"
import { isUserLoading } from "store/src/selectors/isUserLoading";
import Image from "next/image";

export function Landing() {
    const username = useRecoilValue(usernameState);
    const userLoading = useRecoilValue(isUserLoading);
    return <div>
        <Grid container style={{ padding: "5vw" }}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{ marginTop: 100 }}>
                    <Typography variant={"h2"}>
                        Leetcode Admin
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to code, earn and grow
                    </Typography>
                    {!userLoading && !username && <div style={{ display: "flex", marginTop: 20 }}>
                        <div style={{ marginRight: 10 }}>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    window.location.href = "/signup";
                                }}
                            >Signup</Button>
                        </div>
                        <div>
                            <Button
                                size={"large"}
                                variant={"contained"}
                                onClick={() => {
                                    window.location.href = "/login";
                                }}
                            >Login</Button>
                        </div>
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
                <Image src={"/coder-admin.avif"} alt="classteacher" width={700}
                    height={400} />
            </Grid>
        </Grid>
    </div>
}