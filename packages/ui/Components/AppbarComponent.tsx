import {
    Button, Box
} from "@mui/material";
import { userState } from "store/src";
import { isUserLoading } from "store/src";
import { usernameState } from "store/src";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/router";

function AppbarComponent() {
    const userLoading = useRecoilValue(isUserLoading);
    const username = useRecoilValue(usernameState);
    const setUser = useSetRecoilState(userState);
    
    const router = useRouter();
    if (userLoading) {
        return <></>
    }
    return (
        <>
            {(username === null) ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "25px"
                    }}
                >
                    <Button variant="contained" onClick={() => router.push("/signup")}>
                        Sign Up
                    </Button>
                    <Button variant="contained" onClick={() => router.push("/login")}>
                        Login
                    </Button>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: "flex",
                        gap: "25px",
                    }}
                >
                    <Button variant="contained" onClick={() => router.push("/problemSet/all")}>
                        Problems
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setUser({
                                isLoading: false,
                                username: null,
                            });
                            router.push("/");
                        }}
                    >
                        Logout
                    </Button>
                </Box>
            )}
        </>);
}
export default AppbarComponent;