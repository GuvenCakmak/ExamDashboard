
import { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useMediaQuery,
    Grid
} from "@mui/material";
import Navbar from "../../Components/Bars/Navbar/Navbar";
import SidebarNav from "../../Components/Bars/sidebar/Sidebar";
import Header from "../../Components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { LocalDining } from "@mui/icons-material";

export default function Products() {
    const [data, setData] = useState([]);
    const { isLoading } = useAuth0()

    const dummyJson = async () => {


        let rawData = await fetch("https://dummyjson.com/products?limit=20");
        let parseData = await rawData.json();
        console.log(parseData.products);
        setData(parseData.products);
    };
    useEffect(() => {

        dummyJson();
    }, []);

    if (isLoading) {
        return
    }

    return (
        <Box sx={{ display: "flex" }} >

            <SidebarNav />

            <Box >
                <Navbar />
                <Header title="PRODUCTS" subtitle="Welcome to your products" />

                <Box sx={{

                    display: "grid", mt: 1, gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    justifyContent: "space-between", rowGap: 1, columnGap: "1.33%",
                }}>

                    {data.map((item) => {
                        return (

                            <Box

                                sx={{ padding: 1, }}
                                key={item["id"]}
                            >


                                <Card
                                    sx={{ backgroundColor: "#9199cc" }}
                                >
                                    <CardContent>
                                        <Typography
                                            sx={{ fontSize: 14 }}
                                            color="blue"
                                            gutterBottom
                                        >
                                            {item.category}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ mb: "1.5rem" }} color="blue">
                                            ${Number(item.price).toFixed(2)}
                                        </Typography>
                                        <Rating value={item.rating} readOnly />

                                        {/* <Typography variant="body2">{item.description}</Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            variant="primary"
                                            size="small"

                                        >
                                            See More
                                        </Button>
                                    </CardActions>
                                </Card>

                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
}

