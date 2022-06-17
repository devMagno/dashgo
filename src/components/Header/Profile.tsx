import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex alignItems="center">
            {showProfileData && (
                <Box marginRight="4" textAlign="right">
                    <Text>Guilherme Magno</Text>
                    <Text color="gray.300" fontSize="small">
                        guilherme.magno@exemplo.com
                    </Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Guilherme Magno"
                src="https://github.com/devMagno.png"
            />
        </Flex>
    )
}
