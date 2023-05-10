import AsicsLaout from "./AsicsLayout"
import AsicsTable from "./Table"

import { prisma } from "./globa"

export default async function Page() {
	const asics = [
		{ model: "Antminer L7 (9.5Gh)", price: 9250 },
		{ model: "Antminer S19 XP Hyd (255Th)", price: 7250 },
		{ model: "Antminer KA3 (166Th)", price: 11125 },
		{ model: "Antminer S19 XP (140Th)", price: 5248.75 },
		{ model: "Antminer S19k Pro (136Th)", price: 3930 },
		{ model: "Antminer E9 Pro (3.68Gh)", price: 4061.25 },
		{ model: "Antminer S19j Pro+ (122Th)", price: 2873.75 },
		{ model: "Antminer K7 (63.5Th)", price: 8436.25 },
		{ model: "Antminer S19j Pro (104Th)", price: 2320 },
		{ model: "Antminer S19 Pro (110Th)", price: 3373.75 },
		{ model: "Antminer S19j Pro (96Th)", price: 5248.75 },
	]

	const rawIds = await prisma.asicminervalue.groupBy({
		by: ['model'],
		where: { model: { in: asics.map(({ model }) => model) } },
		_max: {
			id: true
		},
	}).then(rows => rows.map(({ _max, model }) => _max.id))

	function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
		return value !== null && value !== undefined;
	}

	const ids = rawIds.filter(notEmpty)

	const rawModels = await Promise.all(ids.map(id =>
		prisma.asicminervalue.findUnique({ where: { id } })
	))

	const models = rawModels.filter(notEmpty).sort((a, b) => b.profit - a.profit)

	return <AsicsLaout>
		<AsicsTable meta={asics} models={models} />
	</AsicsLaout>
}