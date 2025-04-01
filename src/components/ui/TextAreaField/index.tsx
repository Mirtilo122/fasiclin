import { TextareaHTMLAttributes } from 'react'

type TextAreaProps = {
	label: string
	col?: number
	ref: React.Ref<HTMLTextAreaElement>
} & TextareaHTMLAttributes<HTMLTextAreaElement>

function TextAreaField({ label, ref, ...rest }: TextAreaProps) {
	return (
		<label className="flex flex-col">
			{label}
			<textarea
				{...rest}
				ref={ref}
				className="bg-inputFields rounded-sm border-b-2 p-2 outline-none"></textarea>
		</label>
	)
}

export default TextAreaField
