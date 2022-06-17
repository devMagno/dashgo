import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

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
            <Logo />

            <SearchBox />

            <Flex alignItems="center" marginLeft="auto">
                <NotificationsNav />

                <Profile />
            </Flex>
        </Flex>
    )
}
