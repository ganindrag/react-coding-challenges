import React from 'react'

const defaultContext = {
	darkmode: false,
	toggleDarkmode: () => {}
}

export default React.createContext(defaultContext)