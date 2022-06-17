import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

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
            {!isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    marginRight="2"
                ></IconButton>
            )}

            <Logo />

            {isWideVersion && <SearchBox />}

            <Flex alignItems="center" marginLeft="auto">
                <NotificationsNav />

                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}
