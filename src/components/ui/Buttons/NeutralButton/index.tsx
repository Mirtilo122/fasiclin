import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
	title: string
	ref: React.Ref<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement>

function NeutralButton({ title, ref, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			ref={ref}
			className="w-full rounded-sm bg-blue-700 p-2 text-white">
			{title}
		</button>
	)
}

export default NeutralButton
