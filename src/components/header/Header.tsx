import styles from './Header.module.scss'

export function Header() {
	const today = new Date()

	return (
		<header className={styles.header}>
			<div>
				<span>Avocado 🥑</span>
				<span>{today.toDateString()}</span>
			</div>
		</header>
	)
}
