import { AspectRatio, Card, Center, Text, Title } from "@mantine/core";
import VideoPlayer from "./videoPlayer";

interface Props {
  id: number;
  title: string;
  description: string;
}

const Video = ({ id, title, description }: Props) => {
  return (
    <Card className="background-color-text" radius="md" w="100%" mb="md">
      <Card.Section>
        <Center>
          <Title size={25}>
            {title}
          </Title>
        </Center>
      </Card.Section>

      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Center>
            <VideoPlayer videoId={id} />
          </Center>
        </AspectRatio>
      </Card.Section>
      <Card.Section>
        <Center>
          <Text>{description}</Text>
        </Center>
      </Card.Section>
    </Card>
  );
};

export default Video;
