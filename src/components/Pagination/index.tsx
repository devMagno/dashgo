import { Box, Button, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

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
                <PaginationItem number={1} isCurrent={true} />
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
            </Stack>
        </Stack>
    )
}
