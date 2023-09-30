import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,

} from "@mui/material";
import Link from 'next/link';
import  MenuIcon  from '@material-ui/icons/Menu';
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { usernameState } from "store/src";
import { userState } from "store/src";

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const userEmail = useRecoilValue(usernameState);
    const setUser = useSetRecoilState(userState);

    return (
        <>
            <Drawer anchor="bottom" open={openDrawer} onClose={() => setOpenDrawer(false)}  >
                {(userEmail === null) ? (<List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link href="/signup" style={{ color: '#1976d2', textDecoration: 'none' }}>Signup</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem >
                        <ListItemText onClick={() => setOpenDrawer(false)}>
                            <Link href="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>Login</Link>
                        </ListItemText>
                    </ListItem>
                </List>) :
                    (<List>
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemText>
                                <Link href="/problemSet/all" style={{ color: '#1976d2', textDecoration: 'none' }}>Problems</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem >
                            <ListItemText onClick={() => {
                                setOpenDrawer(false);
                                // Update the authState to indicate the user is not authenticated
                                setUser({
                                    isLoading: false,
                                    username: null,
                                });
                            }}>
                                <Link href="/" style={{ color: '#1976d2', textDecoration: 'none' }}>Logout</Link>
                            </ListItemText>
                        </ListItem>
                    </List>)
                }

            </Drawer>
            <IconButton
                sx={{ color: "black", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)} >
                <MenuIcon />
            </IconButton>
        </>);
}
export default DrawerComponent;