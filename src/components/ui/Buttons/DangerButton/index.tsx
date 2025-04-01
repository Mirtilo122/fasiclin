import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
	title: string
	ref: React.Ref<HTMLButtonElement>
} & ButtonHTMLAttributes<HTMLButtonElement>

function DangerButton({ title, ref, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			ref={ref}
			className="bg-red-danger w-full rounded-sm p-2 text-white">
			{title}
		</button>
	)
}

export default DangerButton
