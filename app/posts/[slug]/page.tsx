import type { Metadata } from 'next'
import { notFound } from 'next/navigation';

import { allPosts } from 'contentlayer/generated';

import Header from './header';
import Content from './content';

type PostsPageProp = {
	params: {
		slug: string
	}
}

export const generateStaticParams = () => {
	return allPosts.map((post) => ({
		slug: post.slug,
	}))
}

export const generateMetadata = (props: PostsPageProp): Metadata => {
	const { params } = props

	const post = allPosts.find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return {
		title: post.title,
		description: post.excerpt,
	}
}

const PostsPage = (props: PostsPageProp) => {
	const { slug } = props.params;

	const post = allPosts.find((post) => post.slug === slug);

	if (!post) {
		notFound()
	}

	const { title, publishedAt } = post;

	return (
		<>
			{/* Main Content */}
			<Header title={title} readingTime={post.readingTime.text} date={publishedAt} />
			<Content slug={slug} post={post} />
		</>
	)
}

export default PostsPage;