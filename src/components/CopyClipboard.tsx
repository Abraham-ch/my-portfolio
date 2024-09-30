import { useToast } from '../hooks/use-toast'

const CopyClipboard = () => {
    const { toast } = useToast()
    const value = "abraham.chafloque.a@uni,pe"
    const copyToClipboard = async (value: string) => {
        await navigator.clipboard.writeText(value)
        toast({
            title: '¡Copiado!',
            description: 'El correo electrónico ha sido copiado al portapapeles',
            duration: 2500
        })
    }
    return (
        <button onClick={() => copyToClipboard("abram.chafloque.a@uni.pe")}>
            <svg className="transition-all hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-red-500 w-9 h-auto" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
            </svg>
        </button>
    )
}

export { CopyClipboard }