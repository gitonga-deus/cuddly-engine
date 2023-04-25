import Image from 'next/image'

import Kbd from './kbd'
import Pre from './pre'
import CustomLink from './link'

function RoundedImage(props) {
	return <Image alt={props.alt} className="rounded-lg shadow-md" {...props} />;
}

const MDXComponents = {
	Image: RoundedImage,
	a: CustomLink,
	pre: Pre,

	// Custom components
	Kbd,
}

export default MDXComponents