import { InputHTMLAttributes } from 'react'

type InputProps = {
	label: string
	ref: React.Ref<HTMLInputElement>
} & InputHTMLAttributes<HTMLInputElement>

function InputDateField({ label, ref, ...rest }: InputProps) {
	return (
		<label className="flex w-40 flex-col max-sm:w-30 max-sm:text-sm">
			{label}
			<input
				{...rest}
				type="date"
				ref={ref}
				className="bg-inputFields rounded-sm border-b-2 p-0.5 focus:outline-none"
			/>
		</label>
	)
}

export default InputDateField
