import { useEffect, useRef, useState } from 'react'
import './combobox.css'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid'

type ArrayProps = {
	id: number
	nome: string
}

type ComboboxProps = {
	label: string
	result: Function
	options: ArrayProps[]
	placeholder?: string
}

function Combobox({ result, label, options, placeholder }: ComboboxProps) {
	const [input, setInput] = useState('')
	const [idItem, setIdItem] = useState(0)
	const [showUl, setShowUl] = useState(false)
	const inputRef = useRef<HTMLInputElement | null>(null)

	const filteredArray = input
		? options.filter((item) =>
				item.nome.toLowerCase().includes(input.toLowerCase()),
			)
		: options

	const handleSelectItem = (name: string, id: number, e: any) => {
		e.preventDefault()
		setInput(name)
		setIdItem(id)
		setShowUl(false)
	}

	const handleShowUl = () => {
		if (!showUl) {
			setShowUl(true)
		}
	}

	const handleInputFocus = () => {
		if (!showUl) {
			setShowUl(true)
		} else {
			inputRef.current?.focus()
			setShowUl(false)
		}
	}

	useEffect(() => {
		result(idItem)
	}, [showUl])

	return (
		<label className="flex w-56 flex-col">
			{label}
			<div className="flex w-full justify-center">
				<input
					type="text"
					value={input}
					onChange={(e: any) => setInput(e.target.value)}
					className="bg-inputFields w-full rounded-l-sm border-b-2 p-1 focus:outline-none"
					ref={inputRef}
					onFocus={handleShowUl}
					placeholder={placeholder}
				/>
				<button
					onClick={handleInputFocus}
					className="bg-inputFields rounded-r-sm border-b-2 p-0.5">
					{showUl ? (
						<ChevronUpIcon className="size-5" />
					) : (
						<ChevronDownIcon className="size-5" />
					)}
				</button>
			</div>
			{showUl && (
				<ul className="bg-inputFields animate absolute top-[12.5%] z-50 mt-1 max-h-80 w-56 overflow-auto rounded-sm p-1 shadow-md">
					{filteredArray.map((item) => (
						<li
							key={item.id}
							onClick={(e) => handleSelectItem(item.nome, item.id, e)}
							className="rounded-sm p-2 hover:bg-gray-400">
							{item.nome}
						</li>
					))}
				</ul>
			)}
		</label>
	)
}

export default Combobox
