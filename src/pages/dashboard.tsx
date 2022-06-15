import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2022-04-12T00:00:00.000Z',
            '2022-04-13T00:00:00.000Z',
            '2022-04-14T00:00:00.000Z',
            '2022-04-15T00:00:00.000Z',
            '2022-04-16T00:00:00.000Z',
            '2022-04-17T00:00:00.000Z',
            '2022-04-18T00:00:00.000Z',
            '2022-04-19T00:00:00.000Z',
        ],
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    },
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 15, 51, 18, 109] }]

export default function Dashboard() {
    return (
        <Flex direction="column" height="100vh">
            <Header />

            <Flex
                width="100%"
                marginY="6"
                marginX="auto"
                paddingX="6"
                maxWidth="1480px"
            >
                <Sidebar />

                <SimpleGrid
                    flex="1"
                    gap="4"
                    minChildWidth="320px"
                    alignItems="flex-start"
                >
                    <Box
                        padding="8"
                        borderRadius="8"
                        paddingBottom="4"
                        backgroundColor="gray.800"
                    >
                        <Text fontSize="lg" marginBottom="4">
                            Inscritos da semana
                        </Text>

                        <Chart
                            options={options}
                            series={series}
                            type="area"
                            height="160px"
                        />
                    </Box>

                    <Box
                        padding="8"
                        borderRadius="8"
                        paddingBottom="4"
                        backgroundColor="gray.800"
                    >
                        <Text fontSize="lg" marginBottom="4">
                            Taxa de abertura
                        </Text>

                        <Chart
                            options={options}
                            series={series}
                            type="area"
                            height="160px"
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}
