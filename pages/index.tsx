import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import images from './images'

const Home: NextPage = () => (
	<div className={styles.container}>
		<h1>Welcome to Gallery</h1>

		<div className='col'>
			{images.map((image, i) => (
				<Image
					height={100}
					width={100}
					key={images[i].id}
					src={images[i].src}
					alt='Image'
				/>
			))}
			<Image src='/images/naruto.png' height={500} width={900} alt='Image' />
		</div>

		<div>
			{images.map((image, i) => (
				<Image
					height={100}
					width={100}
					key={images[i].id}
					src={images[i].src}
					alt='Image'
				/>
			))}
		</div>
	</div>
)

export default Home
