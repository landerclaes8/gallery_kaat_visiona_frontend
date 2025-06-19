import { AspectRatio, Card, Center, Space, Text, Title } from "@mantine/core";
import { useState } from "react";

interface Props {
  id: number;
  title: string;
  description: string;
}

const Photo = ({ id, title, description }: Props) => {
  const [isVertical, setIsVertical] = useState(false);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const isPortrait = img.naturalHeight > img.naturalWidth;
    setIsVertical(isPortrait);
  };

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
                width: isVertical ? "50%" : "100%",
                maxWidth: "600px", // of een andere maximale waarde
                height: "auto",
                borderRadius: "15px",
              }}
              src={`/api/photos/${id}`}
              loading="lazy"
              onLoad={handleImageLoad}
            ></img>
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

export default Photo;
