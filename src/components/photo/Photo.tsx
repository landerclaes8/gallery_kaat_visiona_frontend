import { AspectRatio, Card, Center, Space, Text, Title } from "@mantine/core";

interface Props {
  id: number;
  title: string;
  description: string;
}

const Photo = ({ id, title, description }: Props) => {
  return (
    <Card className="background-color-text" radius="md" w="100%" mb="md">
      <Card.Section>
        <Title className="font-family-text" size={25}>
          {title}
        </Title>
        <Space h="lg" />
      </Card.Section>

      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Center>
            <img
              style={{
                width: "100%",
                maxWidth: "600px", // of een andere maximale waarde
                height: "auto",
                borderRadius: "15px",
              }}
              src={`/api/photos/${id}`}
              loading="lazy"
            ></img>
          </Center>
        </AspectRatio>
      </Card.Section>
      <Card.Section>
        <Center>
          <Text className="font-family-text">{description}</Text>
        </Center>
      </Card.Section>
    </Card>
  );
};

export default Photo;
