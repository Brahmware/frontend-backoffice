import { useEffect, useState } from "react";
import { useGetFileMutation } from "../../Application/getFile/getFileApiSlice";
import { styled } from "@mui/material";

const SvgWrapper = styled('div')({
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%",

    '& svg': {
        height: "100%",
        width: "100%",
    }
});

const IconComponent = ({ source }) => {
    const [getFile, { isError, isLoading, isSuccess }] = useGetFileMutation();
    const [svgImage, setSvgImage] = useState("");

    const randomId = `icon_${Math.random().toString(36).substring(2, 11)}`;

    useEffect(() => {
        const getFileCall = async () => {
            try {
                const { data } = await getFile(source);
                setSvgImage(data);
            } catch (error) {
                throw error;
            }
        };

        getFileCall().catch((error) => console.log(error));
    }, []);

    return (
        <SvgWrapper id={randomId} className="icon-wrapper" dangerouslySetInnerHTML={{ __html: svgImage }} />
    );
};

export default IconComponent;