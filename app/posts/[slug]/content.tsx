import { Posts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/mdx/mdxcomponents'

type ContentProps = {
	post: Posts
	slug: string
}

const Content = (props: ContentProps) => {
	const { post, slug } = props

	const MDXComponent = useMDXComponent(post.body.code)

	return (
		<>
			<div className='mt-4 flex flex-col justify-between lg:flex-row'>
				<article className='w-full'>
					<div className='prose prose-zinc text-base text-shade-3 tracking-tight leading-7 max-w-none w-full dark:prose-invert'>
						<MDXComponent
							components={{
								...MDXComponents,
							}}
						/>
					</div>
				</article>
			</div>
		</>
	)
}

export default Content