import { useCallback, useEffect, useRef } from 'react'

export const useRefCallback = <T extends any[]>(
	value: ((...args: T) => void) | undefined,
	deps?: React.DependencyList
): ((...args: T) => void) => {
	const ref = useRef(value)

	useEffect(() => {
		ref.current = value
	}, deps ?? [value])

	const result = useCallback((...args: T) => {
		ref.current?.(...args)
	}, [])

	return result
}

export const usePrevious = <T extends any>(value: T) => {
	const ref = useRef<T>()
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}
