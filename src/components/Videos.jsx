import { Box, Stack } from "@mui/material";
import {VideoCArd,ChannelCard} from "./";

const Videos = ({ videos ,direction}) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
        {videos.map((item,idx)=>{
          return(
            <Box key={idx}>
                {item.id.videoId && <VideoCArd video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )
        })}
    </Stack>
  );
};

export default Videos;
