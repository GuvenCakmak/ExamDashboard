import { Box } from "@mui/material"
import Showbars from "../Showbars"

export default function Layout(props) {
    const { children } = props
    return (
        <Box>
            <Showbars />
            {children}
        </Box>
    )
}