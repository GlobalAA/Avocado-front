import styles from './Footer.module.scss'
import { options } from './options'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				{options.map(d => (
					<button key={d.title}>
						<d.icon />
						{d.title}
					</button>
				))}
			</div>
		</footer>
	)
}
