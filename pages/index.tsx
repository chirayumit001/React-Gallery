import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

function Home() {
	const [index, setindex] = useState(0)
	const [index1, setindex1] = useState(0)

	const images = ['images/naruto.png', 'images/snowfall.png']

	const handlePrev = () => {
		setindex((index + 3 - images.length) % images.length)
		setindex1((index1 + 1) % images.length)
	}

	const handleNext = () => {
		setindex((index + 1) % images.length)
		setindex1((index1 + 1) % images.length)
	}

	const list = []

	for (let i = 0; i < images.length; i + 1) {
		list.push(<Image height={100} src={images[i]} alt='' />)
	}

	return (
		<>
			<div className={styles.container}>
				<button type='button' onClick={handlePrev}>
					{'<'}
				</button>
				<div className={styles.main}>
					<Image height={450} src={images[index]} alt='' />
					<div className='styles container'>{list}</div>
				</div>
				<button type='button' onClick={handleNext}>
					{'>'}
				</button>
			</div>
		</>
	)
}

export default Home
