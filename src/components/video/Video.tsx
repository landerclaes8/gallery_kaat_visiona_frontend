import { AspectRatio, Card, Center, Space, Text, Title } from "@mantine/core";
import VideoPlayer from "./videoPlayer";

interface Props {
  id: number;
  title: string;
  description: string;
}

const Video = ({ id, title, description }: Props) => {
  return (
    <Card padding="lg" radius="md" w="100%" mb="md">
      <Card.Section inheritPadding>
        <Center>
        <Title size={25}>{title}</Title>
        </Center>
      </Card.Section>

      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Center>
            <VideoPlayer videoId={id} />
          </Center>
        </AspectRatio>
      </Card.Section>
      <Card.Section inheritPadding py="xs">
        <Center>
        <Text>{description}</Text>
        </Center>
      </Card.Section>
    </Card>
  );
};

export default Video;
