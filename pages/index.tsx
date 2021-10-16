import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import images from './images'

const Home: NextPage = () => (
	<div className={styles.container}>
		<h1>Welcome to Gallery</h1>

		<div className='col'>
			{images.map((image, i) => (
				<img
					height={100}
					width={100}
					key={images[i].id}
					src={images[i].src}
					alt=''
					style={{ display: 'block' }}
				/>
			))}
			<img src='/images/naruto.png' height={500} width={900} />
		</div>

		<div>
			{images.map((image, i) => (
				<img
					height={100}
					width={100}
					key={images[i].id}
					src={images[i].src}
					alt=''
				/>
			))}
		</div>
	</div>
)

export default Home
