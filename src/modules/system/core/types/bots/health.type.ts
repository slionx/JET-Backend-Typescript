import { TminMax } from "../minMax.type";

export type TbotsHealth = {
	Hydration: TminMax,
	Energy: TminMax,
	Temperature: TminMax,
	BodyParts: {
		Head: TminMax,
		Chest: TminMax,
		Stomach: TminMax,
		LeftArm: TminMax,
		RightArm: TminMax,
		LeftLeg: TminMax,
		RightLeg: TminMax
	}
}
