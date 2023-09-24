import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Link } from '@mui/material';
import Apple from '../public/appleCompany.png';
import PayPal from '../public/paypal.png';
import NetApp from '../public/NetApp.png';
import PayU from '../public/payu.jpg';
import Image from 'next/image';

export default function CompanyWiseQuestionsList() {
    const companies = [
        { image: Apple, name: 'Apple' },
        { image: PayPal, name: 'PayPal' },
        { image: PayU, name: 'PayU' },
        { image: NetApp, name: 'NetApp' },
    ];
    return (
        <div style={{ display: "flex", marginTop: "100px", justifyContent: "space-evenly" }}>
            <Grid container spacing={2}>
                {companies.map((company, index) => {
                    return (<CardComp company={company} key={index} />);
                })}
            </Grid>
        </div>
    );
}

function CardComp({ company }: { company: { image: typeof Image; name: string } }) {
    return (
        <Grid item md={6} lg={3} xs={12}>
            <Link href='/companyWiseQuestions' style={{ textDecoration: 'none' }} >
                <Card sx={{ width: 345, display: 'flex', flexFlow: 1 }}>
                    <CardActionArea>
                        <div style={{ position: 'relative', width: '100%', height: '140px' }}>
                            <Image
                                src={company.image}
                                alt={`Logo of ${company.name}`}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                TOP 50 QUESTIONS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Top 50 most recently asked interview questions.
                                Boost your confidence before your next interview and get your dream job.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
}
