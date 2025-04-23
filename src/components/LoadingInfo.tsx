import { Flex, Loader, Text } from "@mantine/core"

export const LoadingInfo = ({ what }: { what: string }) => {
  return (
    <Flex align={"center"} justify={"center"} direction="column" gap={"sm"} pt="lg">
      <Loader />
      <Text>Please hold on while we load the {what}</Text>
    </Flex>
  )
}
