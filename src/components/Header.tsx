import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex
            as="header"
            height="20"
            width="100%"
            maxWidth="1480px"
            paddingX="6"
            marginTop="4"
            marginX="auto"
            alignItems="center"
        >
            <Text
                width="64"
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
            >
                dashgo
                <Text as="span" color="pink.500" marginLeft="1">
                    .
                </Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                paddingY="4"
                paddingX="8"
                marginLeft="6"
                maxWidth="400px"
                alignSelf="center"
                color="gray.200"
                position="relative"
                bgColor="gray.800"
                borderRadius="full"
            >
                <Input
                    color="gray.50"
                    variant="unstyled"
                    paddingX="4"
                    marginRight="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'gray.400' }}
                />

                <Icon as={RiSearchLine} fontSize="20" color="gray.400" />
            </Flex>

            <Flex alignItems="center" marginLeft="auto">
                <HStack
                    spacing="8"
                    marginX="8"
                    paddingY="1"
                    paddingRight="8"
                    color="gray.300"
                    borderRightWidth="1px"
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex alignItems="center">
                    <Box marginRight="4" textAlign="right">
                        <Text>Guilherme Magno</Text>
                        <Text color="gray.300" fontSize="small">
                            guilherme.magno@exemplo.com
                        </Text>
                    </Box>

                    <Avatar
                        size="md"
                        name="Guilherme Magno"
                        src="https://github.com/devMagno.png"
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}
