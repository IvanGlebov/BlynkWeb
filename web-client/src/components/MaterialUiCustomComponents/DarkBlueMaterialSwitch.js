import {withStyles} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const DarkBlueMaterialSwitch = withStyles({
    switchBase: {
        color: "white",
        '&$checked': {
            color: "#255FB0",
        },
        '&$checked + $track': {
            backgroundColor: "#255FB0",
        },
    },
    checked: {},
    track: {},
})(Switch);

export default DarkBlueMaterialSwitch