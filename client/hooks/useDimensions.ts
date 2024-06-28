import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

export const useDimensions = () => {
	const [size, setSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })

	useEffect(() => {
		Dimensions.addEventListener('change', (e) => {
			const { width, height } = e.window
			setSize({ width, height })
		})
	}, [])

	return size
}
