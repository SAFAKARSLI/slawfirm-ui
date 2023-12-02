import Tabs from "./Tabs"
import {Stack} from "react-bootstrap"
import GenericForm from "../GenericForm"

export default function RetainerAgreement() {
    return (
        <Stack gap={4}>
            <div>
                <Tabs active={0}/>
            </div>
            <div>
                <GenericForm />
            </div>
        </Stack>
    )
}