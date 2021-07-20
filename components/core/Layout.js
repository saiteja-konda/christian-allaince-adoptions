import React from 'react'
import SmallWithSocial from '../Footer'
import SplitScreen from '../homeSection/SplitScreen'
import WithSubnavigation from '../navigation/WithSubnavigation'

function Layout({ children }) {
    return (
        <>
            <WithSubnavigation />
            <SplitScreen />
            {children}
            <SmallWithSocial />
        </>
    )
}

export default Layout
