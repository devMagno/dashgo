import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
    number: number
    isCurrent?: boolean
    onPageChange: (page: number) => void
}

export function PaginationItem({
    number,
    isCurrent = false,
    onPageChange,
}: PaginationItemProps) {
    if (isCurrent) {
        return (
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
                {number}
            </Button>
        )
    }

    return (
        <Button
            width="4"
            size="sm"
            fontSize="xs"
            colorScheme="gray.700"
            _hover={{
                bgColor: 'gray.500',
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}
