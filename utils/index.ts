// generate id
export function generateId() {
	return Math.random().toString(36).substr(2, 9)
}
export const setCaretToEnd = (element: HTMLElement) => {
	const range = document.createRange()
	const selection = window.getSelection()
	range.selectNodeContents(element)
	range.collapse(false)
	if (selection) {
		selection.removeAllRanges()
		selection.addRange(range)
	}
	element.focus()
}
