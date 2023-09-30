import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { userState } from 'store/src';
import { Navbar } from 'ui';

const NavbarPage = () => {
    const router = useRouter()
    const setUser = useSetRecoilState(userState);

    const handleLogout = () => {
        axios
            .post('/api/users/logout', {}, {
            })
            .then(() => {
                setUser({ username: null, isLoading: false });
                router.push("/");
            })
    };

    return (
        <div><Navbar onClick={handleLogout} /></div>
    )
}

export default NavbarPage