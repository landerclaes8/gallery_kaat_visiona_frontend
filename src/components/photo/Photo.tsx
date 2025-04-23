import {
  AspectRatio,
  Card,
  Center,
  Image,
  Space,
  Text,
  Title,
} from "@mantine/core";

interface Props {
  id: number;
  title: string;
  description: string;
}

const Photo = ({ id, title, description }: Props) => {
  return (
    <Card padding="lg" radius="md" w="100%" mb="md">
      <Card.Section inheritPadding>
        <Title size={25}>{title}</Title>
        <Space h="lg" />
      </Card.Section>

      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Center>
            <Image src={`http://localhost:4000/api/photos/${id}`} />
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

export default Photo;
