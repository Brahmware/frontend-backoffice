import { Avatar as MuiImg, styled } from '@mui/material';
import IconComponent from './IconComponent';


const Image = styled(MuiImg)({
    borderRadius: 0,
    background: 'rgba(0, 0, 0, 0)'
});

const Icon = ({ src: iconSourcePath, }) => {

    return (
        <Image src={iconSourcePath}>
            <IconComponent source={String(iconSourcePath)} />
        </Image>
    )
};

export default Icon