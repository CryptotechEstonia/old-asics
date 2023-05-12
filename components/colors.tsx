export const colors = [
	{ name: 'WORST', color: '#ff0000', value: -3 },
	{ name: 'WARSE', color: '#ff421f', value: -1 },
	{ name: 'BAD', color: '#ff853f', value: 0 },
	{ name: 'MODERATE', color: '#ffc85f', value: 2 },
	{ name: 'FINE', color: '#d1dd54', value: 4 },
	{ name: 'GOOD', color: '#9de53f', value: 6 },
	{ name: 'EXCEPTIONAL', color: '#83ea35', value: 8 },
	{ name: 'PERFECT', color: '#69ee2a', value: 12 },
	{ name: 'UNBEALIVABLE', color: '#1bfa0b', value: 15 }
]

export function getColor(input: number) {
	for (const { color, value } of colors) {
		if (input > value)
			continue

		return color
	}

	return colors[colors.length - 1].color
}
