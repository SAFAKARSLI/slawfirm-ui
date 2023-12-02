import Tabs from "./Tabs"
import {Stack} from "react-bootstrap"

export default function WrittenPlea() {
    return (
        <Stack gap={4}>
            <div>
                <Tabs active={1}/>
            </div>
            <div>
                Written Plea Form
            </div>
        </Stack>
    )
}