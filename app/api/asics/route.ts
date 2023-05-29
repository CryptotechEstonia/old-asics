import { prisma } from "@/app/globa"
import { NextResponse } from "next/server"

const settings = [
	{ model: "Antminer L7 (9.5Gh)", price: 5923 },
	{ model: "Antminer S19 XP Hyd (255Th)", price: 7250 },
	{ model: "Antminer KA3 (166Th)", price: 9754 },
	{ model: "Antminer S19 XP (140Th)", price: 4199 },
	{ model: "Antminer S19k Pro (136Th)", price: 3876 },
	{ model: "Antminer E9 Pro (3.68Gh)", price: 3974 },
	{ model: "Antminer S19j Pro+ (122Th)", price: 3567 },
	{ model: "Antminer K7 (63.5Th)", price: 8640 },
	{ model: "Antminer S19j Pro (104Th)", price: 2477 },
	{ model: "Antminer S19 Pro (110Th)", price: 3490 },
	{ model: "Antminer S19j Pro (96Th)", price: 2434 },
]

function getPrice(model: string): number {
	return settings.find(asic => asic.model === model)?.price || 0
}

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
	return value !== null && value !== undefined;
}

const electricity = 0.05

export async function GET() {
	const ids = await prisma.asicminervalue.groupBy({
		by: ['model'],
		where: { model: { in: settings.map(({ model }) => model) } },
		_max: {
			id: true
		},
	}).then(rows => rows.map(({ _max }) => _max.id))
		.then(rows => rows.filter(notEmpty))

	const asics = await Promise.all(ids.map(id =>
		prisma.asicminervalue.findUnique({ where: { id } })
	)).then(models => models.filter(notEmpty))
		.then(models => models.map(model => Object.assign(model, { price: getPrice(model.model), electricity })))
		.then(models => models.map(model => Object.assign(model, {
			income: model.profit / 100,
			profit: model.profit / 100 - model.power / 1000 * 24 * electricity
		})))
		.then(models => models.map(model => {
			if (model.name === 'Antminer L7 (9.5Gh)')
				model.name = 'Antminer L7'

			return model
		}))

	return NextResponse.json(asics)
}