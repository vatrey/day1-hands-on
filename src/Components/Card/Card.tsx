import { Box } from "@mui/material";
import "./Card.scss";
import Profile from "../../Assests/Mask Group 2.png";
import { CardModel } from "../../App";

export default function Card(props: CardModel): JSX.Element {
    return (
        <div>
            <Box id="card">
                <Box className="card-content">
                    <img src={Profile}></img>
                </Box>
                <Box className="card-content" id="card-head">
                    {props.name}
                </Box>
                <Box className="card-content">
                    {props.content}
                </Box>
            </Box>
        </div>
    );
}