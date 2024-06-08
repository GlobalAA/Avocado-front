import { Footer } from '@components/footer/Footer'
import { Header } from '@components/header/Header'
import type { PropsWithChildren } from 'react'
import style from './MainLayout.module.scss'

export default function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={style.wrapper}>
			<Header />
			<div className={style.main}>{children}</div>
			<Footer />
		</div>
	)
}
