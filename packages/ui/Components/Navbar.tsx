import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
    Link, useMediaQuery,
    createTheme
} from "@mui/material";
import DrawerSmallScreenComponent from "./DrawerComponent";
import AppbarComponent from "./AppbarComponent";
import Image from 'next/image';

export function Navbar(props: {
    onClick: () => void
}) {
    const theme = createTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Link href="/">
                        <Image
                            style={{ width: "2rem", height: "2rem", margin: "0" }}
                            src={"/leetcodeLogo.png"}
                            alt="logo" width={2} height={2}
                        />
                    </Link>
                    <Link
                        href="/"
                        underline="none"
                        color="inherit"
                        sx={{ fontWeight: "bold", padding: "0.5rem", fontSize: "1.5rem" }}
                    >
                        Leetcode
                    </Link>
                </div>
                {isMobile ? (<DrawerSmallScreenComponent />) : (<AppbarComponent onClick={props.onClick} />)}
            </Toolbar>
        </AppBar>
    );
}