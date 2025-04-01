import { InputHTMLAttributes } from 'react'

type InputProps = {
	label: string
	ref: React.Ref<HTMLInputElement>
} & InputHTMLAttributes<HTMLInputElement>

function InputField({ label, ref, ...rest }: InputProps) {
	return (
		<label className="flex w-full flex-col max-sm:text-sm">
			{label}
			<input
				{...rest}
				ref={ref}
				className="bg-inputFields rounded-sm border-b-2 p-1 focus:outline-none"
			/>
		</label>
	)
}

export default InputField
