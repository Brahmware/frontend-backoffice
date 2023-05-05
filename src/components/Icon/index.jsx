import { Avatar as MuiImg, styled } from '@mui/material';
import supportedFileTypes from '../../utils/supportedFileTypes';
import IconComponent from './IconComponent';


const Image = styled(MuiImg)({
    borderRadius: 0,
    background: 'rgba(0, 0, 0, 0)'
});

const allSupportedImageTypes = [...Object.keys(supportedFileTypes.media.picture || {})];

const Icon = ({ src: iconSourcePath, }) => {

    const lol = allSupportedImageTypes.reduce((accumulator, item) => {
        return accumulator * !iconSourcePath.includes(item)
    }, true);
    console.log(iconSourcePath.includes(lol))
    
    return (
        <Image src={iconSourcePath}>
            <IconComponent source={String(iconSourcePath)} />
        </Image>
    )
};

export default Icon