import { Box, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
    totalCountOfRegister: number
    registersPerPage?: number
    currentPage?: number
    onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => from + index + 1)
}

export function Pagination({
    totalCountOfRegister,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegister / registersPerPage)

    const previousPages =
        currentPage > 1
            ? generatePagesArray(
                  currentPage - 1 - siblingsCount,
                  currentPage - 1
              )
            : []

    const nextPages =
        currentPage < lastPage
            ? generatePagesArray(
                  currentPage,
                  Math.min(currentPage + siblingsCount, lastPage)
              )
            : []

    return (
        <Stack
            spacing="6"
            marginTop="8"
            direction={['column', 'row']}
            alignItems="center"
            justifyContent="space-between"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de{' '}
                <strong>{totalCountOfRegister}</strong>
            </Box>
            <Stack spacing="2" direction="row">
                {currentPage > siblingsCount + 1 && (
                    <>
                        <PaginationItem
                            number={1}
                            onPageChange={onPageChange}
                        />

                        {currentPage > 2 + siblingsCount && (
                            <Text color="gray.300" width="8" textAlign="center">
                                ...
                            </Text>
                        )}
                    </>
                )}

                {previousPages.length &&
                    previousPages.map((page) => (
                        <PaginationItem
                            number={page}
                            key={page}
                            onPageChange={onPageChange}
                        />
                    ))}

                <PaginationItem
                    number={currentPage}
                    isCurrent={true}
                    onPageChange={onPageChange}
                />

                {nextPages.length &&
                    nextPages.map((page) => (
                        <PaginationItem
                            number={page}
                            key={page}
                            onPageChange={onPageChange}
                        />
                    ))}

                {currentPage + siblingsCount < lastPage && (
                    <>
                        {currentPage + 1 + siblingsCount < lastPage && (
                            <Text color="gray.300" width="8" textAlign="center">
                                ...
                            </Text>
                        )}
                        <PaginationItem
                            number={lastPage}
                            onPageChange={onPageChange}
                        />
                    </>
                )}
            </Stack>
        </Stack>
    )
}
