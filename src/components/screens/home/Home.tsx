'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from './Home.module.scss'

export function Home() {
	const [score, setScore] = useState<number | null>(null)
	const avocadoRef = useRef<HTMLImageElement>(null)

	const clickHandle = () => {
		if (score == null) return
		avocadoRef.current?.classList.add(styles.active)

		setScore(score + 1)
		localStorage.setItem('score', score.toString())

		setTimeout(() => avocadoRef.current?.classList.remove(styles.active), 250)
	}

	useEffect(() => {
		const _score = Number(localStorage.getItem('score'))
		if (_score != null) {
			setScore(_score)
		} else {
			setScore(0)
		}
	}, [])

	return (
		<div className={styles.clicker}>
			<h1>
				{score != null
					? String(score).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
					: '000'}
			</h1>
			<Image
				src={'/avocado.svg'}
				alt={'Avocado'}
				ref={avocadoRef}
				width={400}
				draggable={false}
				height={400}
				onClick={clickHandle}
				onTouchStart={clickHandle}
			/>
		</div>
	)
}
