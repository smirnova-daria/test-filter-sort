interface Course {
	name: string;
	prices: number[];
}

let courses: Course[] = [
	{ name: 'Courses in England', prices: [0, 100] },
	{ name: 'Courses in Germany', prices: [500, null] },
	{ name: 'Courses in Italy', prices: [100, 200] },
	{ name: 'Courses in Russia', prices: [null, 400] },
	{ name: 'Courses in China', prices: [50, 250] },
	{ name: 'Courses in USA', prices: [200, null] },
	{ name: 'Courses in Kazakhstan', prices: [56, 324] },
	{ name: 'Courses in France', prices: [null, null] },
]

let store = courses

const filterButton = document.getElementById('filter')
const select = document.getElementById('select')

function isOverlap(arr1: number[], arr2: number[]): boolean {
	let [a1, a2] = arr1
	let [b1, b2] = arr2

	a1 = a1 === null ? 0 : a1
	b1 = b1 === null ? 0 : b1

	a2 = a2 === null ? Infinity : a2
	b2 = b2 === null ? Infinity : b2

	if (a1 >= b1 && a1 <= b2) return true
	if (b1 >= a1 && b1 <= a2) return true

	return false
}

function filterCardsByPrice(from: any, to: any): void {
	// if (from > to) {
	//     return
	// }

	from = from === '' ? 0 : from
	to = to === '' ? Infinity : to

	store = courses.filter((courceItem) => {
		return isOverlap([from, to], courceItem.prices)
	})

	renderCourcesList(store)
}
function compare(a: { prices: number[] }, b: { prices: number[] }): number {
	let [a1, a2] = a.prices
	let [b1, b2] = b.prices

	if (a1 === null && a2 === null) return -1

	a1 = a1 === null ? 0 : a1
	b1 = b1 === null ? 0 : b1

	a2 = a2 === null ? Infinity : a2
	b2 = b2 === null ? Infinity : b2

	if (a1 < b1) return -1
	if (a1 > b1) return 1

	if (a2 < b2) return -1
	if (a2 > b2) return 1

	return 0
}
function sortCardsByPrice(cardsArray: Course[], order: string): void {
	cardsArray.sort(compare)
	if (order === 'desc') {
		renderCourcesList(cardsArray.reverse())
	} else {
		renderCourcesList(cardsArray)
	}
}

function renderCourcesList(cources: Course[]): void {
	const coursesRootBlock = document.querySelector('.cards')
	coursesRootBlock.innerHTML = ``

	cources.forEach((courceItem) => {
		const cardBlock = document.createElement('article')
		const cardTitle = document.createElement('h3')
		cardTitle.textContent = courceItem.name
		const priceBlock = document.createElement('p')

		let priceBlockInner = ''

		priceBlockInner +=
			courceItem.prices[0] === null
				? ''
				: `???? ${courceItem.prices[0]}`

		priceBlockInner +=
			courceItem.prices[1] === null
				? ''
				: ` ???? ${courceItem.prices[1]}`

		priceBlockInner += priceBlockInner.length > 0 ? ' ????????????' : ''

		priceBlock.innerHTML = priceBlockInner
		priceBlockInner = ''
		cardBlock.append(cardTitle)
		cardBlock.append(priceBlock)
		coursesRootBlock?.append(cardBlock)
	})
}

filterButton.addEventListener('click', () => {
	const filterInputFrom = <HTMLInputElement>document.getElementById('from')
	const filterInputTo = <HTMLInputElement>document.getElementById('to')
	filterCardsByPrice(filterInputFrom.value, filterInputTo.value)
})
select.addEventListener('change', (event) => {
	sortCardsByPrice(store, (<HTMLSelectElement>event.target).value)
})
renderCourcesList(store)
