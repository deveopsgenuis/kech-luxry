"use client"; // This is a client component 👈🏽
import React, {  useState } from 'react';
import { Card, CardContent, CardMedia, Container,Stack, Typography } from '@mui/material';
import { AcUnit } from '@mui/icons-material';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import Carousel from 'react-material-ui-carousel';
// *** styled component **** ///
import {
    Image,  HouseCard, HouseCardContent, HouseCardIcon,
    HouseCardIcons, HouseCardMedia,
} from './Styled';
// *** styled component **** ///    
//  *** mui sytem design ** //

import Grid from '@mui/material/Grid';

interface House {
    images: string[];
    name: string;
    bedrooms: number;
    climate: boolean;
    wifi: boolean;
    description: string;
};

const Houses = ({ houses }: { houses: House[] }) => {
    const [selectedHouse, setSelectedHouse] = useState<House | null>(houses[0]);


    return (
        <Container >
          
                <Grid  xs={12} display={'flex'}
                spacing={4}
                    >
                    {houses.map((house) => (
                        <HouseCard key={house.name} onClick={() => setSelectedHouse(house)}>
                            <HouseCardContent>
                            <HouseCardMedia image={house.images[0]} title={house.name} selected={selectedHouse === house} />

                                <Typography variant="h5" component="div">
                                    {house.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {house.description}
                                </Typography>
                                <HouseCardIcons>
                                    {house.wifi && (
                                        <HouseCardIcon>
                                            <WifiPasswordIcon />
                                        </HouseCardIcon>
                                    )}
                                    {house.climate && (
                                        <HouseCardIcon>
                                            <AcUnit />
                                        </HouseCardIcon>
                                    )}
                                </HouseCardIcons>
                            </HouseCardContent>
                        </HouseCard>
                    ))}
                </Grid>
                    {selectedHouse && (
                        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 12, md: 12 }}>
                           <Grid item xs={2} sm={8} md={8}>
                       <CardMedia>
                        <Image>
                            <Carousel
                                IndicatorIcon={false}
                                autoPlay={true}
                                animation="slide"
                                indicatorContainerProps={{
                                    style: {
                                        display: "none",
                                    }
                                }}
                            >

                                {selectedHouse.images.map((image) => (
                                    <img
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            overflow: "hidden",
                                        }}
                                        key={image} src={image} />


                                ))}
                            </Carousel>
                        </Image>


                    </CardMedia>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                    <Card>

                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {selectedHouse.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {selectedHouse.description}
                                </Typography>
                                <HouseCardIcons>
                                    {selectedHouse.wifi && (
                                        <HouseCardIcon>
                                            <WifiPasswordIcon />
                                        </HouseCardIcon>
                                    )}
                                    {selectedHouse.climate && (
                                        <HouseCardIcon>
                                            <AcUnit />
                                        </HouseCardIcon>
                                    )}
                                </HouseCardIcons>
                            </CardContent>
                        </Card>
                        </Grid>
                        </Grid>
                    )}
        </Container>
    );
};

export default Houses;
