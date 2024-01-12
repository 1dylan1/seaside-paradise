import Navbar from "../components/Navbar";
import sea from "../assets/sea.mp4";
import roomPreviewA2 from "../assets/chalet.jpg";
import roomPreviewB1 from "../assets/singleroom.jpg";
import roomPreviewB2 from "../assets/single.jpg";
import roomPreviewA1 from "../assets/chaletroom.jpg";
import roombg from "../assets/rooms_bg.jpg";
import amenity from "../assets/amenity.jpg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AccessTime, Home, People, Phone, ChevronRight } from "@mui/icons-material";
import { Button, Link, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

type infoCardType = {
    color: string,
    icon: ReactNode,
    header: string,
    description: string
}

type roomCardType = {
    headerText: string,
    roomTitle: string,
    description: string[],
    images: string[],
}

const colors =  {
    pLightBlue: "#71B3AB",
    pOrange: "#FFA251",
    pMidBlue: "#016692",
    pDarkBlue: "#152F4E",
    pPrimBlue: "rgb(30,142,185)"
};

const roomInformation: roomCardType[] = [
    {
        headerText: "2 Queen/ 1 Queen, 2 Single",
        roomTitle: "CHALET",
        description: [ "Weekday (Sun-Thurs) - RM400.00", "Weekend (Fri-Sat or PH/EVE) - RM480.00"],
        images: [
            roomPreviewA1,
            roomPreviewA2
        ],
    },
    {
        headerText: "2 Single/ 1 Queen",
        roomTitle: "SINGLE",
        description: [ "Weekday (Sun-Thurs) - RM180.00", "Weekend (Fri-Sat or PH/EVE) - RM250.00"],
        images: [
            roomPreviewB1,
            roomPreviewB2
        ],
    },
];

const infoInformation: infoCardType[] = [
    {
        color: `${colors.pMidBlue}`,
        icon: <AccessTime sx={{ fontSize: "45px" }}/>,
        header: "OPENING TIMES",
        description: "Monday - Friday 09:00 - 18:00"
    },
    {
        color: `${colors.pPrimBlue}`,
        icon: <Home sx={{ fontSize: "45px" }}/>,
        header: "OUR LOCATION",
        description: "1st Beach St, Kuching, Sarawak"
    },
    {
        color: `${colors.pLightBlue}`,
        icon: <Phone sx={{ fontSize: "45px" }}/>,
        header: "CONTACT US",
        description: "+1 402 806 7244"
    },
]

function InfoCard({section}: {section: infoCardType}) {
    return (
        <div style={{backgroundColor: section.color, color: "white", display: "flex", flexDirection: "row", alignItems: "center", height: "122px", paddingLeft: "40px" }}>
            {section.icon}
            <div style={{display: "flex", flexDirection: "column", marginLeft: "10px"}}>
                <Typography variant="h6" fontWeight="bold" >{section.header}</Typography>
                <Typography variant="body1" sx={{marginTop: "-4px"}}>{section.description}</Typography>
            </div>
        </div>
    )
}

function RoomCard({section}: {section: roomCardType}) {

    const [hovered, setHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMouseEnter = () => {
        setHovered(true);
        setCurrentImageIndex(1); // Set to the 1st index image on hover
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setCurrentImageIndex(0); // Set back to the default image on leave
    };
    console.log(hovered);
    
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "400px", height: "490px", margin: "15px" }}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundImage: `url(${section.images[currentImageIndex]})`,
                height: "260px", width: "400px", 
                position: "relative",         
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "center",
                transition: 'opacity 0.4s ease'
            }}>
                <div style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    backgroundColor: "rgba(0, 0, 0, 0.6)", 
                    color: "white", 
                    padding: "15px",
                    display: "flex",
                    flexDirection: "row", 
                    alignItems: "center",
                }}>
                    <People fontSize="medium" sx={{ marginLeft: "10px" }}/>
                    <Typography variant="subtitle1" style={{ marginLeft: "8px" }}>{section.headerText}</Typography>
                </div>
            </div>
            <div style={{ backgroundColor: "rgba(0,0,0,0.6)", height:"230px", width: "400px", padding: "10px", color: "white", textAlign: "left" }}>
                <Typography variant="h6" fontWeight="bold">{section.roomTitle}</Typography>
                {section.description.map((sentence) => (
                    <Typography variant="subtitle1">{sentence}</Typography>
                ))}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90%", margin: "0 auto" }}>
                    <Link sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography sx={{ textDecoration: "none", "&:hover": { cursor: "pointer", textDecoration: `underline solid ${colors.pOrange}` } }} variant="h6" color="white" fontWeight="bold">BOOK NOW</Typography> 
                    <ChevronRight sx={{ color: colors.pOrange, marginTop: "4px" }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Landing() {

    return (
        <>
            <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
            <video autoPlay muted loop style={{position: "fixed", zIndex: "-1", width: "100%", height: "100%", objectFit: "cover"}}>
                <source src={sea} type="video/mp4"/>
            </video>
                <Navbar />
                <div style={{ position: "absolute", top: "50%", left: "6%", transform: "translateY(-50%)", textAlign: "left", color: "white", width:"40%", minWidth: "370px" }}>
                    <Typography variant="h2" fontWeight="bold">Your Private Getaway By The Sea</Typography>
                    <Typography variant="h6">We are thrilled to extend a warm and heartfelt welcome to you as you step into the enchanting world of Seaside Paradise at Sematan!</Typography>
                    <Button variant="contained" sx={{marginTop: "15px", backgroundColor: colors.pOrange, color: "white", "&:hover": {backgroundColor: "#e46a00"} }}>Book now</Button>
                </div>
            </div>
            <Grid container>
                {infoInformation.map((section: infoCardType) => (
                    <Grid xs={12} md={4}>
                        <InfoCard section={section} />
                    </Grid>
                ))}
            </Grid>
            <div style={{ textAlign: "center", backgroundImage: `url(${roombg})`, backgroundPosition: "center"}}>
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: "30px" }}>
                    <Typography variant="h4" color="white" fontWeight="bold" sx={{marginBottom: "30px"}}>Our Rooms</Typography>
                    <div style={{display: "flex", margin: "0 auto", justifyContent: "center"}}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: "20px" }}>
                            {roomInformation.map((room: roomCardType) => (
                                <RoomCard section={room} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: colors.pDarkBlue, padding: "30px 0px 60px 0px", textAlign: "center",}}>
                <Typography variant="h4" color="white" fontWeight="bold">Amenities</Typography>
                <div style={{display: "flex", justifyContent: "space-around", padding: "30px"}}>
                    <img style={{height: "450px"}} alt="amenityImage" src={amenity}/>
                    <ul>
                        <li>Kitchenette</li>
                        <li>Toiletries</li>
                        <li>Wifi</li>
                        <li>Parking</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div style={{backgroundColor: colors.pLightBlue, padding: "30px", textAlign: "center",}}>
                <Typography variant="h4" color="white" fontWeight="bold">Contact</Typography>
                <Typography variant="h6" color="white" style={{paddingTop: "30px"}}>Call Us or Whatsapp</Typography>
                <Typography color="white">+60 19-834 5790</Typography>
            </div>
        </>
    )
}