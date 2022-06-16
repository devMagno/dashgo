import { Box, Button, Stack } from '@chakra-ui/react'

export function Pagination() {
    return (
        <Stack
            spacing="6"
            marginTop="8"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>150</strong>
            </Box>
            <Stack spacing="2" direction="row">
                <Button
                    width="4"
                    size="sm"
                    fontSize="xs"
                    colorScheme="pink"
                    disabled
                    _disabled={{
                        bgColor: 'pink.500',
                        cursor: 'default',
                    }}
                >
                    1
                </Button>
                <Button
                    width="4"
                    size="sm"
                    fontSize="xs"
                    colorScheme="gray.700"
                    _hover={{
                        bgColor: 'gray.500',
                    }}
                >
                    2
                </Button>
                <Button
                    width="4"
                    size="sm"
                    fontSize="xs"
                    colorScheme="gray.700"
                    _hover={{
                        bgColor: 'gray.500',
                    }}
                >
                    3
                </Button>
                <Button
                    width="4"
                    size="sm"
                    fontSize="xs"
                    colorScheme="gray.700"
                    _hover={{
                        bgColor: 'gray.500',
                    }}
                >
                    4
                </Button>
            </Stack>
        </Stack>
    )
}
