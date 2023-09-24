import PageNotFound from "/PageNotFound.jpeg";
import { Typography, Link } from '@mui/material';
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", position: "fixed" }}>
      <Typography variant="h1" gutterBottom noWrap={true} >
        PAGE NOT FOUND
      </Typography>
      <Link href="/">
        Go to home
      </Link>
      <Image style={{ padding: 0, maxWidth: '100%', margin: '0', height: 'auto' }} src={PageNotFound} alt="page not found"  width={0}
                height={0}
                sizes="100vw" />


    </div>
  );
}