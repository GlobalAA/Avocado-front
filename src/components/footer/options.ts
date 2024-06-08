import {
	BotIcon,
	LucideIcon,
	ShirtIcon,
	StickyNoteIcon,
	TrendingUpIcon,
} from 'lucide-react'

export interface IOptions {
	type: 'redirect' | 'bot'
	title: string
	icon: LucideIcon
	href?: string
}

export const options: IOptions[] = [
	{
		type: 'redirect',
		title: 'Quest',
		icon: StickyNoteIcon,
		href: '/quest',
	},
	{
		type: 'redirect',
		title: 'Up',
		icon: TrendingUpIcon,
		href: '/skins',
	},
	{
		type: 'redirect',
		title: 'Skins',
		icon: ShirtIcon,
		href: '/skins',
	},
	{
		type: 'bot',
		title: 'Bot',
		icon: BotIcon,
	},
]
